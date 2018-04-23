import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import * as CategoriesAPI from './utils/CategoriesAPI'
import * as PostAPI from './utils/PostsAPI'
import * as CommentsAPI from './utils/CommentsAPI'
import CategoryList from './Components/CategoryList'
import {Route} from "react-router-dom"
import Home from "./Components/Home"


class App extends Component {

    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/:category' render={() => (<h1>Olá</h1>)} />
            </div>
        )
    }
}

export default App
