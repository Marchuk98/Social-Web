import React from 'react';
import {usersStatePropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

const Users = (props:usersStatePropsType) => {

    if(props.stateUserPage.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            props.setUsers(response.data.items)
        });
    }

    return (
        <div>
            {props.stateUserPage.map(el=> <div key={el.id}>
                <span>
                    <div>
                        <img src={!el.photo ? userPhoto : el.photo} className={s.userPhoto} alt={'userPhoto'}/>
                    </div>
                    <div>
                       {el.followed
                           ? <button onClick={()=> {props.unfollow(el.id)}}>Unfollow</button>
                           : <button onClick={()=> {props.follow(el.id)}}>Follow</button>
                       }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.description}</div>
                    </span>
                    <span>
                         <div>{"el.location.country"}</div>
                         <div>{"el.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;
