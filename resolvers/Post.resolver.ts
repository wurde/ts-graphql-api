/**
 * Dependencies
 */

import { Query, Mutation, Resolver, Arg } from 'type-graphql';
import Post from '../models/Post';
import PostCreateInput from '../inputs/PostCreateInput';

/**
 * Define resolver
 */

@Resolver()
class PostResolver {
  @Mutation(() => Boolean)
  async createPost(
    @Arg('input', () => PostCreateInput) input: PostCreateInput
  ) {
    await Post.insert(input);
    return true;
  }

  @Query(() => [Post])
  posts() {
    return Post.find();
  }
}

/**
 * Export resolver
 */

export default PostResolver;
