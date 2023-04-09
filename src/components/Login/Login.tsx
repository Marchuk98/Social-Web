import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppRootState} from "../../redux/redux-store";
import { Navigate as Redirect } from 'react-router-dom';
import styles from '../common/FormsControls/FormsControls.module.css'



type LoginFormType = {
    email:string
    password:string
    rememberMe:boolean
}

export const LoginForm:React.FC<InjectedFormProps<LoginFormType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  name={"email"} placeholder={"Email"} component={Input} autoComplete="current-login"
                    validate={[required]}/>
                </div>
                <div>
                    <Field type={'password'} name={"password"} placeholder={"Password"} component={Input} autoComplete="current-password" validate={[required]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={"rememberMe"} component={Input}/> remember me
                </div>
                { props.error && <div className={styles.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm<LoginFormType>({form:'login'})(LoginForm)

type mapStateToPropsType = {
    isAuth:boolean
}

type mapDispatchToPropsType = {
    login:(email:string,password:string,rememberMe:boolean) => void
}

export type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootState) => {
    return {
        isAuth:state.auth.isAuth
    }
}



 const Login:React.FC<LoginPropsType> = (props) => {

    const onSubmitHandler = (formData: LoginFormType) => {
        console.log(formData)
            props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    )
}

export default connect(mapStateToProps, {login})(Login)
