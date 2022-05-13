import React from 'react';
import Contact from "./Contact";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {MenuUsersType} from "../../../Redux/menu-users-reducer";

type mapStateToPropsType = {
    usersBlock: MenuUsersType
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        usersBlock: state.MenuUsers
    }
}
export type ContactPropsType = mapStateToPropsType
const ContactContainer = connect(mapStateToProps)(Contact)
export default ContactContainer;
