import React, { FC, ReactNode } from 'react';
import { WrappedFieldProps } from "redux-form/lib/Field";
import styles from './FormsControls.module.css';

type FormsControlsType = {
    formType: 'input' | 'textarea' | 'checkbox';
};

type FormControlProps = WrappedFieldProps & FormsControlsType & {
    children: ReactNode;
};

const FormControl: FC<FormControlProps> = ({ input, meta, children, formType = 'input', ...restProps }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea: FC<FormControlProps> = ({ input, meta, children, ...restProps }) => {
    return <FormControl {...restProps} input={input} meta={meta} formType="textarea">{children}<textarea {...input} /></FormControl>
};

export const Input: FC<FormControlProps> = ({ input, meta, children, ...restProps }) => {
    return <FormControl {...restProps} input={input} meta={meta} formType="input">{children}<input {...input} {...restProps} /></FormControl>
};