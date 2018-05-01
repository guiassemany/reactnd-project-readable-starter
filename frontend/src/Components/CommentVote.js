import React from 'react'
import {Button, ButtonGroup} from "reactstrap"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {connect} from "react-redux"
import {serverVoteComment} from "../redux/comments/action"

const CommentVote = (props) => {
    const {comment_id, voteComment} = props;
    return (
        <ButtonGroup>
            <Button size="sm" outline color="primary" onClick={() => voteComment(comment_id, 'upVote')}>
                <FontAwesomeIcon icon='thumbs-up'/>
            </Button>
            <Button size="sm" outline color="danger" onClick={() => voteComment(comment_id, 'downVote')}>
                <FontAwesomeIcon icon='thumbs-down'/>
            </Button>
        </ButtonGroup>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        voteComment: (comment_id, voteType) => {
            dispatch(serverVoteComment(comment_id, voteType))
        }
    }
}

export default connect(null, mapDispatchToProps)(CommentVote)
