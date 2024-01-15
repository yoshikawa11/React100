import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const handlePlusClick = () => {
        setCount(count + 1);
    };
    const handleMinusClick = () => {
        setCount(count - 1);
    };
    return <p className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="text-3xl font-bold underline">React Counter</div>
        <span>{count}</span>
        <div>
            <button className="bg-blue-500 hover:bg-blue-400 text-white rounded px-3 py-1" onClick={handlePlusClick}>+</button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white rounded px-3 py-1" onClick={handleMinusClick}>-</button>
        </div>
    </p>;
}


export default Counter;