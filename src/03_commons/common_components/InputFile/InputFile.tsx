import React, { ChangeEvent } from 'react';

type InputFilePropsType = {
    callback: (value: any) => void
}
const InputFile:React.FC<InputFilePropsType> = ({callback}) => {
    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && callback( e.target.files[0])
    }
    return (
      <input onChange={setValue} type={"file"}/>
    );
};

export default InputFile;