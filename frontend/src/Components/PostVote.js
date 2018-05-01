import React from 'react'
import {Button, ButtonGroup} from "reactstrap"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {connect} from "react-redux"
import {serverVote} from "../redux/posts/action"

const CommentVote = (props) => {
    const {post_id, votePost} = props;
    return (
        <ButtonGroup>
            <Button size="sm" outline color="primary" onClick={() => votePost(post_id, 'upVote')}>
                <FontAwesomeIcon icon='thumbs-up'/>
            </Button>
            <Button size="sm" outline color="danger" onClick={() => votePost(post_id, 'downVote')}>
                <FontAwesomeIcon icon='thumbs-down'/>
            </Button>
        </ButtonGroup>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        votePost: (post_id, voteType) => {
            dispatch(serverVote(post_id, voteType))
        }
    }
}

export default connect(null, mapDispatchToProps)(CommentVote)
