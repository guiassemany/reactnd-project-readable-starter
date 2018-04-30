import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Col, Container, Row} from "reactstrap"
import PostList from "./PostList"
import TopBar from "./TopBar"
import {Link} from "react-router-dom"

class CategoryPage extends Component {
    render() {
        return (
            <Container fluid={true}>
                <TopBar />
                <Row>
                    <Col xs={12}>
                        <h3>
                            Todos os posts na categoria - <span style={{textTransform: 'capitalize'}} className='text-primary'>{this.props.match.params.category}</span>
                        </h3>
                        <hr/>
                    </Col>
                    <Col xs={12} md={8}>
                        <PostList category={this.props.match.params.category} />
                    </Col>
                    <Col xs={12} md={4}>
                        <div class="card my-4">
                            <h5 class="card-header">Categories</h5>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <Link to="/react">React</Link>
                                            </li>
                                            <li>
                                                <Link to="/redux">Redux</Link>
                                            </li>
                                            <li>
                                                <Link to="/udacity">Udacity</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

CategoryPage.propTypes = {}

export default CategoryPage
