import React from'react'
import './QuizResponse.css'

export function QuizResponse() {
    return (
        <div className="container my-5">
            <p><b>Thank you for taking our interactive quiz!</b><br></br>
            Your goals and risk preferences are being added to create your personalized dashboard. Your goals can be updated by submitting another quiz.</p>
            <br></br>
            <p>For your responses, we have determined that you are:</p>
            <p><b>Risk Neutral</b></p>
            <p>This means that you are generally indifferent to risk when making investment choices</p>
            <p>Here are some learning paths for you to explore based on off of your preferences and goals:</p>
        </div>
    )
}