import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.less"
import {PROGRESS_BAR_VARIANT, ProgressLine, ProgressBar, PROGRESS_BAR_VALUE_POSITION} from "../src/index.ts";

const App = () => {
    return (
        <>
            <div className="button-container" style={{flexFlow: "column"}}>
                <h1>Metro UI/Progress Set</h1>
                <h2>For React</h2>
                <p>Copyright 2022 by <a href="https://Korzh.com">Korzh.com</a></p>
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <h2>Progress Line</h2>
            </div>
            <div className="button-container">
                <ProgressLine variant={PROGRESS_BAR_VARIANT.SMALL}/>
                <ProgressLine variant={PROGRESS_BAR_VARIANT.DEFAULT}/>
                <ProgressLine variant={PROGRESS_BAR_VARIANT.LARGE}/>
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <h2>Progress Bar</h2>
            </div>
            <div className="button-container">
                <ProgressBar val={50} variant={PROGRESS_BAR_VARIANT.SMALL}/>
                <ProgressBar val={50} variant={PROGRESS_BAR_VARIANT.DEFAULT}/>
                <ProgressBar val={50} variant={PROGRESS_BAR_VARIANT.LARGE}/>
            </div>
            <br />
            <br />
            <div className="button-container">
                <ProgressBar val={50}/>
                <ProgressBar buffer={75} val={50}/>
                <ProgressBar buffer={75} val={50} loading/>
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <ProgressBar val={50} valuePosition={PROGRESS_BAR_VALUE_POSITION.LEFT} value/>
                <ProgressBar val={50} valuePosition={PROGRESS_BAR_VALUE_POSITION.CENTER} value/>
                <ProgressBar val={50} valuePosition={PROGRESS_BAR_VALUE_POSITION.RIGHT} value/>
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );