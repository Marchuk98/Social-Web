import React from 'react';
import {withRouter, WithRouterType} from "../withRouter";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppRootState} from "../../redux/redux-store";
import Profile from "./Profile";
import {Navigate, Navigate as Redirect} from "react-router-dom";
import {getProfile, getStatus, ProfileType, setUserProfile, updateStatus} from "../../redux/profile-reducer";

type mapStateToPropsType = {
    profile: ProfileType | null
    status:string
    isAuth: boolean
    autorizedUserId: number | null
}

type mapDispatchToPropType = {
    setUserProfile:(profile:string) => void
    getProfile:(userId:number) => void
    getStatus:(userId:number) => void
    updateStatus: (status: string) => void
}

type ProfileParamsType = {
    userId: number | null
}

type ContentPropsType = WithRouterType<ProfileParamsType> & mapStateToPropsType & mapDispatchToPropType

class ProfileContainer extends React.Component<ContentPropsType>{

    state = {
        redirect: false,
    };

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.setState({ redirect: true });
            }
        }

        if (userId) {
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        }
    }

    render() {

        if (this.state.redirect) {
            return <Navigate to={'/login'} />;
        }

        return (
            <div>
                <Profile {...this.props} status={this.props.status} profile={this.props.profile} updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

const mapStateToProps = (state:AppRootState):mapStateToPropsType => {
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        autorizedUserId: state.auth.id,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {setUserProfile, getProfile, getStatus,updateStatus}))(ProfileContainer);