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

    const handleParenthesis = () => {
        let newResult = result.split("");
        let checker = newResult[newResult.length - 1]
        const leftPr = newResult.filter(i => i === "(").length;
        const rightPr = newResult.filter(i => i === ")").length;

        
        // Checks if the count of "(" and ")" are the same in 'result.split("")'. 
        // If they are and the last character in 'result' is a number, add "*("
        // If the count is not the same and moves to the second condition, add a ")"
        // If neither condition is true, nothing happens by default when the "()" button is clicked
        if(leftPr === rightPr && (checker === "0" || checker === "1" || checker === "2" || checker === "3" || checker === "4" || checker === "5" || checker === "6" || checker === "7" || checker === "8" || checker === "9")) {
            setResult(result + "*(");
        } else if(newResult.includes("(") && (checker === "0" || checker === "1" || checker === "2" || checker === "3" || checker === "4" || checker === "5" || checker === "6" || checker === "7" || checker === "8" || checker === "9")) {
            setResult(result + ")");
        }
    }

    const clearSession = () => {
        setResult("");
    };

    const evaluate = () => {
        const endItem = result.split("");
        const itemCheck = endItem[endItem.length - 1];
        
        if(result.split("").includes("(") && itemCheck !== ")") {
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
                <button className="darkgrey">+/-</button>
                <button onClick={addToTyped} className="darkgrey">0</button>
                <button className="darkgrey">.</button>
                <button onClick={evaluate} className="orange">=</button>
            </div>
        </div>
    )
}
