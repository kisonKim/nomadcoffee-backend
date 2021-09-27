"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _merge = require("@graphql-tools/merge");

var _loadFiles = require("@graphql-tools/load-files");

var _schema = require("@graphql-tools/schema");

var loadedTypes = (0, _loadFiles.loadFilesSync)("".concat(__dirname, "/**/*.typeDefs.js"));
var loadedResolvers = (0, _loadFiles.loadFilesSync)("".concat(__dirname, "/**/*.resolvers.js"));
var typeDefs = (0, _merge.mergeTypeDefs)(loadedTypes);
var resolvers = (0, _merge.mergeResolvers)(loadedResolvers);
var schema = (0, _schema.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});
var _default = schema;
exports["default"] = _default;