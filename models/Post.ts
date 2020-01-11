/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Define model
 */

@Entity()
class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}

/**
 * Export model
 */

export default Post;
