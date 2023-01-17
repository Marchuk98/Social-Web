import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import state from "../../redux/state";

const DialogItem = () => {
    return  <div className={s.dialog + ' ' + s.active}>
        {state.dialogsPage.dialogs.map(d => {
            return(
                <NavLink key={d.id} className={s.dialogsItems} to={"/dialogs/1" + d.id }>{d.name}</NavLink>
            );
        })}
    </div>
}

const Message = () => {
    return  <div className={s.message}>
        {state.dialogsPage.message.map(m => {
            return(
                <div key={m.id}>{m.message}</div>
            );
        })}
    </div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div>
                <DialogItem/>
            </div>
            <div className={s.messages}>
                <Message/>
            </div>
        </div>
    );
}

export default Dialogs