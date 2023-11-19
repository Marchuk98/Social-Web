import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {logout} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import {AppRootState} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {withRouter} from "./components/withRouter";


class App extends React.Component<AppPropsType>{

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/'} element={<ProfileContainer/>} />
                            <Route path='/profile' element={<ProfileContainer />}>
                                <Route path={':userId'} element={<ProfileContainer/>}/>
                            </Route>
                            <Route path='/login' element={<Login/>}/>
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
    initialized: boolean
}
type mapDispatchToProps = {
    initializedApp: () => void
}

export type AppPropsType = mapStateToProps & mapDispatchToProps

const mapStateToProps = (state: AppRootState): mapStateToProps => {
    return {
        initialized: state.app.initialized
    }
}


export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializedApp, logout}))(App);
