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

export class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: {
                studentBlog: [],
                expertBlog: []
            },
        }
    }


    callAPI = () => {
        fetch('/ping')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    apiResponse: res
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.callAPI()
    }

    render() {
        const { studentBlog } = this.state.apiResponse
        const { expertBlog } = this.state.apiResponse

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
                            <img src='/blog/blog.svg' alt="Invest Today!"></img>
                        </Col>
                    </Row>
                </Jumbotron>
                <Row className="d-flex flex-wrap">
                    <Col>
                        <h2>Student Experiences</h2>
                        <Row className="mx-auto container justify-content-center">
                            {studentBlog.map((item, index) => (
                                <Col key={index} md={5} className="my-3">
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image} alt="quiz" />
                                        <h4 className="p-3">{item.title}</h4>
                                        <p className="px-3 mb-auto">{item.content}</p>
                                        <Button className="align-self-start mx-3 my-3">
                                            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={item.link}>Read More</Link>
                                        </Button>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col>
                    <h2>Expert Advice</h2>
                        <Row className="mx-auto container justify-content-center">
                            {expertBlog.map((item, index) => (
                                <Col key={index} md={5} className="my-3">
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image} alt="quiz" />
                                        <h4 className="p-3">{item.title}</h4>
                                        <p className="px-3 mb-auto">{item.content}</p>
                                        <Button className="align-self-start mx-3 my-3">
                                            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={item.link}>Read More</Link>
                                        </Button>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }


}