import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import UniversalBtn from "../../../03_commons/common_components/UniversalBtn/UniversalBtn";
import UniversalInput from "../../../03_commons/common_components/UniversalInput/UniversalInput";
import { minLengthCreator, required } from "../../../03_commons/utils/validators/validators";
import {FormDataType} from "./Login";
import s from "./LoginForm.module.scss"
import {useAppSelector} from "../../../02_BLL/store";

const minLength = minLengthCreator(8)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const theme = useAppSelector(state => state.app.darkMode)
    const themeForm = theme ? s.form__dark : s.form
    const themeCheckbox = theme ? s.checkbox__text_dark : s.checkbox__text
    return (
        <>
            <p className={s.test__data}>test-email: <b>test_projects@yahoo.com</b></p>
            <p className={s.test__data}>password: <b>test123456</b></p>
            <form className={themeForm} onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={"email, min 8 symbols"}
                           name={"email"}
                           validate={[required, minLength]}
                           component={UniversalInput}/>
                </div>
                <div>
                    <Field placeholder={"password, min 8 symbols"}
                           type="password"
                           validate={[required, minLength]}
                           name={"password"}
                           component={UniversalInput}/>
                </div>
                <div className={themeCheckbox}>
                    <Field className={s.checkbox}
                           component="input"
                           name={"remember me"}
                           type="checkbox"/>remember me
                </div>
                {error && <div className={s.input__summary_error}>{error}</div>}
                <UniversalBtn name={"send"} type={"submit"}/>
            </form>
        </>
    );
};

export default LoginForm;
