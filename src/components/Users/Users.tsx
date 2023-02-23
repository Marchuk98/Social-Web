import React from 'react';
import {usersStatePropsType} from "./UsersContainer";
import s from './Users.module.css'


const Users = (props:usersStatePropsType) => {

    if(props.stateUserPage.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl:'https://media.istockphoto.com/vectors/cat-working-on-computer-vector-id165049167?k=20&m=165049167&s=612x612&w=0&h=XhBcoFA1oMU-KfUEMTMsN3WeBbHHxH08fS-vtDcpJOA=',
                followed: false,
                name: "Dima",
                description: "I am a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 1,
                photoUrl:'https://media.istockphoto.com/vectors/puppy-at-computer-vector-id165049259?k=20&m=165049259&s=612x612&w=0&h=kOu0Lrb5iez4u9Yfe1AXUDew9Nx0mHsgl_xpopP0-PM=',
                followed: true,
                name: "Vova",
                description: "I am so fanny",
                location: {city: "Brest", country: "Belarus"}
            },
            {
                id: 1,
                photoUrl:'https://damion.club/uploads/posts/2022-11/1668830902_damion-club-p-kotik-za-kompom-oboi-85.jpg',
                followed: false,
                name: "Sveta",
                description: "I think she is so pretty.",
                location: {city: "Moscow", country: "Russia"}
            },
        ])
    }

    return (
        <div>
            {props.stateUserPage.users.map(el=> <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photoUrl} className={s.userPhoto}/>
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
                         <div>{el.location.country}</div>
                         <div>{el.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;
