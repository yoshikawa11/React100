import { FC, useState } from "react"
import task from "./todo/task";
import Modal from "./todo/Modal";

function Todo() {
    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState<task[]>([]);
    const switchShow = (): void => setShow(false);
    const addTask = (newTask: task): void => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setShow(false);
    };
    const TaskList: FC = () => {
        let items: task[] = tasks;

        return (
          <>
            {items.map((item) => (
              <div key={item.id}>{item.item}</div>
            ))}
          </>
        );
    };
    
    const modalOpen = () => {
        setShow(true);
    };

    return (
        <>
        <p className="container border border-black w-80 h-96">
            <div>TODO List</div>
            <div>{<TaskList />}</div>
            <button onClick={modalOpen}>+</button>
            <Modal show={show} switchShow={switchShow} addTask={addTask} />
        </p>
        </>
    );
}

export default Todo;