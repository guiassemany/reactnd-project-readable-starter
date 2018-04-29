import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Col, Container, Row} from "reactstrap"
import PostList from "./PostList"

class CategoryPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <PostList />
                    </Col>
                </Row>
            </Container>
        )
    }
}

CategoryPage.propTypes = {}

export default CategoryPage
