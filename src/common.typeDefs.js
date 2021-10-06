import { gql } from "apollo-server"

export default gql`
  # The implementation for this scalar is provided by the
  # 'GraphQLUpload' export from the 'graphql-upload' package
  # in the resolver map below.
  
  scalar Upload,
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  },
  type ResolverResult{
        ok: Boolean!,
        error: String
    }
`;