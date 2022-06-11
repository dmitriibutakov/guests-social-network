import React from 'react';
import s from "./UniversalBtn.module.css"

type BtnType = {
    name: string
    callback: () => void
    error?: boolean
    className?: string
}
const UniversalBtn: React.FC<BtnType> = ({
                                             className,
                                             name,
                                             error,
                                             callback,
                                         }) => {
    return (
        <button disabled={error} className={s.default} onClick={callback}>
            {name}</button>
    );
};

export default UniversalBtn;
