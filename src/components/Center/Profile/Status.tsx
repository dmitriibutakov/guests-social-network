import React, {useState} from 'react';
import s from "./Profile.module.css";

type StatusType = {
    updateStatus: (status: string) => void
    status: string
}
const Status: React.FC<StatusType> = ({updateStatus, status}) => {
    const [editMode, setEditMode] = useState(false)
    const [localStatus, setLocalStatus] = useState("")
    return (
        <>
            {editMode ? <input autoFocus={true}
                               onChange={(e) => setLocalStatus(e.currentTarget.value)}
                               onBlur={() => {
                                   setEditMode(false)
                                   updateStatus(localStatus)
                               }}
                               type="text"
                               value={localStatus}/>
                : <p onDoubleClick={() => setEditMode(true)}
                     className={s.user__status}>
                    {status || "fill status"}
                </p>}
        </>
    );
};

export default Status;
