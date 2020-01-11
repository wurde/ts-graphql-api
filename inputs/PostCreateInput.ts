/**
 * Dependencies
 */

import { InputType, Field } from 'type-graphql';

/**
 * Define input
 */

@InputType()
class PostCreateInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  content: string;
}

/**
 * Export input
 */

export default PostCreateInput;
