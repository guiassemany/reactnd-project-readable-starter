import * as PostsAPI from '../../utils/PostsAPI'
import * as CommentsAPI from '../../utils/CommentsAPI'

export const LOAD_COMMENTS = 'LOAD_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'


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

export function serverVoteComment(comment_id, voteType) {
    return dispatch => {
        CommentsAPI.voteComment(comment_id, voteType).then(res => {
            dispatch(voteComment(comment_id, voteType));
        })
    }
}

export function serverEditComment(comment_id, comment) {
    return dispatch => {
        CommentsAPI.editComment(comment).then(res => {
            dispatch(editComments(comment));
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

export function voteComment(comment_id, voteType) {
    return {
        type: VOTE_COMMENT,
        comment_id,
        voteType
    }
}

export function editComments (comment) {
    return {
        type: EDIT_COMMENT,
        comment
    }
}
