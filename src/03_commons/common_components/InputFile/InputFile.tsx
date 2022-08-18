import React, { ChangeEvent } from 'react';
import { ButtonHTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import s from "../../../components/Center/Profile/Profile.module.css";
import { images } from '../../images/dir/icons';
import UniversalBtn from "../UniversalBtn/UniversalBtn";

type InputFilePropsType = {
    callback: (value: any) => void
    accept: string
    index: number
    children: string
}
const InputFile:React.FC<InputFilePropsType> = ({callback, accept, index, children}) => {

    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && callback(e.target.files[index])
    }
    return (
        <label style={{cursor: "pointer"}} htmlFor="contained-button-file" className="m-0 w-100">
            <input
                accept={accept}
                style={{ display: 'none' }}
                id="contained-button-file"
                multiple
                type="file"
                onChange={setValue}
            />
            {children}
        </label>
    );
};
export default InputFile;