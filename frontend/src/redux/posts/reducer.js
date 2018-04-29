import {LOAD_POSTS, VOTE_POST} from "./action"

const initialState = {
    list: []
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case VOTE_POST:
            let list = state.list.map(post => {
                if(post.id === action.post_id) {
                    if(action.voteType === 'upVote') {
                        post.voteScore ++
                    } else {
                        post.voteScore --
                    }

                }
                return post
            })
            return {
                ...state,
                list
            }
        case LOAD_POSTS:
            return {
                ...state,
                list: [
                    ...action.posts
                ]
            }
        default:
            return state
    }
}
