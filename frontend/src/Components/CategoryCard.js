import React from 'react';
import {
    Card, CardBody,
    CardTitle, Button, Row, Col
} from 'reactstrap'

function CategoryCard({category}) {
    return (
        <div>
            <Card>
                <CardBody>
                    <Row>
                        <Col sm={{ size: '6', offset: 3 }} className='text-center'>
                            <CardTitle>{category.name}</CardTitle>
                            <Button outline color='success'>Ver Posts</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}


export default CategoryCard;
