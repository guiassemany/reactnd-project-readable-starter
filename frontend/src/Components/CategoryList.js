import React, {Component} from 'react'
import CategoryCard from "./CategoryCard"
import {Col, Row} from "reactstrap"
import {connect} from "react-redux"

class CategoryList extends Component {

    render () {
        const { categories } = this.props;
        return (
            <Row>
                {categories && categories.map(category => (
                    <Col xs={12} md={4} key={category.name} >
                        <CategoryCard category={category} />
                    </Col>
                ))}
            </Row>
        )
    }

}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(CategoryList);
