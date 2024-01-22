import { FC, useState } from "react"
import task from "./task";
import Modal from "./Modal";


function Todo() {
    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState<task[]>([]);
    const switchShow = (): void => setShow(false);
    const addTask = (newTask: task): void => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setShow(false);
    };

    const handleDeleteTask = (id: number): void => {
        const newArr = tasks.filter((item) => item.id !== id);
        setTasks(newArr);
    };

    const handleCheckboxChange = (id: number) : void => {
        setTasks((prevTasks) => 
            prevTasks.map((task) => 
                task.id === id ? {...task, isDone: !task.isDone} : task
            )
        );
    };

    const TaskList: FC = () => {
        let items: task[] = tasks;

        return (
          <>
            {items.map((item) => (
                <div key={item.id} className="text-left relative">
                    <input 
                        type="checkbox" 
                        className="w-4 h-4 ms-3" 
                        checked={item.isDone} 
                        onChange={() => handleCheckboxChange(item.id)}
                    />
                        <span 
                            className={`ms-2 text-lg  ${
                                item.isDone ? "text-gray-400 line-through" : "text-black"
                            }`}>
                            {item.item}
                        </span>
                        <button className="absolute inset-y-0 right-3" onClick={() => handleDeleteTask(item.id)}>✗</button> 
                </div>
            ))}
          </>
        );
    };
    
    const modalOpen = () => {
        setShow(true);
    };

    return (
        <>
        <p className="container border border-black w-80 h-96 relative">
            <div className="border-b-2 border-grey text-4xl p-2 text-white">TODO List</div>
            <div className="divide-y divide-grey border-b border-grey">{<TaskList />}</div>
            <button className="absolute bottom-1 right-1 rounded-full bg-white w-12 h-12 text-4xl px-4 py-1 mt-1 text-blue-300" onClick={modalOpen}>+</button>
            <Modal show={show} switchShow={switchShow} addTask={addTask} />
        </p>
        </>
    );
}

export default Todo;