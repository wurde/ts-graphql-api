/**
 * Dependencies
 */

import { Query, Mutation, Resolver, Arg, Int } from 'type-graphql';
import Post from '../models/Post';
import PostCreateInput from '../inputs/PostCreateInput';
import PostUpdateInput from '../inputs/PostUpdateInput';

/**
 * Define resolver
 */

@Resolver()
class PostResolver {
  @Mutation(() => Post)
  async createPost(
    @Arg('input', () => PostCreateInput) input: PostCreateInput
  ) {
    const post = await Post.create(input).save();
    return post;
  }

  @Mutation(() => Boolean)
  async updatePost(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => PostUpdateInput) input: PostUpdateInput
  ) {
    await Post.update({ id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg('id', () => Int) id: number) {
    await Post.delete({ id });
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
