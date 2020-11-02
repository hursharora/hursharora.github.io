import React from "react";
import HeadShot from "../assets/headshot.jpg";
import classes from "./AboutContent.module.css";
import Zoom from "react-reveal/Zoom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "../SectionHeader/SectionHeader";


const AboutContent = props => (
    <Container fluid>
        <div className="mb-4">
            <SectionHeader>About</SectionHeader>
        </div>
        <Zoom>
            <Row className="align-items-center">
                <Col xs={12} md={6}>
                    <div className={classes.AboutPhoto + " py-2"}>
                        <img src={HeadShot} alt="headshot"/>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className={classes.AboutText}>
                        {props.desc}
                    </div>
                </Col>
            </Row>
        </Zoom>
    </Container>
)


export default AboutContent;
