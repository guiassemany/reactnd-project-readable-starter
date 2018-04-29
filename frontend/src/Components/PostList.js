import React, {Component} from 'react'
import {
    Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row,
    Table
} from "reactstrap"
import {serverAddPost, serverVote} from "../redux/posts/action"
import {connect} from "react-redux"
import Post from "./Post"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class PostList extends Component {

    state = {
        modal: false,
        newPost: {
            category: null,
            title: null,
            author: null,
            body: null
        }
    }

    handleChange(event) {
        this.setState({
            newPost: {
                ...this.state.newPost,
                [event.target.name]: event.target.value
            }
        })
    }

    toggle() {
        this.setState({modal: !this.state.modal})
    }

    addPost() {
        this.props.addPost(this.state.newPost)
        this.setState({
            newPost: {
                category: null,
                title: null,
                author: null,
                body: null
            }
        })
        this.toggle()
    }

    render() {
        const {posts, votePost} = this.props
        return (
            <div>
                <Row>
                    <Col xs={12} className='mb-2'>
                        <Form inline className='fa-pull-left'>
                            <FormGroup>
                                <Label for="exampleSelect">Ordenar por:</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Data</option>
                                    <option>Votos</option>
                                </Input>
                            </FormGroup>
                        </Form>
                        <Button onClick={() => this.toggle()} className='fa-pull-right' size="sm" outline
                                color="success">
                            Adicionar Post
                        </Button>
                    </Col>
                    {posts && posts.map((post, index) => (
                        <Col xs={12} md={6} key={index}>
                            <Post post={post} votePost={votePost}/>
                        </Col>
                    ))}
                </Row>
                <Modal isOpen={this.state.modal} toggle={() => this.toggle()} backdrop={true}>
                    <ModalHeader toggle={() => this.toggle()}>Novo Post</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label for="category" sm={2}>Categoria</Label>
                                <Col sm={10}>
                                    <Input type="text" name="category" id="category" placeholder=""
                                           onChange={(e) => this.handleChange(e)} required/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="title" sm={2}>Título</Label>
                                <Col sm={10}>
                                    <Input type="text" name="title" id="title" placeholder=""
                                           onChange={(e) => this.handleChange(e)}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="author" sm={2}>Autor</Label>
                                <Col sm={10}>
                                    <Input type="text" name="author" id="author" placeholder=""
                                           onChange={(e) => this.handleChange(e)}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="body" sm={2}>Texto</Label>
                                <Col sm={10}>
                                    <Input type="text" name="body" id="body" placeholder=""
                                           onChange={(e) => this.handleChange(e)}/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => this.toggle()}>Cancelar</Button>
                        <Button color="primary" onClick={() => this.addPost()}>Adicionar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
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
        },
        addPost: (post) => {
            dispatch(serverAddPost(post))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
