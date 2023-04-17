import React, {JSXElementConstructor} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Navigate} from "react-router-dom";
import {useLocation, useNavigate, useParams} from "react-router-dom";


class ProfileContainer extends React.Component<profileStatePropsType>{

    componentDidMount() {
        debugger
        let userId = this.props.router.params.userId
        console.log(userId)
        if(!userId){
            // @ts-ignore
            userId = this.props.autorizedUserId
            if(!userId){
                // @ts-ignore
                // this.props.history.push('/login')
                return <Navigate to={'/login'}/>
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         status={this.props.status}
                         profile={this.props.profile}
                         updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

const mapStateToProps = (state:AppRootState) => {
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        autorizedUserId: state.auth.userId,
        status: state.profilePage.status
    }
}

export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props}
                          router={{location, navigate, params}}/>
    }

    return ComponentWithRouterProp;
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropType = ReturnType<typeof getProfile>
    | ReturnType<typeof getStatus>
    | ReturnType<typeof updateStatus>

type PropsType = {
    router: { params: { userId: string } }
    setUserProfile:(profile:string) => void
    getProfile:(userId:string) => void
    getStatus:(userId:string) => void
    updateStatus: (status: string) => void
}

type profileStatePropsType = PropsType & mapStateToPropsType & mapDispatchToPropType


export default compose<React.ComponentType>(withAuthRedirect, withRouter, connect(mapStateToProps, {setUserProfile, getProfile, getStatus,updateStatus}))(ProfileContainer);