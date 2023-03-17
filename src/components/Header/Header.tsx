import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type headerPropsType = {
    login: null | string
    isAuth:boolean
}


const Header = (props:headerPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/originals/8f/50/63/8f50630ae0e1775196e4c270c573ce67.png" alt=""/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>

        </header>

    );
}

export default Header;