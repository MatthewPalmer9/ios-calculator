/* eslint no-eval: 0 */
import React, { useState } from 'react';
import Result from './Result.jsx';
import '../styles/calculator.css';

export default function Calculator() {
    const [result, setResult] = useState("");

    const addToTyped = e => {
        const resultBox = document.querySelector(".result-box");

        result.length > 7 ? resultBox.style.fontSize = "2rem" : resultBox.style.fontSize = "3.5rem";
        if(result.length === 15) {
            alert("Cannot enter more than 15 digits."); 
            return;
        };

        const resultStringSplitter = result.split("");
        const endOfString = resultStringSplitter[resultStringSplitter.length - 1];

        endOfString === ")" ? setResult(result + "*" + e.target.value) : setResult(result + e.target.value);
        // If the first input is 0 and the e.target.value is 0, do nothing. If not, add in the input.
        (resultStringSplitter[0] === "0" && e.target.value === "0") ? setResult(result) : setResult(result + e.target.value);
        if(resultStringSplitter[0] === "0" && e.target.value !== "0") {
            resultStringSplitter.pop()
            resultStringSplitter.push(e.target.value);
            setResult(resultStringSplitter.join(""))
        }
    };

    const handleOperator = e => {
        const resultStringSplitter = result.split("");
        const endOfString = resultStringSplitter[resultStringSplitter.length - 1]
        const operatorArray = ["+", "-", "*", "/"];

        if(endOfString === "(") { return };
        if(result.length === 15) {
            alert("Cannot enter more than 15 digits."); 
            // return;
        };

        /* 
            Checks if an operator already exists at the end of the operation
            If it does, replace it with the one that was clicked
        */
        if(operatorArray.includes(endOfString)) {
            resultStringSplitter.pop()
        }

        const joiner = resultStringSplitter.join("")
        setResult(joiner + e.target.value)
    }

    const handleParenthesis = () => {
        const resultStringSplitter = result.split("");
        const endOfString = resultStringSplitter[resultStringSplitter.length - 1];
        const leftParenthesisCount = resultStringSplitter.filter(i => i === "(").length;
        const rightParenthesisCount = resultStringSplitter.filter(i => i === ")").length;
        
        // Checks if the count of "(" and ")" are the same in 'result.split("")'. 
        // If they are and the last character in 'result' is a number, add "*("
        // If the count is not the same and moves to the second condition, add a ")"
        // If neither condition is true, nothing happens by default when the "()" button is clicked
        if(leftParenthesisCount === rightParenthesisCount && (+endOfString < 10)) {
            setResult(result + "*(");
        } else if(resultStringSplitter.includes("(") && (+endOfString < 10)) {
            setResult(result + ")");
        } else {
            return;
        }
    }

    const handlePercentage = () => {
        const resultStringSplitter = result.split("");
        const endOfString = resultStringSplitter[resultStringSplitter.length - 1];

        if(result < 0) {
            return;
        };

        if(resultStringSplitter.includes("(") && (+endOfString < 10)) {
            setResult(eval(result + ")")/100)
        } else {
            setResult(eval(result)/100);
        };
    };

    const clearSession = () => {
        setResult("");
        const resultBox = document.querySelector(".result-box");
        resultBox.style.fontSize = "3.5rem";
    };

    const evaluate = () => {
        // Handle font size on input

        const resultStringSplitter = result.split("");
        const endOfString = resultStringSplitter[resultStringSplitter.length - 1]
        const leftParethesisCount = resultStringSplitter.filter(i => i === "(").length;
        const rightParethesisCount = resultStringSplitter.filter(i => i === ")").length;
        
        if(endOfString === "(") {
            return;
        } 
        
        !(leftParethesisCount === rightParethesisCount) ? setResult(eval(result + ")").toString()) : setResult(eval(result).toString());
    }

    return (
        <div className="calculator-container">
            <Result result={result} />
            <div className="ios-buttons">
                {/* Row 1 */}
                <button onClick={clearSession} className="grey">C</button>
                <button onClick={handleParenthesis} className="grey">( )</button>
                <button onClick={handlePercentage} className="grey">%</button>
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
                <button className="black-filler"></button>
                <button onClick={addToTyped} className="zero darkgrey" value="0">0</button>
                <button onClick={addToTyped} className="darkgrey" value=".">.</button>
                <button onClick={evaluate} className="orange">=</button>
            </div>
        </div>
    )
}
