import {useParams} from "react-router-dom";
import React, {ComponentType} from "react";

export function withRouter<T>(Component: ComponentType<T>) {
    function ComponentWithRouterProp(props:any) {
        let params = useParams();
        return (
            <Component{...props} router={{ params }}/>
        );
    }

    return ComponentWithRouterProp;
}

export type  WithRouterType<P> = {
    params: P
}