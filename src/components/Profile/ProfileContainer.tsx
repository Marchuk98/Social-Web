import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, ProfileType, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
// @ts-ignore
import { RouteComponentProps } from 'react-router';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

function withRouter(Component: any) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: ProfileType | null
    status:string | null
    isAuth: boolean
}

type mapDispatchToPropType = {
    setUserProfile:(profile:string) => void
    getProfile:(userId:string) => void
    getStatus:(userId:string) => void
    updateStatus: (status: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & profileStatePropsType
type profileStatePropsType = mapStateToPropsType & mapDispatchToPropType

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.router.params.userId
        if(!userId){
            userId = 28005
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
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(withAuthRedirect, withRouter, connect(mapStateToProps, {setUserProfile, getProfile, getStatus,updateStatus}))(ProfileContainer);