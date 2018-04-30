import {combineReducers} from 'redux'
import posts from './posts/reducer'
import categories from './category/reducer'
import comments from './comments/reducer'

export default combineReducers({
    posts,
    categories,
    comments
});
