import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/usersReducer";


type UsersPropsType = {
    totalUserCountUserPage:number
    pageSizeUserPage:number
    currentPageUserPage:number
    onPageChanged:(pageNumber:number)=> void
    setUser:UserType[]
    follow:(userId: number)=> void
    unfollow:(userId: number)=> void
}


const Users = (props:UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUserCountUserPage / props.pageSizeUserPage)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>

            <div>
                {pages.map((p,index) => {
                    return <span key={index} onClick={(e)=>props.onPageChanged(p)} className={`${props.currentPageUserPage === p && s.selectedPage}`} >{p}</span>})}
            </div>
            {props.setUser.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={!el.photo ? userPhoto : el.photo} className={s.userPhoto} alt={'userPhoto'}/>
                    </div>
                    <div>
                       {el.followed
                           ? <button onClick={() => {
                               props.unfollow(el.id)
                           }}>Unfollow</button>
                           : <button onClick={() => {
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
            </div>)}
        </div>
    );
};

export default Users;