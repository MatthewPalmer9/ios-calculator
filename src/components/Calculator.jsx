import React, { useState } from 'react';
import '../styles/calculator.css';

export default function Calculator() {

    const [result, setResult] = useState("");


    const addToTyped = e => {
        setResult(result + e.target.value);
    };

    const handleOperator = e => {
        let newResult = result.split("");
        let checker = newResult[newResult.length - 1]

        // Checks if an operator already exists at the end of the operation
        // If it does, replace it with the one that was clicked
        if(checker === "+" || checker === "-" || checker === "*" || checker === "/") {
            newResult.pop()
        }
        const joiner = newResult.join("")
        setResult(joiner + e.target.value)
    }

    const addParenthesis = () => {
        if(!result.includes("(")) {
            setResult(result + "*(")
        } else {
            setResult(result + ")")
        }
    }

    const clearSession = () => {
        setResult("");
    };

    const evaluate = () => {
        // eslint-disable-next-line
        setResult(eval(result))
    }

    return (
        <div className="calculator-container">
            <div className="result-box">
                {result === "" ? "0" : result.toLocaleString("en-US", {maximumFractionDigits:2})}
            </div>
            <div className="ios-buttons">
                {/* Row 1 */}
                <button onClick={clearSession} className="grey">C</button>
                <button onClick={addParenthesis} className="grey">( )</button>
                <button className="grey">%</button>
                <button onClick={handleOperator} className="orange" value="/">÷</button>

                {/* Row 2 */}
                <button onClick={addToTyped} className="darkgrey" value="7">7</button>
                <button onClick={addToTyped} className="darkgrey" value="8">8</button>
                <button onClick={addToTyped} className="darkgrey" value="9">9</button>
                <button onClick={handleOperator} className="orange" value="*">✕</button>

                {/* Row 3 */}
                <button onClick={addToTyped} className="darkgrey" value="4">4</button>
                <button onClick={addToTyped} className="darkgrey" value="5">5</button>
                <button onClick={addToTyped} className="darkgrey" value="6">6</button>
                <button onClick={handleOperator} className="orange" value="-">-</button>

                {/* Row 4 */}
                <button onClick={addToTyped} className="darkgrey" value="1">1</button>
                <button onClick={addToTyped} className="darkgrey" value="2">2</button>
                <button onClick={addToTyped} className="darkgrey" value="3">3</button>
                <button onClick={handleOperator} className="orange" value="+">+</button>

                {/* Row 5 */}
                <button className="darkgrey">+/-</button>
                <button onClick={addToTyped} className="darkgrey">0</button>
                <button className="darkgrey">.</button>
                <button onClick={evaluate} className="orange">=</button>
            </div>
        </div>
    )
}
