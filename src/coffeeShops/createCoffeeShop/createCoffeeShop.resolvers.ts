import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { handlePhoto, processCategory } from "../../utils";

const createShopResolverFn = async (
  _,
  { name, latitude, longitude, categories, photos },
  { loggedInUser }
) => {
  let photosObj = [];
  if (photos) {
    const urlList = await handlePhoto(photos, loggedInUser.id);
    urlList.map((url) =>
      photosObj.push({
        where: { url },
        create: { url },
      })
    );
  }
  console.log(photosObj);

  let categoriesObj = [];
  if (categories) {
    categoriesObj = processCategory(categories);
  }

  return client.coffeeShop.create({
    data: {
      name,
      latitude,
      longitude,
      user: {
        connect: {
          id: loggedInUser.id,
        },
      },
      ...(photosObj.length > 0 && {
        photos: {
          connectOrCreate: photosObj,
        },
      }),
      ...(categoriesObj.length > 0 && {
        categories: {
          connectOrCreate: categoriesObj,
        },
      }),
    },
  });
};

export default {
  Mutation: {
    createShop: protectedResolver(createShopResolverFn),
  },
};
