import {
    ADD_POST, LOAD_POSTS, VOTE_POST, CHANGE_FILTER, DELETE_POST, CHANGE_CURRENT_POST, EDIT_POST
} from "./action"
import {ADD_COMMENT, DELETE_COMMENT} from "../comments/action"

const initialState = {
    list: [],
    orderBy: 'voteScore',
    currentPost: {}
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case VOTE_POST:
            let changedPost = null;
            let list = state.list.map(post => {
                if (post.id === action.post_id) {
                    if (action.voteType === 'upVote') {
                        post.voteScore++
                    } else {
                        post.voteScore--
                    }
                    changedPost = post;
                }
                return post
            })
            return {
                ...state,
                list,
                currentPost: {
                    ...state.currentPost,
                    voteScore: changedPost.voteScore
                }
            }
        case LOAD_POSTS:
            return {
                ...state,
                list: [
                    ...action.posts
                ]
            }
        case ADD_POST:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.post
                ]
            }
        case EDIT_POST:
            let listEdit = state.list.map(post => {
                if (post.id === action.post.id) {
                    post = action.post;
                }
                return post;
            })
            return {
                ...state,
                list: listEdit,
                currentPost: state.currentPost.id === action.post.id ? action.post : state.currentPost
            }
        case DELETE_POST:
            return {
                ...state,
                list: state.list.filter(post => post.id !== action.post_id)
            }
        case CHANGE_FILTER:
            return {
                ...state,
                orderBy: action.field
            }
        case CHANGE_CURRENT_POST:
            return {
                ...state,
                currentPost: action.post
            }
        case ADD_COMMENT:
            return {
                ...state,
                list: state.list.map(post => {
                    if (post.id === action.comment.parentId) {
                        post.commentCount++
                    }
                    return post
                }),
                currentPost: {
                    ...state.currentPost,
                    commentCount: state.currentPost.commentCount + 1
                }
            }
        case DELETE_COMMENT:
            return {
                ...state,
                list: state.list.map(post => {
                    if (post.id === action.comment.parentId) {
                        post.commentCount--
                    }
                    return post
                }),
                currentPost: {
                    ...state.currentPost,
                    commentCount: state.currentPost.commentCount - 1
                }
            }
        default:
            return state
    }
}
