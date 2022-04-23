import React from 'react';
import s from "./NewPost.module.css"
 type InputType = {
    className?: string
     placeholder: string
 }
const Input:React.FC<InputType> = ({className, placeholder}) => {
    const setClass = ` ${className} ${s.input}`
    return (
        <input placeholder={placeholder} className={setClass} type="text"/>
    );
};

export default Input;