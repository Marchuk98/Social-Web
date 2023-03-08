import React from 'react';
import {usersStatePropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'


class User extends React.Component<usersStatePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageUserPage}&count= ${this.props.pageSizeUserPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count= ${this.props.pageSizeUserPage}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCountUserPage / this.props.pageSizeUserPage)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>

                <div>
                    {pages.map(p => {
                        return <span onClick={(e)=>this.onPageChanged(p)} className={`${this.props.currentPageUserPage === p && s.selectedPage}`} >{p}</span>})}
                </div>
                {this.props.stateUserPage.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={!el.photo ? userPhoto : el.photo} className={s.userPhoto} alt={'userPhoto'}/>
                    </div>
                    <div>
                       {el.followed
                           ? <button onClick={() => {
                               this.props.unfollow(el.id)
                           }}>Unfollow</button>
                           : <button onClick={() => {
                               this.props.follow(el.id)
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
    }
}

export default User;
