import React, {ChangeEvent} from 'react';

type InputType = {
    placeholder: string
    value?: string
    onChangeCallBack: (event: ChangeEvent<HTMLInputElement>) => void
    className: string
}
const Input: React.FC<InputType> = ({className, placeholder, value, onChangeCallBack}) => {
    return (
        <input onChange={onChangeCallBack}
               value={value}
               placeholder={placeholder}
               className={className}
               type="text"/>
    );
};

export default Input;
