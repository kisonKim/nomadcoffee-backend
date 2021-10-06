import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    editShop(
      id: Int!
      name: String
      latitude: String
      longitude: String
      file: Upload
      categories: String
    ): ResolverResult!
  }
`;
