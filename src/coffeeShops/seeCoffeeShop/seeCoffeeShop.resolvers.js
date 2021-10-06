import client from "../../client";


export default {
  Query: {
    seeCoffeeShop: (_, { id }) =>
      client.coffeeShop.findUnique({
        where: {
          id,
        },
      }),
    seeCoffeeshops: (_, {lastId}) => client.coffeeShop.findMany({
      take: 5,
      skip: lastId? 1 : 0,
      ...(lastId && {cursor: {id: lastId}}),
    }),
  },
};
