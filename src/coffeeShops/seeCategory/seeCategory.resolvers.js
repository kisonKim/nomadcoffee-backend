import client from "../../client";

export default {
    Query: {
        seeCategory: (_, {id}) => client.category.findUnique({
            where: {id},
        }),
        seeCategories: (_, {lastId}) => client.category.findMany({
            take: 5,
            skip: lastId? 1 : 0,
            ...(lastId && {cursor: {id: lastId}}),
        }),
    },
}