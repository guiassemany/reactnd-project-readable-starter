export const UPVOTE_POST = 'UPVOTE_POST'
export const LOAD_POSTS = 'LOAD_POSTS'

export function upvote(post_id) {
    return {
        type: UPVOTE_POST,
        post_id
    }
}

export function loadPosts(posts) {
    return {
        type: LOAD_POSTS,
        posts
    }
}
