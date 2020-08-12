import React from 'react';
import './MainPage.css';

import { MainBanner } from '../mainBanner/MainBanner'
import { MainInformation } from '../mainInformation/MainInformation'

import scotia from './scotia.svg'

export function MainPage() {
    return (
        <div class="div-body">
            <img src={scotia} alt="scotiabank logo"></img>
            <MainBanner></MainBanner>
            <MainInformation></MainInformation>
        </div>
    )
}