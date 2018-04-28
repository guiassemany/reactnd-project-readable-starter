import {combineReducers} from 'redux'
import posts from './posts/reducer'
import categories from './category/reducer'

export default combineReducers({
    posts,
    categories
});
