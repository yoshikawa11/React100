import { FC, useState } from "react";
import { Spacer } from "../Spacer";
import task from "./task";

type ModalProps = {
    show: boolean,
    switchShow: () => void;
    addTask: (newTask: task) => void;
};

const Modal: FC<ModalProps> = ({ show, switchShow, addTask }) => {
    const overlayCss: {[key: string]: string | number } = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height:"100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const contentCss: {[key: string]: string | number } = {
        zIndex: 2,
        width: "25%",
        padding: "1em",
        background: "#bdcfde",
        color : "white"
    };

    const [newTask, setNewTask] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            const taskId = new Date().getTime();
            const taskItem = newTask.trim();
            const isDone = false;

            addTask({ id: taskId, item: taskItem, isDone});
            setNewTask('');
            setErrorMessage('');
        } else {
            setErrorMessage('タスク名を入力してしてください！');
        }
    };
    const handleModalClose = () => {
        switchShow();
        setNewTask('');
        setErrorMessage('');
    };

    if (show) {
        return (
            <div id="overlay" style={overlayCss}>
                    <div id="content" style={contentCss}>
                        <label className="text-l block">タスクを登録</label>
                        <input 
                            type="text" 
                            className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 text-black" 
                            value={newTask} 
                            onChange={(e) => setNewTask(e.target.value)}
                        ></input>
                        <p className="text-red-500 mt-1">{errorMessage}</p>
                        <p>
                            <button className="bg-blue-500 hover:bg-blue-400 text-white text-base rounded px-1 py-1 mt-2" onClick={handleAddTask}>保存</button>
                            <Spacer size={60} horizontal={true}/>
                            <button className="bg-blue-500 hover:bg-blue-400 text-white text-base rounded px-1 py-1 mt-2" onClick={handleModalClose}>閉じる</button>
                        </p>
                    </div>
            </div>
        );
    } else {
        return null;
    }
    
};

export default Modal;