import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { EnvelopeFill, GeoAltFill, TelephoneFill } from 'react-bootstrap-icons';
import '../assets/style/style.css';


function MyFooter() {
    return (
        <>
            <Container className='my-footer'>
                <Row>
                    <Col>
                        <div className="Container-fluid">
                            <img src='' alt="mjqrLogo" />
                        </div>
                        <ul className="list-unstyled">
                            <li>
                                <GeoAltFill className="icon" /> #223 & 227, Mao Tse Tong Blvd., Sangkat Toul Svay Prey, Khan Boeung Keng Kang, Phnom Penh, Cambodia
                            </li>
                            <li>
                                <TelephoneFill className="icon" /> (855) 23 223 295, (855) 23 221 222, (855) 93 217 217
                            </li>
                            <li>
                                <EnvelopeFill className="icon" /> info@mjqresident.com
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <div className="Container-fluid">
                            <img src='' alt="mjqrLogo" />
                        </div>
                        <ul className="list-unstyled">
                            <li>
                                <GeoAltFill className="icon" /> #223 & 227, Mao Tse Tong Blvd., Sangkat Toul Svay Prey, Khan Boeung Keng Kang, Phnom Penh, Cambodia
                            </li>
                            <li>
                                <TelephoneFill className="icon" /> (855) 23 223 295, (855) 23 221 222, (855) 93 217 217
                            </li>
                            <li>
                                <EnvelopeFill className="icon" /> info@mjqresident.com
                            </li>
                        </ul>
                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default MyFooter