import React from 'react';
import s from "./UniversalBtn.module.css"

type BtnType = {
    name: string
    callback: () => void
    disable?: boolean
    className?: string
}
const UniversalBtn: React.FC<BtnType> = ({
                                             className,
                                             name,
                                             disable,
                                             callback,
                                         }) => {
    return (
        <button disabled={disable} className={disable ? s.disabled : s.default} onClick={callback}>
            {name}</button>
    );
};

export default UniversalBtn;
