import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Card, Button, CardBody, CardSubtitle, CardText, Col, Container, Row,
} from "reactstrap"
import TopBar from "./TopBar"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {connect} from "react-redux"
import {serverLoadPostById} from "../redux/posts/action"
import CommentList from "./CommentList"
import PostVote from "./PostVote"

class PostPage extends Component {

    componentDidMount() {
        this.props.loadPostDetails(this.props.match.params.post_id)
    }

    render() {
        const {post} = this.props
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
                                        <Button block={true} outline color='info'>
                                            <FontAwesomeIcon icon="edit"/>
                                            <p>Editar</p>
                                        </Button>
                                    </Col>
                                    <Col xs={6} className='text-primary'>
                                        <Button block={true} outline color='danger'>
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
            </Container>
        )
    }
}

PostPage.propTypes = {}

const mapStateToProps = (state) => {
    return {
        post: state.posts.currentPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPostDetails: post_id => {
            dispatch(serverLoadPostById(post_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
