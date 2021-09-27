"use strict";

var _apolloServer = require("apollo-server");

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var server = new _apolloServer.ApolloServer({
  schema: _schema["default"]
});
var PORT = process.env.PORT;
server.listen().then(function () {
  return console.log("Server is running on http://localhost:".concat(PORT, "/"));
});