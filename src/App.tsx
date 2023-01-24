import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStatePropsType} from "./redux/state";


type AppPropsType = {
    state: RootStatePropsType
    addPost:(postMessage: string) => void
}


const App: React.FC<AppPropsType>= (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>




                    <Routes>
                        <Route path="/" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
                        <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} />}/>
                        <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>


);

}


export default App;
