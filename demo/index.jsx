import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.less"
import {PROGRESS_LINE_VARIANT, ProgressLine} from "../src/index.ts";

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
                <ProgressLine variant={PROGRESS_LINE_VARIANT.SMALL}/>
                <ProgressLine variant={PROGRESS_LINE_VARIANT.DEFAULT}/>
                <ProgressLine variant={PROGRESS_LINE_VARIANT.LARGE}/>
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <h2>Progress Bar</h2>
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );