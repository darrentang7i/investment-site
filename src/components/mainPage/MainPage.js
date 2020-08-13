import React from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

import graphpic from './graph-pic.svg'
import quiz from './quiz.svg'
import sprouts from './sprouts.svg'
import itrade from './itrade.svg'

export function MainPage() {
    return (
        <div class="div-body">
            <Jumbotron className="justify-content-center">
                <Row className="mx-auto container">
                    <Col className="text-left">
                        <h1>Are you a student hoping to learn more about investing?</h1>
                        <p>Create a student account today and get access to the latest business news, current stock market trends, free articles and courses, as well as build your own personalized portfolio!</p>
                    </Col>
                    <Col>
                        <img src={graphpic} alt="Invest Today!"></img>
                    </Col>
                </Row>
            </Jumbotron>
            <div>
            <div className="pb-3">
                <h2>Learn more about what this investing platform includes</h2>
                <p>These are some exciting solutions that have been created specifically for students!</p>
            </div>
            <Row className="mx-auto container">
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Img variant="top" src={quiz} alt="quiz" />
                        <h4 className="p-3">Investment Quiz</h4>
                        <p className="px-3 mb-auto">Take this interactive quiz to learn more about your risk tolerance and preferences to identify the appropriate investment strategy to reach your financial goals</p>
                        <Button className="align-self-start mx-3 mb-3">
                            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/quiz'>Take Quiz</Link>
                        </Button>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Img variant="top" src={sprouts} alt="quiz" />
                        <h4 className="p-3">Scotia iTRADE</h4>
                        <p className="px-3 mb-auto">Access Scotia’s existing iTRADE platform for direct investing in 3 easy steps. Educational resources and step-by-step guides are available for all audiences</p>
                        <Button className="align-self-start mx-3 mb-3">
                            <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading.html">Learn More</a>
                        </Button>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Img variant="top" src={itrade} alt="quiz" />
                        <h4 className="p-3">How do I start investing?</h4>
                        <p className="px-3 mb-auto">Tips from industry experts on how to approach investing and how to maximize returns while minimizing cost and risk. Learn how to make appropriate investment decisions!</p>
                        <Button className="align-self-start mx-3 my-3">Learn More</Button>
                    </Card>
                </Col>
            </Row>
        </div>
        </div>
    )
}