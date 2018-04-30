import React, {Component} from 'react'
import './App.css'
import {Route} from "react-router-dom"
import Home from "./Components/Home"
import CategoryPage from "./Components/CategoryPage"
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import PostPage from "./Components/PostPage"

fontawesome.library.add(solid)

class App extends Component {

    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/:category' component={CategoryPage} />
                    <Route exact path='/:category/:post_id' component={PostPage} />
            </div>
        )
    }
}

export default App
