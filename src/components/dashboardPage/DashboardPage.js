import React from 'react'
import './DashboardPage.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'

export class DashboardPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            apiResponse: 0
        }
    }

    componentDidMount = () => {
        this.apiCall();
    }

    apiCall = () => {
        fetch('/quizgetapi')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    apiResponse: parseInt(res)
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <p>{this.state.apiResponse}</p>
                <Row className="m-4">
                    <Col sm={3}><h1>My Dashboard</h1></Col>
                    <Col sm={6}>
                        <Card className="p-4">
                            <h4>Risk Tolerance</h4>
                            <p>Determines the risk tolerance based on quiz results and explains what this means in terms of investing decisions</p>
                            <ProgressBar animated now={this.state.apiResponse/39*100} variant="danger"></ProgressBar>
                        </Card>
                    </Col>
                </Row>
                <Row className="m-4">
                    <Col sm={3}>
                        <h4>Featured Investments</h4>
                        <Card className="p-4">
                            <p>Provides a list of recommended investment options based on individual’s interests and goals specified on the quiz</p>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card className="p-4"><p>Chart of investment account growth: $ vs time growth</p></Card>
                    </Col>
                    <Col sm={3}>
                        <Image className="roundedCircle"></Image>
                        <div>
                            <p>Cash: $$$<br/>Stocks: $$$<br/>Mutual Funds: $$$</p>
                        </div>
                    </Col>
                </Row>
                <Row className="m-4">
                    <Col>
                        <Card className="p-4">
                            <h4>Practice Accounts</h4>
                            <p>Create an practice account with a fictional portfolio to build your investing skills and explore the various available options risk-free!</p>
                            <Button className="btn btn-primary"> 
                                <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading/investment-types/open-a-practice-account.html">Open an Account</a>
                            </Button>
                        </Card>
                    </Col>
                    <Col sm={9}>
                        <h4>Featured Learning Resources</h4>
                        <Row>
                            <Col sm={4}>
                                <Card className="p-4">
                                    <h4>Level 1: Beginner</h4>
                                    <p>Learn more about potential investment opportunities based on your risk preferences</p>
                                    <Button className="btn btn-primary">Learn More</Button>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="p-4">
                                    <h4>Level 1: Beginner</h4>
                                    <p>Learn more about potential investment opportunities based on your risk preferences</p>
                                    <Button className="btn btn-primary">Learn More</Button>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="p-4" >
                                    <h4>Level 1: Beginner</h4>
                                    <p>Learn more about potential investment opportunities based on your risk preferences</p>
                                    <Button className="btn btn-primary">Learn More</Button>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}