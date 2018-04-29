import * as PostsAPI from '../../utils/PostsAPI'

export const VOTE_POST = 'VOTE_POST'
export const LOAD_POSTS = 'LOAD_POSTS'
export const ADD_POST = 'ADD_POST'
export const CHANGE_FILTER = 'CHANGE_FILTER'

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

export function serverAddPost(post) {
    return dispatch => {
        PostsAPI.create(post).then(res => {
            dispatch(addPost(res))
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

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function changeFilter(field) {
    return {
        type: CHANGE_FILTER,
        field
    }
}
