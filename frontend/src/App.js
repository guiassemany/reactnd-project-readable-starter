import React, {Component} from 'react'
import './App.css'
import {Route, Switch} from "react-router-dom"
import Home from "./Components/Home"
import CategoryPage from "./Components/CategoryPage"
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import PostPage from "./Components/PostPage"
import NotFoundPage from "./Components/NotFoundPage"

fontawesome.library.add(solid)

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/404' component={NotFoundPage}/>
                    <Route exact path='/:category' component={CategoryPage}/>
                    <Route exact path='/:category/:post_id' component={PostPage}/>
                </Switch>
            </div>
        )
    }
}

export default App
