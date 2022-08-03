import React from 'react';
import s from "../Users.module.css";
import {NavLink} from "react-router-dom";
import incognito from "../../../../04_Images/incognito.png";
import UniversalBtn from "../../../UniversalComponents/UniversalBtn/UniversalBtn";
import {UserType} from "../../../../01_BLL/users-reducer";

type UserPropsType = {
    id: number
    ava: string
    name: string
    status: string
    followed: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    arrSome: (id: number) => boolean
}
const User: React.FC<UserPropsType> = ({
                                           id,
                                           ava,
                                           name,
                                           status,
                                           followed,
                                           follow,
                                           unfollow,
                                           arrSome
                                       }) => {
    return (
        <div className={s.user__block} key={id}>
            <div className={s.avatar}>
                <NavLink to={"/profile/" + id}>
                    <img className={s.avatar__img} src={ava != null ? ava : incognito}
                         alt="avatar"/>
                </NavLink>
            </div>
            <h3 className={s.name}>{name}</h3>
            <span className={s.status}>{status}</span>
            <p className={s.location}>
                <span>{"el.location.country"}</span>, <span>{"el.location.city"}</span>
            </p>
            {followed
                ? <UniversalBtn disable={arrSome(id)} callback={() => unfollow(id)}
                                name={"Unfollow"}/>
                :
                <UniversalBtn disable={arrSome(id)} callback={() => follow(id)} name={"Follow"}/>}
        </div>
    )
};

export default User;