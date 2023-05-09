import React from 'react';
import {useSelector} from "react-redux";
import {AppRootState, useAppDispatch} from "../../redux/redux-store";
import { Navigate as Redirect } from 'react-router-dom';
import {SubmitHandler, useForm} from "react-hook-form";
import {login} from "../../redux/auth-reducer";
import styles from '../common/FormsControls/FormsControls.module.css'


export type InputsType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const isAuth = useSelector<AppRootState, boolean>(state => state.auth.isAuth)

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={styles.login_page_wrapper}>
            <h3>Sign in</h3>
            <LoginForm/>
        </div>
    );
};

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<InputsType>({
        mode: "onBlur"
    })
    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<InputsType> = (loginData) => {
        dispatch(login(loginData.email, loginData.password, loginData.rememberMe))
    }

    return (
        <form className={styles.loginForm_wrapper} onSubmit={handleSubmit(onSubmit)}>
            <label> Login name <input className={styles.input}
                                      {...register('email', {required: 'email field is required'})}
                                      placeholder={'login'}
                                      type="text"/>
            </label>
            {errors.email && <span className={styles.validation_error}>{errors?.email?.message
                ? errors.email.message : 'error!'
            }</span>}
            <label>Password <input className={`${styles.input} ${styles.input_margin}`}
                                   {...register('password', {required: 'password field is required'})}
                                   placeholder={'password'}
                                   type="password"/>
            </label>
            {errors.password && <span className={styles.validation_error}>{errors?.password?.message
                ? errors.password.message : 'error!'
            }</span>}
            <div className={styles.bthCheckBlock}>
            <label>Remember me <input type="checkbox" {...register('rememberMe')}/></label>
            <button type={"submit"} >Submit</button>
            </div>
        </form>
    )
}