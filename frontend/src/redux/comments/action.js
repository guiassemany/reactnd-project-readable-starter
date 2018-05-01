import * as PostsAPI from '../../utils/PostsAPI'

export const LOAD_COMMENTS = 'LOAD_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

/*Async*/
export function serverLoadComments (post_id) {
    return dispatch => {
        PostsAPI.getCommentsForPost(post_id).then((res) => {
            dispatch(loadComments(res))
        })
    }
}
export function serverAddComment(comment) {
    return dispatch => {
        PostsAPI.createComment(comment).then((res) => {
            dispatch(addComment(res))
        })
    }
}
export function serverDeleteComment(comment_id) {
    return dispatch => {
        PostsAPI.deleteComment(comment_id).then((res) => {
            dispatch(deleteComment(res))
        })
    }
}


/*Sync*/

export function loadComments (comments) {
    return {
        type: LOAD_COMMENTS,
        comments
    }
}

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    }
}
