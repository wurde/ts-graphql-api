/**
 * Dependencies
 */

import { Query, Mutation, Resolver, Arg } from 'type-graphql';
import Post from '../models/Post';

/**
 * Define resolver
 */

@Resolver()
class PostResolver {
  @Mutation(() => Boolean)
  async createPost(
    @Arg("title") title: string,
    @Arg("content", { nullable: true }) content?: string,
  ) {
    const post = new Post();
    post.title = title;
    if (content) post.content = content;
    await post.save();
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
