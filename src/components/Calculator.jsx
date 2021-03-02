import React, { useState } from 'react';
import '../styles/calculator.css';

export default function Calculator() {

    const [result, setResult] = useState(0);
    const [typed, setTyped] = useState("");


    const addToTyped = e => {
        setTyped(parseInt(typed + e.target.value))
    }

    const clearSession = () => {
        setTyped("");
    };

    return (
        <div className="calculator-container">
            <div className="result-box">
                {typed === "" ? "0" : typed.toLocaleString("en-US", {maximumFractionDigits:2})}
            </div>
            <div className="ios-buttons">
                {/* Row 1 */}
                <button onClick={clearSession} className="grey">C</button>
                <button className="grey">( )</button>
                <button className="grey">%</button>
                <button className="orange">÷</button>

                {/* Row 2 */}
                <button onClick={addToTyped} className="darkgrey" value="7">7</button>
                <button onClick={addToTyped} className="darkgrey" value="8">8</button>
                <button onClick={addToTyped} className="darkgrey" value="9">9</button>
                <button onClick={addToTyped} className="orange" value="✕">✕</button>

                {/* Row 3 */}
                <button onClick={addToTyped} className="darkgrey" value="4">4</button>
                <button onClick={addToTyped} className="darkgrey" value="5">5</button>
                <button onClick={addToTyped} className="darkgrey" value="6">6</button>
                <button onClick={addToTyped} className="orange" value="-">-</button>

                {/* Row 4 */}
                <button onClick={addToTyped} className="darkgrey" value="1">1</button>
                <button onClick={addToTyped} className="darkgrey" value="2">2</button>
                <button onClick={addToTyped} className="darkgrey" value="3">3</button>
                <button onClick={addToTyped} className="orange" value="+">+</button>

                {/* Row 5 */}
                <button className="darkgrey">+/-</button>
                <button onClick={addToTyped} className="darkgrey">0</button>
                <button className="darkgrey">.</button>
                <button className="orange">=</button>
            </div>
        </div>
    )
}
