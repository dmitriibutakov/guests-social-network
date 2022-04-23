import React from 'react';
import s from "./Contacts.module.css";
import Contact from "./Contact";

export type ContactsType = {
    users: Array<UserType>
}
export type UserType = {
    avatar: string; name: string; id: string; city: string;
}

const Contacts: React.FC<ContactsType> = ({users}) => {
    let contacts = users.map((el) => <Contact avatar={el.avatar} city={el.city} name={el.name}
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