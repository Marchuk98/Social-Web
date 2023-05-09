import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import { Paginator } from '../common/Paginator/Paginator';
import {User} from "./User";


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

const Users:React.FC<UsersPropsType> = ({totalUserCountUserPage,pageSizeUserPage,currentPageUserPage,onPageChanged,setUser,...props}) => {
    return (
        <div>
            {
                setUser.map(el => <User
                                    key={el.id}
                                    setUser={el}
                                    follow={props.follow}
                                    unfollow={props.unfollow}
                                    followingInProgress={props.followingInProgress}
                                  />
                )}
            <div className={s.number}>
                    <Paginator currentPageUserPage={currentPageUserPage}
                               onPageChanged={onPageChanged}
                               totalUserCountUserPage={totalUserCountUserPage}
                               pageSizeUserPage={pageSizeUserPage}
                    />
            </div>
        </div>

    );
};

export default Users;