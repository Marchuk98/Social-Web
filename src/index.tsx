import ReactDOM from "react-dom/client";
import './index.css';
import React from "react";
import store from './redux/redux-store'
import App from "./App";
import {Provider} from "react-redux";



const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement)
export const renderEntireTree = () => {
    root.render(
            <Provider store={store}>
            <App/>
            </Provider>
    );
}

store.subscribe(renderEntireTree);
renderEntireTree();





