import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import img1 from '../assets/card01.webp';
import '../assets/style/style.css';

function CardContent() {
    return (
        <Container className='my-cardcontent'>
            <Row className='my-row'>
                <Col className='my-col'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='my-col'>
                    <Image src={img1} rounded />
                </Col>
            </Row>
        </Container>
    )
}

export default CardContent;