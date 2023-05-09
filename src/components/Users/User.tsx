import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";


type UserPropsType = {
    setUser: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
}

export const User: React.FC<UserPropsType> = (props) => {
    const user = props.setUser

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                        <img className={s.ava} src={user.photos.large !== null ? user.photos.large : userPhoto}
                             alt={'photo'}/>
                            </NavLink>
                    </div>
                    <div>
                       {user.followed ?
                           <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                               props.unfollow(user.id)

                           }}>Unfollow</button>

                           : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                               props.follow(user.id)

                           }}>Follow</button>
                       }
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.description}</div>
                    </span>
                    <span>
                         <div>{"user.location.country"}</div>
                         <div>{"user.location.city"}</div>
                    </span>
                </span>
        </div>
    )
}