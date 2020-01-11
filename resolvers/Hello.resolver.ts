/**
 * Dependencies
 */

import { Query, Resolver } from 'type-graphql';

/**
 * Define resolver
 */

@Resolver()
class Hello {
  @Query(() => String)
  hello() {
    return "Hello!";
  }
}

/**
 * Export resolver
 */

export default Hello;
