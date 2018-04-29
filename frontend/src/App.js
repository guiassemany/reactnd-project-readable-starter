import React, {Component} from 'react'
import './App.css'
import {Route} from "react-router-dom"
import Home from "./Components/Home"
import CategoryPage from "./Components/CategoryPage"
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(solid)

class App extends Component {

    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/:category' component={CategoryPage} />
            </div>
        )
    }
}

export default App
