import React from "react";
import s from "./Dialogs.module.css"
import {DialogsPropsType} from "./DialogsContainer";
import UsersDialogs from "./UsersDialogs/UsersDialogs";
import UsersInDialogs from "./UsersInDialogs/UsersInDialogs";
import UniversalSendText from "../../UniversalComponents/UniversalSend/UniversalSendText";

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, addMessage}) => {

    const userChat = dialogsPage.usersDialogs.map(el => <UsersDialogs id={el.id} key={el.id} name={el.name}
                                                                      text={el.text} time={el.time}/>);
    let user = dialogsPage.users.map(el => <UsersInDialogs key={el.id} name={el.name} id={el.id}/>);
    const addNewMessage = (value: { newMessageBody: string }) => (addMessage(value.newMessageBody))

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
                <div className={s.sendText}><UniversalSendText onSubmit={addNewMessage}/></div>

            </div>
    );
};

export default Dialogs;
