import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import * as CategoriesAPI from './utils/CategoriesAPI'
import * as PostAPI from './utils/PostsAPI'
import * as CommentsAPI from './utils/CommentsAPI'


class App extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        CategoriesAPI.getAll().then(res => {
            this.setState({
                categories: res
            })
        })
    }

    render() {
        return (
            <h1>Teste</h1>
        )
    }
}

export default App
