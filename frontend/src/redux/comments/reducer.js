import {LOAD_COMMENTS} from './action'

const initialState = {
    list: []
}

export default function comments(state = initialState, action) {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                list: action.comments
            }
        default:
            return state
    }
}
