/* eslint no-eval: 0 */
import React, { useState } from 'react';
import '../styles/calculator.css';

export default function Calculator() {

    const [result, setResult] = useState("");
    const resultStringSplitter = result.split("");
    const endOfString = resultStringSplitter[resultStringSplitter.length - 1];
    const leftParathesisCount = resultStringSplitter.filter(i => i === "(").length;
    const rightParathesisCount = resultStringSplitter.filter(i => i === ")").length;


    const addToTyped = e => {
        if(endOfString === ")") {
            setResult(result + "*" + e.target.value);
        } else {
            setResult(result + e.target.value);
        }
    };

    const FlipNegPos = () => {
        
    }

    const handleOperator = e => {
        // Checks if an operator already exists at the end of the operation
        // If it does, replace it with the one that was clicked
        if(endOfString === "+" || endOfString === "-" || endOfString === "*" || endOfString === "/") {
            resultStringSplitter.pop()
        }
        const joiner = resultStringSplitter.join("")
        setResult(joiner + e.target.value)
    }

    const handleParenthesis = () => {
        // Checks if the count of "(" and ")" are the same in 'result.split("")'. 
        // If they are and the last character in 'result' is a number, add "*("
        // If the count is not the same and moves to the second condition, add a ")"
        // If neither condition is true, nothing happens by default when the "()" button is clicked
        if(leftParathesisCount === rightParathesisCount && (endOfString === "0" || endOfString === "1" || endOfString === "2" || endOfString === "3" || endOfString === "4" || endOfString === "5" || endOfString === "6" || endOfString === "7" || endOfString === "8" || endOfString === "9")) {
            setResult(result + "*(");
        } else if(resultStringSplitter.includes("(") && (endOfString === "0" || endOfString === "1" || endOfString === "2" || endOfString === "3" || endOfString === "4" || endOfString === "5" || endOfString === "6" || endOfString === "7" || endOfString === "8" || endOfString === "9")) {
            setResult(result + ")");
        }
    }

    const clearSession = () => {
        setResult("");
    };

    const evaluate = () => {
        if(resultStringSplitter.includes("(") && !(leftParathesisCount === rightParathesisCount)) {
           // eslint-disable-line no-eval
            setResult(eval(result + ")"))
        } else {
           // eslint-disable-line no-eval
            setResult(eval(result))
        }
    }

    return (
        <div className="calculator-container">
            <div className="result-box">
                {result === "" ? "0" : result.toLocaleString("en-US", {maximumFractionDigits:2})}
            </div>
            <div className="ios-buttons">
                {/* Row 1 */}
                {}
                <button onClick={clearSession} className="grey">C</button>
                <button onClick={handleParenthesis} className="grey">( )</button>
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
                <button onClick={FlipNegPos} className="darkgrey">+/-</button>
                <button onClick={addToTyped} className="darkgrey">0</button>
                <button className="darkgrey">.</button>
                <button onClick={evaluate} className="orange">=</button>
            </div>
        </div>
    )
}
