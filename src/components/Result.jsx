import React from 'react';

export default function Result(props) {
    const { result } = props;

    return (
        <div className="result-box">
            {result === "" ? "0" : result.toLocaleString("en-US", {maximumFractionDigits:2})}
        </div>
    )
}
