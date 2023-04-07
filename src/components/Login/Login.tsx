import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


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
                    <Field  name={"login"} placeholder={"Login"} component={Input} autoComplete="current-login"
                    validate={[required]}/>
                </div>
                <div>
                    <Field  type={'password'} name={"Password"} placeholder={"Password"} component={Input} autoComplete="current-password" validate={[required]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={"rememberMe"} component={Input}/> remember me
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

