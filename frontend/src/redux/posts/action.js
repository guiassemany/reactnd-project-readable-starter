import * as PostsAPI from '../../utils/PostsAPI'

export const VOTE_POST = 'VOTE_POST'
export const LOAD_POSTS = 'LOAD_POSTS'

/* Async Actions */
export function serverVote(post_id, type) {
    return dispatch => {
        PostsAPI.votePost(post_id, type).then(res => {
          dispatch(vote(post_id, type))
        })
    }
}

export function serverLoadPosts() {
    return dispatch => {
        PostsAPI.getAll().then(res => {
            dispatch(loadPosts(res))
        })
    }
}

/* Actions */
function vote(post_id, voteType) {
    return {
        type: VOTE_POST,
        post_id,
        voteType
    }
}

export function loadPosts(posts) {
    return {
        type: LOAD_POSTS,
        posts
    }
}
