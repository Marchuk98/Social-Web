import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
// @ts-ignore
import { RouteComponentProps } from 'react-router';
import {profileAPI} from "../../api/api";



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
    profile: any
}

type mapDispatchToPropType = {
    setUserProfile:(profile:any) => void
}

type PropsType = RouteComponentProps<PathParamsType> & profileStatePropsType
type profileStatePropsType = mapStateToPropsType & mapDispatchToPropType

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.router.params.userId
        if(!userId){
            userId = 2;
        }
        profileAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div>
                    <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state:AppRootState):mapStateToPropsType => {
   return{
       profile: state.profilePage.profile
   }
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))