import { normalize, schema } from 'normalizr';

export const postSchema = new schema.Entity('posts');
export const postListSchema = new schema.Array(postSchema)

