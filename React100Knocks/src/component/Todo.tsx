import { useState } from "react";
import { Spacer } from "./Spacer";
import task from "./todo/task";

function Todo() {
    const Tasks = (): JSX.Element => {
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
    return (
        <>
        <p className="container border border-black w-80 h-96">
            <div>TODO List</div>
            <div>{Tasks()}</div>
        </p>
        </>
    );
}

export default Todo;