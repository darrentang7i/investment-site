import React from 'react';
import './MainBanner.css';

import graphpic from './graph-pic.svg'

export function MainBanner() {
    return (
        <div class="banner">
            <div class="banner-text">
                <h1>Are you a student hoping to learn more about investing?</h1>
                <p>Create a student account today and get access to the latest business news, current stock market trends, free articles and courses, as well as build your own personalized portfolio!</p>
                <button>Sign Up Now</button>
            </div>
            <img src={graphpic} alt="Invest Today!"></img>
        </div>
    )
}