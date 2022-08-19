import React, {useEffect} from "react";
import s from "./Dialogs.module.scss"
import {DialogsPropsType} from "./DialogsContainer";
import UsersDialogs from "./UsersDialogs/UsersDialogs";
import UsersInDialogs from "./UsersInDialogs/UsersInDialogs";
import UniversalSendText from "../../../03_commons/common_components/UniversalSend/UniversalSendText";
import {useParams} from "react-router-dom";
import {setDialog} from "../../../02_BLL/dialogs-reducer";
import { reset } from "redux-form";
import {useAppDispatch} from "../../../02_BLL/store";

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, addMessage, setDialog, darkMode}) => {
    const dispatch = useAppDispatch()
    const {userName} = useParams<'userName'>()
    useEffect(()=> {
        userName && setDialog(userName)
    },[userName] )
    const userChat = dialogsPage.activeDialog.map(el => <UsersDialogs id={el.id} key={el.id} name={el.name}
                                                                      text={el.text} time={el.time}/>);
    let user = dialogsPage.users.map(el => <UsersInDialogs darkMode={darkMode} setDialog={setDialog} key={el.id} name={el.name} id={el.id}/>);
    const addNewMessage = (value: { newMessageBody: string }) => {
        addMessage(value.newMessageBody, userName || "")
        dispatch(reset("dialogSendText"))
    }

    return (
        <div className={s.body}>
            <div className={s.body__users}>
                <div className={s.users}>
                    {user}
                </div>
                <div className={s.messages}>
                    {userChat}
                </div>
            </div>
<UniversalSendText onSubmit={addNewMessage}/>
        </div>
    );
};

export default Dialogs;
