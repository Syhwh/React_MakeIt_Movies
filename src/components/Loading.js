import React from "react";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from 'react-bootstrap';


const Loading = ({ type, color }) => (
  
    <Container>
        <Row>
            <Col>
                <ReactLoading type={type} color={color} height={667} width={375} />
            </Col>
        </Row>
    </Container>

);

export default Loading;