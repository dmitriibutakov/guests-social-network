import React from 'react';
import s from "../Users.module.scss";
import {NavLink} from "react-router-dom";
import incognito from "../../../../03_commons/images/incognito.png";
import UniversalBtn from "../../../../03_commons/common_components/UniversalBtn/UniversalBtn";
import {useAppSelector} from "../../../../02_BLL/store";

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
                                           id, ava,
                                           name, status,
                                           followed, follow,
                                           unfollow, arrSome
                                       }) => {
    const theme = useAppSelector(state => state.app.darkMode)
    const themeBlock = theme ? s.user__block_dark : s.user__block
    return (
        <div className={themeBlock} key={id}>
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
                                name={"Unfollow"}/> :
                <UniversalBtn disable={arrSome(id)} callback={() => follow(id)} name={"Follow"}/>}
        </div>
    )
};

export default User;