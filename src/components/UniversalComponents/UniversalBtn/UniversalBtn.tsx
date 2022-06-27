import React from 'react';
import s from "./UniversalBtn.module.css"

type BtnType = {
    name: string
    callback?: () => void
    disable?: boolean
    className?: string
    type?: "submit"
}
const UniversalBtn: React.FC<BtnType> = ({
                                             className,
                                             name,
                                             disable,
                                             callback,
                                             type
                                         }) => {
    return (
        <button disabled={disable} type={type} className={disable ? s.disabled : s.default} onClick={callback}>
            {name}</button>
    );
};

export default UniversalBtn;
