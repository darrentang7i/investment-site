import React, { useState } from 'react';
import './QuizPage.css'
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export class QuizPage extends React.Component {
    // const [show, toggleShow] = useState(true);


    onCheck(){
        console.log("checkmark");
    }
    // function startQuiz (){

    // }

    change = (event) => {
        console.log("printing something")
    }

    render() {
        return(
            <div>
                <div id="header">
                    
                    <Container fluid className="p-5" >
                        <div id="quiz-title"> Interactive Quiz</div>
                        <div>Take this interactive quiz to learn more about your risk tolerance and preferences to <br></br>identify the appropriate investment strategy to reach your financial goals</div>
                    </Container >
                </div>
                <div id="questions">
                    <Container>
                        <Form>
                            <Row className="pt-2">
                                <div id="question-content">You are on a TV game show and have three options. Which one would you choose?</div>
                            </Row>

                            {['$1000 in cash', '50% chance at winning $5000', '10% chance of winning $500,000'].map((response) => (
                                <div key={response} className="options mb-3">
                                    <Form.Check
                                        custom
                                        type={'checkbox'}
                                        id={response}
                                        label={`${response}`}
                                        onChange={this.change}
                                    />
                                </div>
                            ))}

                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}
