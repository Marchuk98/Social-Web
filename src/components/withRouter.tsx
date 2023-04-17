import {useParams} from "react-router-dom";
import React, {ComponentType} from "react";

function withRouter<T>(Component: ComponentType<T>) {
    function ComponentWithRouterProp(props:T) {
        let params = useParams();
        return (
            <Component{...props} params={ params }/>
        );
    }

    return ComponentWithRouterProp;
}

type  WithRouterType<P> = {
    params: P
}