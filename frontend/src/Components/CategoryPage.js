import React, {Component} from 'react'
import {Col, Container, Row} from "reactstrap"
import PostList from "./PostList"
import TopBar from "./TopBar"
import {Link} from "react-router-dom"

class CategoryPage extends Component {
    componentDidMount() {
        const allowedValues = ['react', 'redux', 'udacity'];
        if(!allowedValues.includes(this.props.match.params.category)) {
            this.props.history.push('/404')
        }
    }
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
                        <div className="card my-4">
                            <h5 className="card-header">Categories</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0">
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
