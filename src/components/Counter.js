import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", padding: "20px", marginTop: "20px", borderTop: "2px solid #ccc", fontFamily: "Arial" }}>
            <h2>Counter: {count}</h2>
            <div style={{ gap: "10px", display: "flex", justifyContent: "center" }}>
                <button onClick={() => setCount(count + 1)} style={{ padding: "10px 20px" }}>+</button>
                <button onClick={() => setCount(count - 1)} style={{ padding: "10px 20px" }}>-</button>
                <button onClick={() => setCount(0)} style={{ padding: "10px 20px", backgroundColor: "red", color: "white", border: "none" }}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;