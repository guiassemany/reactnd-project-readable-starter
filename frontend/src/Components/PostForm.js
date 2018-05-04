import React, {Component} from 'react'
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap"
import Swal from "sweetalert2"

class PostForm extends Component {
    state = {
        post: {
            category: 'react',
            title: '',
            author: '',
            body: ''
        },
    }

    componentDidMount() {
        if(this.props.post) {
            this.setState({post: this.props.post});
        }
    }

    handleChange(event) {
        this.setState({
            post: {
                ...this.state.post,
                [event.target.name]: event.target.value
            }
        })
    }

    addPost() {
        if(!this.state.post.body || !this.state.post.author || !this.state.post.category || !this.state.post.title) {
            Swal('Atenção', 'Preencha todos os campos do formulário!', 'error')
            return
        }
        this.props.addPost(this.state.post.id, this.state.post)
        this.setState({
            post: {
                category: 'react',
                title: '',
                author: '',
                body: ''
            }
        })
        this.props.addPostCb()
    }

    editPost(){

    }

    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="category" sm={2}>Categoria</Label>
                    <Col sm={10}>
                        <Input type="select" name="category" id="category" placeholder=""
                               value={this.state.post.category}
                               onChange={(e) => this.handleChange(e)}>
                            <option value="react">React</option>
                            <option value="redux">Redux</option>
                            <option value="udacity">Udacity</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="title" sm={2}>Título</Label>
                    <Col sm={10}>
                        <Input type="text" name="title" id="title" placeholder=""
                               value={this.state.post.title}
                               onChange={(e) => this.handleChange(e)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="author" sm={2}>Autor</Label>
                    <Col sm={10}>
                        <Input type="text" name="author" id="author" placeholder=""
                               value={this.state.post.author}
                               onChange={(e) => this.handleChange(e)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="body" sm={2}>Texto</Label>
                    <Col sm={10}>
                        <Input type="text" name="body" id="body" placeholder=""
                               value={this.state.post.body}
                               onChange={(e) => this.handleChange(e)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={10}>
                        <Button color="secondary" onClick={() => this.props.addPostCb()}>Cancelar</Button>
                        <Button color="primary" onClick={() => this.addPost()}>Adicionar</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default PostForm;
