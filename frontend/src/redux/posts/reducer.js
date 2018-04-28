import {LOAD_POSTS, UPVOTE_POST} from "./action"

const initialState = {
    list: [
        {
            id: 1,
            title: 'teste',
            author: 'Guilherme',
            category: 'react',
            voteScore: 1,
            commentCount: 0
        }
    ]
}


export default function posts(state = initialState, action) {
    switch (action.type) {
        case UPVOTE_POST:
            let list = state.list.map(post => {
                if(post.id === action.post_id) {
                    post.voteScore ++
                }
                return post
            })
            return {
                ...state,
                list
            }
        case LOAD_POSTS:
            return state
        default:
            return state
    }
}
