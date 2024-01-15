import { useState } from "react";
import { Spacer } from "./Spacer";

function Counter() {
    const [count, setCount] = useState(0);
    const handlePlusClick = () => {
        setCount(count + 1);
    };
    const handleMinusClick = () => {
        setCount(count - 1);
    };
    return <p className="container rounded overflow-hidden shadow-lg bg-white">
        <div className="text-gray-300 text-3xl font-bold underline px-3 py-1">React Counter</div>
        <Spacer size={60} />
        <span className="text-blue-600 font-bold text-6xl">{count}</span>
        <Spacer size={60} />
        <div>
            <button className="bg-blue-500 hover:bg-blue-400 text-white rounded px-3 py-1" onClick={handlePlusClick}>+</button>
            <Spacer size={100} horizontal={true}/>
            <button className="bg-blue-500 hover:bg-blue-400 text-white rounded px-3 py-1" onClick={handleMinusClick}>-</button>
            <Spacer size={30}/>
        </div>
    </p>;
}


export default Counter;