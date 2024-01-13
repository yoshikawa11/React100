import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const handlePlusClick = () => {
        setCount(count + 1);
    };
    const handleMinusClick = () => {
        setCount(count - 1);
    };
    return <p>
        <div>React Counter</div>
        <span>{count}</span>
        <div>
            <span onClick={handlePlusClick}>+</span>
            <span onClick={handleMinusClick}>-</span>
        </div>
    </p>;
}


export default Counter;