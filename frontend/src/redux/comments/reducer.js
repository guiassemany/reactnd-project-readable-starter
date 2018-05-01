import {LOAD_COMMENTS, ADD_COMMENT, DELETE_COMMENT, VOTE_COMMENT} from './action'

const initialState = {
    list: []
}

export default function comments(state = initialState, action) {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                list: action.comments
            }
        case ADD_COMMENT:
            return {
                list: [
                    ...state.list,
                    action.comment
                ]
            }
        case DELETE_COMMENT:
            return {
                ...state,
                list: state.list.filter(comment => comment.id !== action.comment.id)
            }
        case VOTE_COMMENT:
            const newList = state.list.map(comment => {
                if(comment.id === action.comment_id) {
                    if(action.voteType === 'upVote') {
                        comment.voteScore++
                    } else {
                        comment.voteScore--
                    }
                }
                return comment;
            })
            return {
                ...state,
                list: newList
            }
        default:
            return state
    }
}
