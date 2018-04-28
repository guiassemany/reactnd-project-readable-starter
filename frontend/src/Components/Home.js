import React, {Component} from 'react'
import CategoryList from "./CategoryList"
import {Container, Row, Col} from 'reactstrap'
import PostList from "./PostList"
import TopBar from "./TopBar"
import {connect} from "react-redux"

class Home extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <TopBar />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12}>
                        <h4>Categorias</h4>
                        <CategoryList />
                        <hr/>
                        <h4>Posts</h4>
                        <PostList />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
