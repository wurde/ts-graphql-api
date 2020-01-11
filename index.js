"use strict";
/**
 * Dependencies
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
/**
 * Constants
 */
const port = process.env.PORT || 4000;
/**
 * Bootstrap server
 */
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        /**
         * Define schema
         */
        const schema = yield type_graphql_1.buildSchema();
        /**
         * Define server
         */
        const server = new apollo_server_1.ApolloServer({
            schema,
            playground: true
        });
        /**
         * Start server
         */
        server.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    });
}
bootstrap();
