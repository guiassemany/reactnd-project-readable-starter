import * as PostsAPI from '../../utils/PostsAPI'

export const UPVOTE_POST = 'UPVOTE_POST'
export const LOAD_POSTS = 'LOAD_POSTS'


export function serverUpVote(post_id) {
    return dispatch => {
        PostsAPI.votePost(post_id, 'upVote').then(res => {
          dispatch(upVote(post_id))
        })
    }
}

function upVote (post_id) {
    return {
        type: UPVOTE_POST,
        post_id
    }
}

export function serverLoadPosts() {
    return dispatch => {
        PostsAPI.getAll().then(res => {
            dispatch(loadPosts(res))
        })
    }
}

export function loadPosts(posts) {
    return {
        type: LOAD_POSTS,
        posts
    }
}
