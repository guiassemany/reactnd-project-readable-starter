import * as PostsAPI from '../../utils/PostsAPI'

export const LOAD_COMMENTS = 'LOAD_COMMENTS'

export function serverLoadComments (post_id) {
    return dispatch => {
        PostsAPI.getCommentsForPost(post_id).then((res) => {
            dispatch(loadComments(res))
        })
    }
}

export function loadComments (comments) {
    return {
        type: LOAD_COMMENTS,
        comments
    }
}
