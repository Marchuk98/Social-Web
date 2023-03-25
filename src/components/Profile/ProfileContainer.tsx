import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
// @ts-ignore
import { RouteComponentProps } from 'react-router';
import { Navigate as Redirect } from 'react-router-dom';



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
    profile: string
    isAuth: boolean
}

type mapDispatchToPropType = {
    setUserProfile:(profile:string) => void
    getProfile:(userId:string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & profileStatePropsType
type profileStatePropsType = mapStateToPropsType & mapDispatchToPropType

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.router.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getProfile(userId)
    }

    render() {

        if(!this.props.isAuth){
            return <Redirect to={"/login"}/>
        }

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state:AppRootState):mapStateToPropsType => {
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {setUserProfile,getProfile})(withRouter(ProfileContainer))