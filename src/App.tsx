import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUser, logout} from "./redux/auth-reducer";
import {withRouter} from "./components/withRouter";
import {compose} from "redux";


class App extends React.Component {

    // componentDidMount() {
    //     this.props.getAuthUser()
    // }

    render() {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path='/profile/:userId/' element={<ProfileContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>


        );

    }
}

type mapStateToProps = {
    initialized:boolean
}
type mapDispatchToProps = {
    initialized:() => void
}

export type authStatePropsType = mapStateToProps & mapDispatchToProps

// const mapStateToProps = (state: AppRootState): mapStateToProps => {
//     // return {
//     //
//     // }
// }



export default compose<React.ComponentType>(withRouter,connect(null, {getAuthUser,logout}))(App);
