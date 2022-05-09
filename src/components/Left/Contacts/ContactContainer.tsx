import React from 'react';
import Contact from "./Contact";
import {StateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        friendsBlock: state.LeftFriends
    }
}
const ContactContainer = connect(mapStateToProps)(Contact)
export default ContactContainer;
