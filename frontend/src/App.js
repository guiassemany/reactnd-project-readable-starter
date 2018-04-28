import React, {Component} from 'react'
import './App.css'
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
