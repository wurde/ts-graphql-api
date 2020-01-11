/**
 * Dependencies
 */

import { InputType, Field } from 'type-graphql';

/**
 * Define input
 */

@InputType()
class PostUpdateInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  content?: string;
}

/**
 * Export input
 */

export default PostUpdateInput;
