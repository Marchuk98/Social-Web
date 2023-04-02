import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type LoginFormType = {
    login:string
    password:string
    rememberMe:string
}

export const LoginForm:React.FC<InjectedFormProps<LoginFormType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  name={"login"} placeholder={"Login"} component={"input"} autoComplete="current-login"/>
                </div>
                <div>
                    <Field  type={'password'} name={"Password"} placeholder={"Password"} component={"input"} autoComplete="current-password"/>
                </div>
                <div>
                    <input type={'checkbox'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm<LoginFormType>({form:'Login'})(LoginForm)


export const Login = () => {

    const onSubmitHandler = (formData:LoginFormType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    )
}

