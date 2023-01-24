import {RootStatePropsType} from "./redux/state";
import ReactDOM from "react-dom/client";
import './index.css';
import React from "react";
import App from "./App";

export const renderTree = (state: RootStatePropsType, addPost:(postMessage:string)=> void) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
    );
}