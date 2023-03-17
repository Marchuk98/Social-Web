import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppRootState} from "../../redux/redux-store";
import {authAPI} from "../../api/api";


type mapStateToProps = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type mapDispatchToProps = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

type authStatePropsType = mapStateToProps & mapDispatchToProps


class HeaderContainer extends React.Component<authStatePropsType> {

    componentDidMount() {
        authAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login, email)
            }
        });
    }

    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppRootState): mapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
        email: state.auth.email
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);