import React from 'react'
import CategoryList from "./CategoryList"
import {Container, Row, Col} from 'reactstrap'
import PostList from "./PostList"
import TopBar from "./TopBar"

const Home = () => (
    <Container fluid={true}>
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
export default Home;
