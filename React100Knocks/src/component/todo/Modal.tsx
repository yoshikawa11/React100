import { FC } from "react";
import { Spacer } from "../Spacer";

type ModalProps = {
    show: boolean,
    switchShow: () => void;
};

const Modal: FC<ModalProps> = ({ show, switchShow }) => {
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

    if (show) {
        return (
            <div id="overlay" style={overlayCss}>
                    <div id="content" style={contentCss}>
                        <label className="text-l block">タスクを登録</label>
                        <input type="text" className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 text-black"></input>
                        <p>
                            <button className="bg-blue-500 hover:bg-blue-400 text-white text-base rounded px-1 py-1 mt-2">保存</button>
                            <Spacer size={60} horizontal={true}/>
                            <button className="bg-blue-500 hover:bg-blue-400 text-white text-base rounded px-1 py-1 mt-2" onClick={() => switchShow()}>閉じる</button>
                        </p>
                    </div>
            </div>
        );
    } else {
        return null;
    }
    
};

export default Modal;