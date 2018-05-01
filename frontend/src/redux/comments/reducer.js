import {LOAD_COMMENTS, ADD_COMMENT, DELETE_COMMENT} from './action'

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
        default:
            return state
    }
}
