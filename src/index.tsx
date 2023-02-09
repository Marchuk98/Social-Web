import ReactDOM from "react-dom/client";
import './index.css';
import React from "react";
import {store} from "./redux/state";
import App from "./App";




const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement)
export const renderEntireTree = () => {
    root.render(
            <App store={store}/>
    );
}

store.subscribe(renderEntireTree);
renderEntireTree();





