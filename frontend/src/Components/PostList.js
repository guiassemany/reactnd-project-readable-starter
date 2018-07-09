import React, {Component} from 'react'
import {
    Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row
} from "reactstrap"
import {changeFilter, serverAddPost, serverDeletePost, serverEditPost, serverVote} from "../redux/posts/action"
import {connect} from "react-redux"
import Post from "./Post"
import PostForm from './PostForm'

class PostList extends Component {

    state = {
        modal: false,
        orderedPosts: []
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {
        let {posts, votePost, changeFilter, deletePost, category, addPost, editPost} = this.props
        if(category) {
            posts = posts.filter(post => post.category === category)
        }
        return (
            <div>
                <Row>
                    <Col xs={12} className='mb-2'>
                        <Form inline className='fa-pull-left'>
                            <FormGroup>
                                <Label for="exampleSelect">Ordenar por:</Label>
                                <Input type="select" name="orderBy" id="orderBy" onChange={(e) => changeFilter(e.target.value)}>
                                    <option value="voteScore">Votos</option>
                                    <option value="timestamp">Data</option>
                                </Input>
                            </FormGroup>
                        </Form>
                        <Button onClick={() => this.toggle()} className='fa-pull-right' size="sm" outline
                                color="success">
                            Adicionar Post
                        </Button>
                    </Col>
                    {posts && posts.map((post, index) => {
                        console.log(post)
                     return (
                         <Col xs={12} md={6} key={index}>
                             <Post post={post} votePost={votePost} deletePost={deletePost} editPost={editPost}/>
                         </Col>
                     )
                    })}
                </Row>
                <Modal isOpen={this.state.modal} toggle={() => this.toggle()} backdrop={true}>
                    <ModalHeader toggle={() => this.toggle()}>Post</ModalHeader>
                    <ModalBody>
                        <PostForm addPost={addPost} addPostCb={this.toggle}/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.list.sort((a,b) => a[state.posts.orderBy] - b[state.posts.orderBy]).reverse(),
        orderBy: state.posts.orderBy,
        orderByDirection: state.posts.orderByDirection
    }
}

const mapDispatchToProps = dispatch => {
    return {
        votePost: (id, type) => {
            dispatch(serverVote(id, type))
        },
        addPost: (post) => {
            dispatch(serverAddPost(post))
        },
        changeFilter: (field) => {
            dispatch(changeFilter(field))
        },
        deletePost: post_id => {
            dispatch(serverDeletePost(post_id));
        },
        editPost: (id, type) => {
            dispatch(serverEditPost(id, type))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
