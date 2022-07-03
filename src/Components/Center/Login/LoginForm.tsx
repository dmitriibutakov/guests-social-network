import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {FormDataType} from "./Login";
import s from "./LoginForm.module.css"
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";
import UniversalInput from "../../UniversalComponents/UniversalInput/UniversalInput";
import {minLengthCreator, required} from "../../../Utils/validators/validators";

const minLength = minLengthCreator(8)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form className={s.form} onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"login"}
                           name={"login"}
                           validate={[required, minLength]}
                           component={UniversalInput}/>
                </div>
                <div>
                    <Field placeholder={"password"}
                           type="password"
                           validate={[required, minLength]}
                           name={"password"}
                           component={UniversalInput}/>
                </div>
                <div className={s.checkbox__text}>
                    <Field className={s.checkbox}
                           component="input"
                           name={"remember me"}
                           type="checkbox"/>remember me
                </div>
                <UniversalBtn name={"send"} type={"submit"}/>
            </form>
        </div>
    );
};

export default LoginForm;
