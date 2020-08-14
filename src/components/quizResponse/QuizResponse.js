import React from'react'
import './QuizResponse.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'



export class QuizResponse extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            apiResponse: 0
        }
    }

    //called by default 
    componentDidMount = () => {
        this.apiCall();
    }

    //fetch('/quizgetapi) will call app.get in app.js, to make a get request
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

    riskType = () => {
        console.log(this.state.apiResponse);
        if (this.state.apiResponse > 30) {
            return (<p>Risk Taker</p>);
        } 
        else if (this.state.apiResponse < 20) {
            return (<p>Risk Adverse</p>);
        }
        return (<p>Risk Neutral</p>)
    }

    render() {
        return (
                <div className="container my-5">
                    <p><b>Thank you for taking our interactive quiz!</b><br></br>
                    Your goals and risk preferences are being added to create your personalized dashboard. Your goals can be updated by submitting another quiz.</p>
                    <br></br>
                    <p>For your responses, we have determined that you are:</p>
                    {this.riskType()}
                    <p>This means that you are generally indifferent to risk when making investment choices</p>
                    <p>Here are some learning paths for you to explore based on off of your preferences and goals:</p>
                    <Button>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/dashboard'>Go to your dashboard now!</Link>
                    </Button>
                </div>

            
        )
    }
}