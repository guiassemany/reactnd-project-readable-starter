import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Col, Row, Table} from "reactstrap"

class PostList extends Component {
    render() {
        const { posts } = this.props;
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
                            {posts.map((post, index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td>{post.category}</td>
                                    <td>{post.voteScore}</td>
                                    <td>{post.commentCount}</td>
                                    <td>
                                        <Button size="sm" outline color="primary">UpVote</Button>
                                        <Button size="sm" outline color="danger">DownVote</Button>
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

PostList.propTypes = {}

export default PostList
