import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, ProfileType, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter, WithRouterType} from "../withRouter";


type mapStateToPropsType = {
    profile: ProfileType | null
    status:string
    isAuth: boolean
    autorizedUserId:number | null
}

type mapDispatchToPropType = {
    setUserProfile:(profile:string) => void
    getProfile:(userId:string) => void
    getStatus:(userId:string) => void
    updateStatus: (status: string) => void
}

type ProfileParamsType = {
    userId: string
}

type ContentPropsType = WithRouterType<ProfileParamsType> & mapStateToPropsType & mapDispatchToPropType

class ProfileContainer extends React.Component<ContentPropsType>{

    componentDidMount() {
        let userId = this.props.params.userId
        if(!userId){

            // @ts-ignore
            userId = this.props.autorizedUserId
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
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
        autorizedUserId: state.auth.userId,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(withAuthRedirect, withRouter, connect(mapStateToProps, {setUserProfile, getProfile, getStatus,updateStatus}))(ProfileContainer);