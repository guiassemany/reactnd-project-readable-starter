import React, {Component} from 'react'
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap"
import CommentCard from "./CommentCard"
import {connect} from "react-redux"
import {serverAddComment, serverDeleteComment, serverLoadComments, serverEditComment} from "../redux/comments/action"
import Swal from "sweetalert2"

class CommentList extends Component {

    state = {
        newComment: {
            author: '',
            body: '',
            parentId: this.props.post_id
        }
    }

    componentDidMount() {
        this.props.loadComments(this.props.post_id)
    }

    handleChange(event) {
        this.setState({
            newComment: {
                ...this.state.newComment,
                [event.target.name]: event.target.value
            }
        })
    }

    localAddComment () {
        if(!this.state.newComment.body || !this.state.newComment.author) {
            Swal('Atenção', 'Preencha os campos para comentar!', 'error')
            return
        }
        this.props.addComment(this.state.newComment)
        this.setState({
            newComment: {
                author: '',
                body: '',
                parentId: this.props.post_id
            }
        })
        Swal('Sucesso', 'Obrigado pelo comentário!', 'success')
    }

    render() {
        const {comments, deleteComment, editComment} = this.props
        return (
            <div className="comments">
                <div className="comment-wrap">
                    <div className="photo">
                        <div className="avatar"
                             style={{backgroundImage: "url('https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png')"}}></div>
                    </div>
                    <div className="comment-block">
                        <Form>
                            <FormGroup row>
                                <Label for="author" sm={2}>Autor</Label>
                                <Col sm={10}>
                                    <Input type="text" name="author" id="author" placeholder="" value={this.state.newComment.author}
                                           onChange={(e) => this.handleChange(e)}>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="author" sm={2}>Comentário</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="body" id="body" placeholder="" value={this.state.newComment.body}
                                           onChange={(e) => this.handleChange(e)}>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={12}>
                                    <Button outline block color='primary'
                                            onClick={() => this.localAddComment()}>
                                        Adicionar Comentário
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                {comments && comments.map(comment => (
                    <CommentCard comment={comment} key={comment.id} deleteComment={deleteComment} editComment={editComment}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment) => {
            dispatch(serverAddComment(comment))
        },
        loadComments: (post_id) => {
            dispatch(serverLoadComments(post_id))
        },
        deleteComment: (comment_id) => {
            dispatch(serverDeleteComment(comment_id))
        },
        editComment: (comment) => {
            dispatch(serverEditComment(comment))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
