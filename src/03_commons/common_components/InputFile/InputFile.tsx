import React, { ChangeEvent } from 'react';

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