import React, { useState } from 'react';
import '../styles/calculator.css';

export default function Calculator() {

    const [result, setResult] = useState(0);

    return (
        <div className="calculator-container">
            <div className="result-box">
                {result}
            </div>
            <div className="ios-buttons">
                {/* Row 1 */}
                <button className="grey">C</button>
                <button className="grey">( )</button>
                <button className="grey">%</button>
                <button className="orange">÷</button>

                {/* Row 2 */}
                <button className="darkgrey">7</button>
                <button className="darkgrey">8</button>
                <button className="darkgrey">9</button>
                <button className="orange">✕</button>

                {/* Row 3 */}
                <button className="darkgrey">4</button>
                <button className="darkgrey">5</button>
                <button className="darkgrey">6</button>
                <button className="orange">-</button>

                {/* Row 4 */}
                <button className="darkgrey">1</button>
                <button className="darkgrey">2</button>
                <button className="darkgrey">3</button>
                <button className="orange">+</button>

                {/* Row 5 */}
                <button className="darkgrey">+/-</button>
                <button className="darkgrey">0</button>
                <button className="darkgrey">.</button>
                <button className="orange">=</button>
            </div>
        </div>
    )
}
