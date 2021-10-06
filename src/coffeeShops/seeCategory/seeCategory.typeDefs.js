import { gql } from "apollo-server-express";

export default gql`
    type Query {
        seeCategory(id:Int!): Category
        seeCategories(lastId: Int): [Category]
    }
`;