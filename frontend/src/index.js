import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from "react-redux"
import rootReducer from './redux/rootReducer'
import thunk from 'redux-thunk'
import {serverLoadPosts} from "./redux/posts/action"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

store.dispatch(serverLoadPosts());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
