import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CategoryList from "./CategoryList"
import * as CategoriesAPI from "../utils/CategoriesAPI"
import * as PostAPI from "../utils/PostsAPI"
import {Container, Row, Col} from 'reactstrap'
import PostList from "./PostList"
import TopBar from "./TopBar"
import {connect} from "react-redux"
import {loadPosts} from "../redux/posts/action"
import {normalize} from "normalizr"
import {postListSchema} from "../redux/schema"

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
    componentDidMount() {

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
                        <CategoryList />
                        <hr/>
                        <h4>Posts</h4>
                        <PostList />
                    </Col>
                </Row>
            </Container>
        )
    }
}

Home.propTypes = {}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
