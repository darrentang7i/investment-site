import React from 'react';
import './MainPage.css';

import { MainBanner } from '../mainBanner/MainBanner'
import { MainInformation } from '../mainInformation/MainInformation'

export function MainPage() {
    return (
        <div class="div-body">
            <MainBanner></MainBanner>
            <MainInformation></MainInformation>
        </div>
    )
}