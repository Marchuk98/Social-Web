import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    totalUserCountUserPage: number
    pageSizeUserPage: number
    currentPageUserPage: number
    onPageChanged: (pageNumber: number) => void
    setUser: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress:number[]
}


const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUserCountUserPage / props.pageSizeUserPage)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                props.setUser.map(el => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${el.id}`}>
                        <img className={s.ava} src={el.photos.large !== null ? el.photos.large : userPhoto}
                             alt={'photo'}/>
                            </NavLink>
                    </div>
                    <div>
                       {el.followed ? <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                               props.unfollow(el.id)

                           }}>Unfollow</button>

                           : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                               props.follow(el.id)

                           }}>Follow</button>
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
                    </div>
                )}
            <div className={s.number}>
                {
                    pages.map((p, index) =>
                        <span key={index} className={props.currentPageUserPage === p ? s.selectedPage : ""}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>
                            {p}</span>
                    )}
            </div>
        </div>

    );
};

export default Users;