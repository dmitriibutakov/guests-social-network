import React from 'react';
import s from "./ErrorResponse.module.css";

type ErrorResponseType = {
    errorOfResponse: string | null
}
const ErrorResponse: React.FC<ErrorResponseType> = React.memo(({errorOfResponse}) => {
    return (
        <>
            {errorOfResponse && <div className={s.error}>{errorOfResponse}</div>}
        </>
    );
});

export default ErrorResponse;