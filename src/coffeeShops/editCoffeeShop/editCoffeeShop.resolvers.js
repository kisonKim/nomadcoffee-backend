import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { handlePhoto, processCategory } from "../../utils";

export default {
    Mutation: {
      editShop: protectedResolver(
        async (
          _,
          { id, name, latitude, longitude, file, categories },
          { loggedInUser }
        ) => {
          const shop = await client.coffeeShop.findUnique({
            where: {
              id,
            },
          });
  
          if (!shop) {
            return {
              ok: false,
              error: 'Cannot find coffee shop.',
            };
          }

          try {
            await client.coffeeShop.update({
              where: {
                id,
              },
              data: {
                name,
                latitude,
                longitude,
                ...(categories && 
                  { categories: {
                    disconnect: shop.categories,
                    connectOrCreate: processCategory(categories),
                  }}),
              }});

            if(file){
              const url = await handlePhoto(file, loggedInUser.id)
              console.log(url);
              await client.coffeeShopPhoto.create({
                data: {
                  url,
                  coffeeshop: {
                    connect: {
                      id
                    }
                  }
                }
              });
            }
            return {
              ok: true,
            };
          } catch (error) {
            return {
              ok: false,
              error: `${error}`,
            };
          }
        }
      ),
    },
  }