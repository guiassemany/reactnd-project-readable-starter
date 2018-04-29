import React from 'react';
import {
    Card, CardBody,
    CardTitle, Button, Row, Col
} from 'reactstrap'
import {Link} from "react-router-dom"

function CategoryCard({category}) {
    return (
        <div>
            <Card>
                <CardBody>
                    <Row>
                        <Col sm={{ size: '6', offset: 3 }} className='text-center'>
                            <CardTitle style={{textTransform: 'capitalize'}}>{category.name}</CardTitle>
                            <Button outline color='success'>
                                <Link to={category.path}>
                                    Ver Posts
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}


export default CategoryCard;
