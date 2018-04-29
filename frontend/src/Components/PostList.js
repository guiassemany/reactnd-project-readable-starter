import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Col, Row, Table} from "reactstrap"
import {serverVote} from "../redux/posts/action"
import {connect} from "react-redux"

class PostList extends Component {
    render() {
        const { posts, votePost } = this.props;
        return (
            <div>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Categoria</th>
                                <th>Score</th>
                                <th>Comment Count</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {posts && posts.map((post, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td>{post.category}</td>
                                    <td>{post.voteScore}</td>
                                    <td>{post.commentCount}</td>
                                    <td>
                                        <Button size="sm" outline color="primary" onClick={() => votePost(post.id, 'upVote')}>UpVote</Button>
                                        <Button size="sm" outline color="danger" onClick={() => votePost(post.id, 'downVote')}>DownVote</Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        posts: state.posts.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        votePost: (id, type) => {
            dispatch(serverVote(id, type))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
