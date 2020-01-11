# TypeGraphQL Example

An example backend API using TypeGraphQL library.

It's a GraphQL API in Node.js with TypeScript. In
this demo app I explore how TypeGraphQL addresses
the issue of reduntant code often associated with
this tech stack. It does this by allowing a developer
to define their API using classes and decorators.

## Apollo Server

For a GraphQL server I use the ApolloServer. This 
allows passing in an executable `schema`, which 
combines both type definitions and resolvers.

## SQLite Database

I use SQLite as a local data store.

Our API serves The Open Data Dataset. It's a dataset 
containing the Open Data Portals of 100 of America's
largest cities.

## References

- https://typegraphql.ml/
- https://www.apollographql.com/docs/apollo-server/api/apollo-server/
- https://cooldatasets.com/
