import React from 'react'
import './BlogPost.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export function BlogPost () {
    return(
        <div class="div-body">
            <Container fluid className="justify-content-center bg-dark">
                <Row className="mx-auto container">
                    <Col className="text-left">
                        <h1>Starting young, starting early</h1>
                        <p>Want to make sure you have enough money for the future? 
                            Want to build wealth over time while minimizing risk? 
                            Find out why you should learn more about investing and get started as soon as possible.</p>
                    </Col>
                    <Col>
                        <img src='/blog/pic2.svg'  alt="Investment Blog"></img>
                    </Col>
                </Row>
            </Container>
            <div>
                <Container>
                    <Card.Body className="text-left ">
                        <br></br>
                        <h5>June 15, 2020</h5>
                    </Card.Body>
                    <Card.Body className="text-left">
                        <p>An emerging trend in Canada is that Canadians who are retiring cannot afford to maintain their intended standard of life after retirement. 
                            These individuals do not know how to effectively manage their finances  and do not have any retirement savings to make ends meet. 
                            Recent studies have shown that nearly 6 in 10 Canadians (57%) cannot accurately complete assessments on financial literacy and 
                            are considered to have poor or fair financial knowledge. </p>
                        <br></br>
                        <p>It is becoming more crucial for students to have an understanding of financial literacy and start investing early. 
                            This will provide them with the financial safety to make flexible financial decisions in the future and live a comfortable life during retirement. 
                            Research has identified that 8 out of 10 young Canadians do not know how to manage their finances, and only 25% of students believe they can 
                            manage their finances after completing their education.</p>
                        <br></br>
                        <p className="text-danger font-weight-bold text-left"> Now is the best time to start, and there are five reasons why: </p>
                        <ol className="font-weight-bold">
                            <li> It provides valuable experience you can learn from </li>
                            <li> To benefit from compound interest</li>
                            <li> You currently have the flexibility to take more risks</li>
                            <li> You can develop good financial habits and plan for the future </li>
                            <li> You will have increased financial security </li>
                        </ol>
                    </Card.Body>
                </Container>
            </div>
        </div>
    )
}