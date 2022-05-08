import React from 'react';
import s from "./Contacts.module.css";
import ContactContainer from "./ContactContainer";
const Contacts = () => {
    return (
        <>
            <div className={s.contactsTitle}>Contact <span className={s.contactsPush}>25</span></div>
            <div>
                <ContactContainer/>
            </div>
        </>
    );
};

export default Contacts;
