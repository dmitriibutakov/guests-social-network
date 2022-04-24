import React from 'react';
import s from "./Contacts.module.css";
import Contact from "./Contact";
import {LeftFriendsType} from "../../../Redux/redux-store";
type ContactsType = {
    leftFriends: LeftFriendsType
}
const Contacts: React.FC<ContactsType> = (props) => {

    let contacts = props.leftFriends.friends.map((el) => <Contact avatar={el.avatar} city={el.city} name={el.name}
                                                             id={el.id}/>)
    return (
        <>
            <div className={s.contactsTitle}>Contact <span className={s.contactsPush}>25</span></div>
            <div>
                {contacts}
            </div>
        </>
    );
};

export default Contacts;