import React from 'react';
import StoreContext from '../../../StoreContext';
import Contact from "./Contact";

const ContactContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => (

                store.getState().LeftFriends.friends.map((el) => <Contact key={el.id} avatar={el.avatar} city={el.city} name={el.name}
                                                               id={el.id}/>)
            )}
        </StoreContext.Consumer>
    );
};

export default ContactContainer;
