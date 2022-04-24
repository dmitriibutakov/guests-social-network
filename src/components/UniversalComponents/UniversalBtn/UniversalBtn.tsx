import React from 'react';
import s from "./UniversalBtn.module.css"

type BtnType = {
    name: string
    onClick: () => void
    error?: boolean
    className?: string
}
const UniversalBtn: React.FC<BtnType> = ({
                                             className,
                                             name,
                                             onClick,
                                             error,
                                         }) => {
    const classNameHandler =  `${s.default} ${className}`
        // className ? className : s.default
    const onClickHandler = () => {
        onClick()
    }
    return (
        <button disabled={error} className={classNameHandler} onClick={onClickHandler}>
            {name}</button>
    );
};

export default UniversalBtn;