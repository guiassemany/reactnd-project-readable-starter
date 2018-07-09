import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Card, Button, CardBody, CardSubtitle, CardText, Col, Container, Row, Modal, ModalHeader, ModalBody,
} from "reactstrap"
import TopBar from "./TopBar"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {connect} from "react-redux"
import {serverDeletePost, serverEditPost, serverLoadPostById} from "../redux/posts/action"
import CommentList from "./CommentList"
import PostVote from "./PostVote"
import PostForm from "./PostForm"
import { withRouter } from 'react-router-dom'
import Swal from "sweetalert2"
import NotFoundPage from "./NotFoundPage"

class PostPage extends Component {

    componentWillMount() {
        this.props.loadPostDetails(this.props.match.params.post_id)
    }

    state = {
        modal: false,
        orderedPosts: []
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    deletePost (id) {
        this.props.deletePost(id)
        this.props.history.push('/')
        Swal('Sucesso', 'Post deletado!', 'success')
    }

    render() {
        const {post, editPost, error} = this.props
        if(post.title !== undefined) {
            return (
                <Container fluid={true}>
                    <TopBar/>
                    <Row>
                        <Col xs={12}>
                            <h3>
                                {post.title}
                            </h3>
                            <hr/>
                        </Col>
                        <Col xs={12} md={8}>
                            <Card>
                                <CardBody>
                                    <CardSubtitle>
                                        Autor: <span className="badge badge-primary">{post.author}</span> /
                                        Categoria: <span className="badge badge-primary">{post.category}</span>
                                    </CardSubtitle>
                                    <hr/>
                                    <CardText>
                                        {post.body}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card>
                                <CardBody>
                                    <Row className='text-center'>
                                        <Col xs={6}>
                                            <FontAwesomeIcon icon="thumbs-up"/>
                                            <p>{post.voteScore}</p>
                                            Votos
                                        </Col>
                                        <Col xs={6} className='text-primary'>
                                            <FontAwesomeIcon icon="comments"/>
                                            <p>{post.commentCount}</p>
                                            Comentários
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col xs={12} className='text-center'>
                                            <PostVote post_id={post.id}/>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className='text-center'>
                                        <Col xs={6} className='text-primary'>
                                            <Button block={true} outline color='info' onClick={() => this.toggle()}>
                                                <FontAwesomeIcon icon="edit"/>
                                                <p>Editar</p>
                                            </Button>
                                        </Col>
                                        <Col xs={6} className='text-primary'>
                                            <Button block={true} outline color='danger' onClick={() => this.deletePost(post.id)}>
                                                <FontAwesomeIcon icon="trash"/>
                                                <p>Deletar</p>
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8}>
                            {post.id && (
                                <CommentList post_id={post.id} />
                            )}
                        </Col>
                    </Row>
                    <Modal isOpen={this.state.modal} toggle={() => this.toggle()} backdrop={true}>
                        <ModalHeader toggle={() => this.toggle()}>Post</ModalHeader>
                        <ModalBody>
                            <PostForm addPost={editPost} addPostCb={this.toggle} post={post}/>
                        </ModalBody>
                    </Modal>
                </Container>
            )
        }
        return <NotFoundPage />
    }
}

PostPage.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        post: state.posts.currentPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPostDetails: post_id => {
            dispatch(serverLoadPostById(post_id))
        },
        editPost: (id, type) => {
            dispatch(serverEditPost(id, type))
        },
        deletePost: post_id => {
            dispatch(serverDeletePost(post_id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
