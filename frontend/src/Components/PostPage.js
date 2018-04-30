import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, Button, ButtonGroup, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap"
import TopBar from "./TopBar"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {serverLoadComments} from "../redux/comments/action"
import {connect} from "react-redux"
import {serverLoadPostById} from "../redux/posts/action"
import {formatDate} from "../utils/Helpers"

class PostPage extends Component {
    componentDidMount() {
        this.props.loadPostDetails(this.props.match.params.post_id)
        this.props.loadComments(this.props.match.params.post_id)
    }

    render() {
        const {post, comments} = this.props
        console.log(comments)
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
                                    Autor: <span classNameName="badge badge-primary">{post.author}</span> /
                                    Categoria: <span classNameName="badge badge-primary">{post.category}</span>
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
                                    <Col xs={6} >
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
                                        <ButtonGroup>
                                            <Button outline color="primary">UpVote</Button>
                                            <Button outline color="danger">DownVote</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row classNameName='text-center'>
                                    <Col xs={6} classNameName='text-primary'>
                                        <Button block={true} outline color='info'>
                                            <FontAwesomeIcon icon="edit"/>
                                            <p>Editar</p>
                                        </Button>
                                    </Col>
                                    <Col xs={6} classNameName='text-primary'>
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
                        <div className="comments">
                            <div className="comment-wrap">
                                <div className="photo">
                                    <div className="avatar"
                                         style={{backgroundImage: "url('https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg')"}}></div>
                                </div>
                                <div className="comment-block">
                                    <form action="">
                                        <textarea name="" id="" cols="30" rows="3"
                                                  placeholder="Add comment..."></textarea>
                                    </form>
                                </div>
                            </div>
                            {comments && comments.map(comment => (
                                <div className="comment-wrap">
                                    <div className="photo">
                                        <div className="avatar"
                                             style={{backgroundImage: "url('https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg')"}}></div>
                                    </div>
                                    <div className="comment-block">
                                        <p className="comment-text">{comment.author}</p>
                                        <p className="comment-text">{comment.body}</p>
                                        <div className="bottom-comment">
                                            <div className="comment-date">{formatDate(comment.timestamp)}</div>
                                            <ul className="comment-actions">
                                                <li className="firstOpt">
                                                    <ButtonGroup>
                                                        <Button size="sm" outline color="primary">UpVote</Button>
                                                        <Button size="sm" outline color="danger">DownVote</Button>
                                                    </ButtonGroup>
                                                </li>
                                                <li className="secondOpt">Responder</li>
                                                <li className="thirdOpt">Editar</li>
                                                <li className="fourthOpt">Deletar</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

PostPage.propTypes = {}

const mapStateToProps = (state) => {
    return {
        post: state.posts.currentPost,
        comments: state.comments.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPostDetails: post_id => {
            dispatch(serverLoadPostById(post_id))
        },
        loadComments: (post_id) => {
            dispatch(serverLoadComments(post_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
