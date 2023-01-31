import ReactDOM from "react-dom/client";
import './index.css';
import React from "react";
import {addPost, updateNewPostText, state} from "./redux/state";
import {subscribe} from "./redux/state";
import App from "./App";




export const renderEntireTree = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
    );
}


subscribe(renderEntireTree);
renderEntireTree();





