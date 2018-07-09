import React, {Component} from 'react'
import {formatDate} from "../utils/Helpers"
import CommentVote from "./CommentVote"
import {Modal, ModalBody, ModalHeader} from "reactstrap"
import CommentForm from "./CommentForm"

class CommentCard extends Component {

    state = {
        modal: false,
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {
        const {comment, deleteComment, editComment} = this.props
        return (
            <div className="comment-wrap">
                <div className="photo">
                    <div className="avatar"
                         style={{backgroundImage: "url('https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png')"}}></div>
                </div>
                <div className="comment-block">
                    <span className='fa-pull-right badge badge-primary'>Votos: {comment.voteScore}</span>
                    <p className="comment-text">{comment.author}</p>
                    <p className="comment-text">{comment.body}</p>
                    <div className="bottom-comment">
                        <div className="comment-date">{formatDate(comment.timestamp)}</div>
                        <ul className="comment-actions">
                            <li className="firstOpt">
                                <CommentVote comment_id={comment.id}/>
                            </li>
                            <li className="secondOpt" onClick={() => this.toggle()}>Editar</li>
                            <li className="thirdOpt" onClick={() => deleteComment(comment)}>Deletar</li>
                        </ul>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={() => this.toggle()} backdrop={true}>
                    <ModalHeader toggle={() => this.toggle()}>Comentário</ModalHeader>
                    <ModalBody>
                        <CommentForm comment={comment} editComment={editComment} editCommentCb={this.toggle}/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default CommentCard
