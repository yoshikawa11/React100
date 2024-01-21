import { FC, useState } from "react"
import task from "./todo/task";
import Modal from "./todo/Modal";

function Todo() {
    const [show, setShow] = useState(false);
    const switchShow = (): void => setShow(false);
    
    const TaskList: FC = () => {
        let items:task[] = [
          { id: 1, item: 'Task 1', isDone: true},
          { id: 2, item: 'Task 2', isDone: false},
          { id: 3, item: 'Task 3', isDone: false},
        ];
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
            <Modal show={show} switchShow={switchShow} />
        </p>
        </>
    );
}

export default Todo;