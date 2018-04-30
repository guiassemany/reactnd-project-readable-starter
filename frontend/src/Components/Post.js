import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {Col, Row, Button, ButtonGroup} from "reactstrap"
import {formatDate} from "../utils/Helpers"
import {Link} from "react-router-dom"

class Post extends Component {
    render() {
        const {post, votePost, deletePost, changeCurrentPost} = this.props
        return (
            <div>
                <div className="card mb-1">
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link onClick={() => changeCurrentPost(post)} to={`/${post.category}/${post.id}`}>{post.title}</Link>
                        </h4>
                        <span className="badge badge-primary">{post.category}</span>
                        <hr/>
                        <p className="card-text">{post.body}</p>
                        <hr/>
                        <Row className='text-center'>
                            <Col xs={3} className={post.voteScore >= 0 ? 'text-success' : 'text-danger'}>
                                <FontAwesomeIcon icon="thumbs-up"/>
                                <p>{post.voteScore}</p>
                            </Col>
                            <Col xs={3} className='text-primary'>
                                <FontAwesomeIcon icon="comments"/>
                                <p>{post.commentCount}</p>
                            </Col>
                            <Col xs={3} className='text-info'>
                                <Button outline color='info'>
                                    <FontAwesomeIcon icon="edit"/>
                                </Button>
                            </Col>
                            <Col xs={3} className='text-danger'>
                                <Button outline color='danger' onClick={(e) => deletePost(post.id)}>
                                    <FontAwesomeIcon icon="trash"/>
                                </Button>
                            </Col>
                        </Row>
                        <hr/>
                        <ButtonGroup>
                            <Button size="sm" outline color="primary"
                                    onClick={() => votePost(post.id, 'upVote')}>UpVote</Button>
                            <Button size="sm" outline color="danger"
                                    onClick={() => votePost(post.id, 'downVote')}>DownVote</Button>
                        </ButtonGroup>
                    </div>
                    <div className="card-footer text-muted">
                        Publicado em {formatDate(post.timestamp)} por
                        <a href="#"> {post.author}</a>
                    </div>
                </div>
            </div>
        )
    }
}

Post.propTypes = {}

export default Post
