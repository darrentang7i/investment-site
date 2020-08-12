import React, { useState } from 'react';
import './QuizPage.css'
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Media from 'react-bootstrap/Media'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export function QuizPage() {
    const [show, toggleShow] = useState(true);

    // function startQuiz (){

    // }

    return (
        <div id="header">
            <Container fluid className="p-5" >
                <div id="quiz-title"> Interactive Quiz</div>
                <div>Take this interactive quiz to learn more about your risk tolerance and preferences to <br></br>identify the appropriate investment strategy to reach your financial goals</div>
            </Container >
            <Form>
                {['checkbox', 'radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                    />

                    {/* <Form.Check
                        disabled
                        type={type}
                        label={`disabled ${type}`}
                        id={`disabled-default-${type}`}
                    /> */}
                    </div>
                ))}
             </Form>

        </div>
        
    )
}
