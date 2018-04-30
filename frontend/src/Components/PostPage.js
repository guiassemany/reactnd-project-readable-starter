import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, Button, ButtonGroup, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap"
import TopBar from "./TopBar"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class PostPage extends Component {
    render() {
        return (
            <Container fluid={true}>
                <TopBar/>
                <Row>
                    <Col xs={12}>
                        <h3>
                            Title
                        </h3>
                        <hr/>
                    </Col>
                    <Col xs={12} md={8}>
                        <Card>
                            <CardBody>
                                <CardSubtitle>
                                    Autor: <span className="badge badge-primary">Guilherme Assemany</span> /
                                    Categoria: <span className="badge badge-primary">REDUX</span>
                                </CardSubtitle>
                                <hr/>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</CardText>
                                <ButtonGroup>
                                    <Button size="sm" outline color="primary">UpVote</Button>
                                    <Button size="sm" outline color="danger">DownVote</Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card>
                            <CardBody>
                                <Row className='text-center'>
                                    <Col xs={6}>
                                        <FontAwesomeIcon icon="thumbs-up"/>
                                        <p>58</p>
                                        Votos
                                    </Col>
                                    <Col xs={6} className='text-primary'>
                                        <FontAwesomeIcon icon="comments"/>
                                        <p>110</p>
                                        Comentários
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
                        <div class="comments">
                            <div class="comment-wrap">
                                <div class="photo">
                                    <div class="avatar"
                                         style={{backgroundImage: "url('https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg')"}}></div>
                                </div>
                                <div class="comment-block">
                                    <form action="">
                                        <textarea name="" id="" cols="30" rows="3"
                                                  placeholder="Add comment..."></textarea>
                                    </form>
                                </div>
                            </div>

                            <div class="comment-wrap">
                                <div class="photo">
                                    <div class="avatar"
                                         style={{backgroundImage: "url('https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg')"}}></div>
                                </div>
                                <div class="comment-block">
                                    <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum.
                                        Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga
                                        corporis totam reprehenderit quasi
                                        sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque,
                                        corrupti?</p>
                                    <div class="bottom-comment">
                                        <div class="comment-date">Aug 24, 2014 @ 2:35 PM</div>
                                        <ul class="comment-actions">
                                            <li class="complain">Complain</li>
                                            <li class="reply">Reply</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="comment-wrap">
                                <div class="photo">
                                    <div class="avatar"
                                         style={{backgroundImage: "url('https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg')"}}></div>
                                </div>
                                <div class="comment-block">
                                    <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum.
                                        Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga
                                        corporis totam.</p>
                                    <div class="bottom-comment">
                                        <div class="comment-date">Aug 23, 2014 @ 10:32 AM</div>
                                        <ul class="comment-actions">
                                            <li class="complain">Complain</li>
                                            <li class="reply">Reply</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

PostPage.propTypes = {}

export default PostPage
