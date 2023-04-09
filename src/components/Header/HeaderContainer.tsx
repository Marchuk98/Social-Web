import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser, logout} from "../../redux/auth-reducer";
import {AppRootState} from "../../redux/redux-store";

class HeaderContainer extends React.Component<authStatePropsType> {

    componentDidMount() {
        this.props.getAuthUser()
    }

    render() {
        return <Header {...this.props}/>
    }
}


type mapStateToProps = {
    isAuth:boolean,
    login:string | null
}
type mapDispatchToProps = {
    getAuthUser:()=> void
    logout:() => void
}

export type authStatePropsType = mapStateToProps & mapDispatchToProps

const mapStateToProps = (state: AppRootState): mapStateToProps => {
    return {
       isAuth:state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUser,logout})(HeaderContainer);