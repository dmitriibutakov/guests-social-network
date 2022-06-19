import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import SendText from "../../UniversalComponents/UniversalSend/SendText";
import {DialogsPropsType} from "./DialogsContainer";
import UsersDialogs from "./UsersDialogs/UsersDialogs";
import UsersInDialogs from "./UsersInDialogs/UsersInDialogs";

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, updateNewMessage, addMessage}) => {

    const userChat = dialogsPage.usersDialogs.map(el => <UsersDialogs id={el.id} key={el.id} name={el.name}
                                                                      text={el.text}
                                                                      time={el.time}/>);
    let user = dialogsPage.users.map(el => <UsersInDialogs key={el.id} name={el.name} id={el.id}/>);
    const onClickCallBack = () => {
        addMessage()
    }
    const onChangeCallBack = (event: ChangeEvent<HTMLInputElement>) => {
        updateNewMessage(event)
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
                <SendText onClickCallBack={onClickCallBack}
                          onChangeCallBack={onChangeCallBack}
                          state={dialogsPage}/>
            </div>
    );
};

export default Dialogs;
