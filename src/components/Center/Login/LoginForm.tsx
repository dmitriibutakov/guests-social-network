import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {FormDataType} from "./Login";
import s from "./LoginForm.module.css"
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form className={s.form} onSubmit={props.handleSubmit}>
                <div ><Field placeholder={"login"} className={s.input} type="text" name={"login"} component="input"/></div>
                <div ><Field placeholder={"password"} className={s.input} type="password" name={"password"} component="input"/></div>
                <div className={s.checkbox__text}><Field className={s.checkbox} component="input" name={"remember me"} type="checkbox"/>remember me</div>
                <UniversalBtn name={"send"} callback={()=>{}} type={"submit"}/>
            </form>
        </div>
    );
};

export default LoginForm;
