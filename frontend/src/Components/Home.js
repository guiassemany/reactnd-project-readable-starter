import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CategoryList from "./CategoryList"
import * as CategoriesAPI from "../utils/CategoriesAPI"
import * as PostAPI from "../utils/PostsAPI"
import {Container, Row, Col} from 'reactstrap'
import PostList from "./PostList"
import TopBar from "./TopBar"

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
})

class Home extends Component {
    state = {
        categories: [],
        posts: []
    }

    componentDidMount() {
        CategoriesAPI.getAll().then(res => {
            this.setState({
                categories: res
            })
        })
        PostAPI.getAll().then(res => {
            this.setState({
                posts: res
            })
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <TopBar />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12}>
                        <h4>Categorias</h4>
                        <CategoryList categories={this.state.categories}/>
                        <hr/>
                        <h4>Posts</h4>
                        <PostList posts={this.state.posts}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

Home.propTypes = {}

export default Home
