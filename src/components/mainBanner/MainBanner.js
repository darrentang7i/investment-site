import React from 'react';
import './MainBanner.css';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import graphpic from './graph-pic.svg'

export function MainBanner() {
    return (
        <Jumbotron className="justify-content-center">
            <Row className="mx-auto container">
                <Col className="text-left">
                    <h1>Are you a student hoping to learn more about investing?</h1>
                    <p>Create a student account today and get access to the latest business news, current stock market trends, free articles and courses, as well as build your own personalized portfolio!</p>
                    <Button>Learn More</Button>
                </Col>
                <Col>
                    <img src={graphpic} alt="Invest Today!"></img>
                </Col>
            </Row>


        </Jumbotron>
    )
}