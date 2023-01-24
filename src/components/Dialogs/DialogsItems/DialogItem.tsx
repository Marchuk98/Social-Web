import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

type DialogItemPropsType = {
    id: number
    name: string
}


export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = "/dialogs/1" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={s.dialogsItems}>{props.name}</NavLink>

        </div>
    )
}



