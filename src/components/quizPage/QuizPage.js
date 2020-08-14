import React, { useState } from 'react';
import './QuizPage.css'
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


export class QuizPage extends React.Component {
    constructor() {
        super();
        this._points = 0;
        this._level = 0;
    } 

    //gets triggered everytime a checkbox is clicked, points are added
    change = (idx) => {    
        this._points += idx + 1;
        console.log("current points: " + this._points);
    }

    //called when experience question is asked, and stores experience level to give user personalized info
    investorType = (idx) => {
        this._points += idx + 1;
        this._level = idx;
        console.log(this._level);
    }

    //make a POST request, storing points and level information in /quizapi, which is handled in app.js
    componentDidMount = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({points: this._points, level : this._level })
        };
        fetch('/quizapi', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        console.log("sending");
    }

    render() {
        return(
            <div>
                <div id="header">
                    
                    <Container fluid className="p-5" >
                        <Row>
                            <Col>
                                <div id="quiz-title"> Interactive Quiz</div>
                                <div>Take this interactive quiz to learn more about your risk tolerance and preferences to <br></br>identify the appropriate investment strategy to reach your financial goals</div>
                            </Col>
                            <Col>
                                <img className="" height="150" width="auto" src='/white_logo.png' alt="Logo"></img>
                            </Col>
                        </Row>
                        
                    </Container >
                </div>
                <div className="section">General</div>
                <div id="questions">
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">1</div>
                                <div id="question-content">What are you saving for?</div>
                            </Row>

                            {['None at this time', 'Grad Trip/Vacation', 'Tuition, Textbooks and/or School Equipment'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">2</div>
                                <div id="question-content">What is your investment knowledge?</div>
                            </Row>

                            {['Novice', 'Intermediate-level', 'Experienced'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.investorType(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">3</div>
                                <div id="question-content">How often will you manage/monitor your portfolio?</div>
                            </Row>

                            {['Infrequently', 'Fairly frequently', 'Regularly'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                    
                </div>

                <div className="section">Risk Level</div>
                <div id="questions">
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">1</div>
                                <div id="question-content">You are on a TV game show and have three options. Which one would you choose?</div>
                            </Row>

                            {['$1000 in cash', '50% chance at winning $5000', '10% chance of winning $500,000'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">2</div>
                                <div id="question-content">If you receive $20,000 from a family member to invest, what would you do with the money?</div>
                            </Row>

                            {['Deposit it in a bank account', 'Invest it in safe high-quality bonds', 'Invest it in stocks'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">3</div>
                                <div id="question-content">When you think of the word “risk”, which word do you think of first?</div>
                            </Row>

                            {['Loss/Uncertainty', 'Opportunity', 'Thrill'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">4</div>
                                <div id="question-content">A friend invites you to join a competition with a $20 buy-in, and the winning prize is over $500. What would you do?</div>
                            </Row>

                            {['Decline the offer', 'Ask another friend to split the cost since a $10 loss is better than a $20 loss', 'Make some educated guesses and place your bet'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                </div>
                
                <div className="section">Amount + Timeline</div>
                <div id="questions">
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">1</div>
                                <div id="question-content">How much money do you currently have available to invest?</div>
                            </Row>

                            {['I only have about $1000 available', 'I am hoping to start with the $2000-4000 I have budgeted for investing', ' I have been saving up for a few years now so I have more than $6000'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">2</div>
                                <div id="question-content">When would you potentially want to use some/all of your assets to use towards your personal and financial goals?</div>
                            </Row>

                            {['A few months', '5 years', '10 years'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">3</div>
                                <div id="question-content">When planning for the future, what is your general mindset and time frame?</div>
                            </Row>

                            {['Short-term - I want to hold funds for less than 5 years and reduce the risk of loss', 
                            'Intermediate term - I have set goals for around 5-10 years in the future and I hope I can grow my initial investment’s value', 
                            'Long-term - all my goals are 15 years down the road and I am hoping that there are greater potential rewards'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                </div>

                <div className="section">Interests + Goals</div>
                <div id="questions">
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">1</div>
                                <div id="question-content">What industries are you interested in investing in?</div>
                            </Row>

                            {['Any industries that are guaranteed safe investments - energy utilities, water, healthcare, technology',
                             'A mix of different industries to hedge my risk', 
                             'Industries that will provide me with massive rewards'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">2</div>
                                <div id="question-content">A stock you bought over a year ago has suddenly increased in value by over 40%. Based on goals you may have, what decision would you make?</div>
                            </Row>

                            {['Consider selling enough to cover your original investment', 'Sell stock and move cash to a low-risk investment', 'Borrow money to buy more stock'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="numbering">3</div>
                                <div id="question-content">What goals do you have in mind when choosing to invest?</div>
                            </Row>

                            {[' I want to have an emergency fund and ensure I have enough money for a rainy day', 'I am interested in generating fair returns to plan for the future', 'I want to see high investment growth and I am saving for early retirement'].map((response, index) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={() => this.change(index)}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>

                    <div className="section">Other Goals</div>
                    <Container>
                        <Form>
                        <Row className="pt-2">
                                <div id="numbering">1</div>
                                <div id="question-content">Do you have any long-term goals (over 1 year) you are hoping to work towards?</div>
                        </Row>
                        <br></br>
                            <Form.Group>
                                <Form.Control type="text"/>
                                <br />
                            </Form.Group>
                        </Form>
                    </Container>
                    <Container>
                        <Form>
                        <Row className="pt-2">
                                <div id="numbering">2</div>
                                <div id="question-content">Do you have any short-term goals (under 1 year) you are working towards?</div>
                        </Row>
                        <br></br>
                            <Form.Group>
                                <Form.Control type="text"/>
                                <br />
                            </Form.Group>
                        </Form>
                    </Container>
                </div>
        

                <button type="button" class="btn btn-primary"   onClick={this.componentDidMount}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/quizResult'>Submit</Link>
                </button>
            </div>
        )
    }
}

