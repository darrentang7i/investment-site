import React from 'react'
import './BlogPage.css'

import { Link } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import blog from './blog-pics/blog.svg'
import invest from './blog-pics/pic1.svg'
import young from './blog-pics/pic2.svg'
import market from './blog-pics/pic3.svg'
import times from './blog-pics/pic4.svg'

export class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
        }
    }


    callAPI = () => {
        console.log("send")
        fetch('http://localhost:8080/ping')
            .then(res => res.text())
            .then(res => this.setState({
                apiResponse: res
            }))
    }

    componentDidMount = () => {
        console.log("here")
        this.callAPI()
    }

    render() {
        return (
            <div>
                <Jumbotron className="justify-content-center">
                    <Row className="mx-auto container">
                        <Col className="text-left">
                            <h2>Blog Posts: Relevant student success stories and articles from industry leaders</h2>
                            <p>Explore a wide range of different blogs and articles that range from success stories from students who have used this platform to articles written by industry leaders and experts with useful advice and tips on how to begin investing as a student </p>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button className="btn btn-primary">Search</Button>
                            </Form>
                        </Col>
                        <Col>
                            <img src={blog} alt="Invest Today!"></img>
                        </Col>
                    </Row>
                </Jumbotron>
                <Row className="d-flex">
                    <Col>
                        <Row className="mx-auto container justify-content-end">
                            <Col md={5}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={invest} alt="quiz" />
                                    <h4 className="p-3">From debt to investing</h4>
                                    <p className="px-3 mb-auto">Take this interactive quiz to learn more about your risk tolerance and preferences to identify the appropriate investment strategy to reach your financial goals</p>
                                    <Button className="align-self-start mx-3 mb-3">
                                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/quiz'>Read More</Link>
                                    </Button>
                                </Card>
                            </Col>
                            <Col md={5}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={young} alt="quiz" />
                                    <h4 className="p-3">Starting young, starting early</h4>
                                    <p className="px-3 mb-auto">Take this interactive quiz to learn more about your risk tolerance and preferences to identify the appropriate investment strategy to reach your financial goals</p>
                                    <Button className="align-self-start mx-3 mb-3">
                                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/quiz'>Read More</Link>
                                    </Button>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="mx-auto container justify-content-start">
                            <Col md={5}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={market} alt="quiz" />
                                    <h4 className="p-3">Stock market volatility</h4>
                                    <p className="px-3 mb-auto">Take this interactive quiz to learn more about your risk tolerance and preferences to identify the appropriate investment strategy to reach your financial goals</p>
                                    <Button className="align-self-start mx-3 mb-3">
                                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/quiz'>Read More</Link>
                                    </Button>
                                </Card>
                            </Col>
                            <Col md={5}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={times} alt="quiz" />
                                    <h4 className="p-3">Predictions for the stock market</h4>
                                    <p className="px-3 mb-auto">Take this interactive quiz to learn more about your risk tolerance and preferences to identify the appropriate investment strategy to reach your financial goals</p>
                                    <Button className="align-self-start mx-3 mb-3">
                                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/quiz'>Read More</Link>
                                    </Button>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }


}