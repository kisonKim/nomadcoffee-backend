require('dotenv').config();
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";
import { graphqlUploadExpress } from "graphql-upload";

const PORT = process.env.PORT;

async function startServer() {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: async ({req }) => {
      return {
        loggedInUser : await getUser(req.headers.token),
      }
    },
  });

await server.start();
const app = express();
app.use(graphqlUploadExpress());
app.use(logger("tiny"));
server.applyMiddleware({ app });
app.use("/static", express.static("uploads"));
app.listen({ port: PORT }, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
}

startServer();
