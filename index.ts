/**
 * Dependencies
 */

import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

/**
 * Constants
 */

const port = process.env.PORT || 4000;

/**
 * Bootstrap server
 */

async function bootstrap() {
  /**
   * Define schema
   */

  const schema = await buildSchema();

  /**
   * Define server
   */

  const server = new ApolloServer({
    schema,
    playground: true
  });

  /**
   * Start server
   */

  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

bootstrap();
