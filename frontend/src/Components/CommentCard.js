import React from 'react'
import {formatDate} from "../utils/Helpers"
import CommentVote from "./CommentVote"

const CommentCard = (props) => {
    const {comment, deleteComment} = props
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
                        <li className="secondOpt">Editar</li>
                        <li className="thirdOpt" onClick={() => deleteComment(comment)}>Deletar</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default CommentCard
