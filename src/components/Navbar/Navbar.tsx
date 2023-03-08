import s from './Navbar.module.css'
import { NavLink, useLocation  } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={`${s.item} ${path === '/profile' ? s.activeLink : ''}`}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className={`${s.item} ${path === '/dialogs' ? s.activeLink : ''}`}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={`${s.item} ${path === '/news' ? s.activeLink : ''}`}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={`${s.item} ${path === '/users' ? s.activeLink : ''}`}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={`${s.item} ${path === '/music' ? s.activeLink : ''}`}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={`${s.item} ${path === '/settings' ? s.activeLink : ''}`}>Settings</NavLink>
            </div>
        </nav>

    );


}
export default Navbar;