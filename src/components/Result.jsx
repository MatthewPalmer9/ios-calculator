import React, { useRef } from 'react';

export default function Result(props) {
    const { result } = props;
    const updatedResult = useRef();
    updatedResult.current = result;

    return (
        <div className="result-box">
            {updatedResult.current === "" ? "0" : updatedResult.current.toLocaleString("en-US", {maximumFractionDigits:2})}
        </div>
    )
}
