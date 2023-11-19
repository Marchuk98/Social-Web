import React, {ComponentType, FC} from "react";
import {Navigate, Navigate as Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { AppRootState } from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean;
};

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export function withAuthRedirect<T extends MapStatePropsType>(Component: ComponentType<T>) {
    const RedirectComponent: FC<MapStatePropsType> = (props) => {

        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={"/login"} />;


        return <Component {...restProps as T} />;
    };

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedRedirectComponent;
}