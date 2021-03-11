import React from 'react';

export default function Result(props) {
    const { result } = props;

    return (
        <div className="result-box">
            {result.current === "" ? "0" : result.current.toLocaleString("en-US", {maximumFractionDigits:2})}
        </div>
    )
}
