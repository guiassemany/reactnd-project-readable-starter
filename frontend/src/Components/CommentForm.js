import React, {Component} from 'react'
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap"
import Swal from "sweetalert2"

class CommentForm extends Component {
    state = {
        comment: {}
    }

    componentWillMount() {
        this.setState({
            comment: this.props.comment
        })
    }

    handleChange(event) {
        this.setState({
            comment: {
                ...this.state.comment,
                [event.target.name]: event.target.value
            }
        })
    }

    editCommentLocal() {
        if(!this.state.comment.body || !this.state.comment.author) {
            Swal('Atenção', 'Preencha todos os campos do formulário!', 'error')
            return
        }
        this.props.editComment(this.state.comment);
        this.props.editCommentCb();
    }

    render() {
        const {comment, editCommentCb} = this.props;
        return (
            <Form>
                <FormGroup row>
                    <Label for="title" sm={2}>Comentário</Label>
                    <Col sm={10}>
                        <Input type="text" name="body" id="body" placeholder=""
                               value={this.state.comment.body}
                               onChange={(e) => this.handleChange(e)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="author" sm={2}>Autor</Label>
                    <Col sm={10}>
                        <Input type="text" name="author" id="author" placeholder=""
                               value={this.state.comment.author}
                               onChange={(e) => this.handleChange(e)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={10}>
                        <Button color="secondary" onClick={() => editCommentCb()}>Cancelar</Button>
                        <Button color="primary" onClick={() => this.editCommentLocal(comment)}>Adicionar</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default CommentForm;
