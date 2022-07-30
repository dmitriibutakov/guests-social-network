import React from "react";
import s from "./Users.module.css";
import incognito from "../../../Images/incognito.png";
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../BLL/users-reducer";

type UsersType = {
    usersCount: number
    pageSize: number
    users: UserType[]
    currentPage: number
    onPageChanged: (n: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: React.FC<UsersType> = (props) => {

    const {
        usersCount, pageSize,
        users, currentPage,
        onPageChanged,
        followingInProgress,
        follow, unfollow
    } = props

    let pagesCount = Math.ceil(usersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const arrSome = (userId: number) => followingInProgress.some(id => id === userId)
    return (
        <div className={s.users__block}>
            {pagesCount && <div className={s.pages}>
                {pages.map((e) => {
                    if (e < 15) {
                        return <span  key={Math.random()} onClick={() => onPageChanged(e)}
                                      className={currentPage === e ? s.selectedPage : ""}>{e}</span>
                    }
                })}
            </div>}
            <div className={s.users}>
                {users.map(el => {
                    return (
                        <div className={s.user__block} key={el.id}>
                            <div className={s.avatar}>
                                <NavLink to={"/profile/" + el.id}>
                                <img className={s.avatar__img} src={el.ava != null ? el.ava : incognito} alt="avatar"/>
                                </NavLink>
                            </div>

                            <h3 className={s.name}>{el.name}</h3>
                            <span className={s.status}>{el.status}</span>
                            <p className={s.location}>
                                <span>{"el.location.country"}</span>, <span>{"el.location.city"}</span>
                            </p>
                            {el.followed
                                ? <UniversalBtn disable={arrSome(el.id)} callback={()=>unfollow(el.id)} name={"Unfollow"}/>
                                : <UniversalBtn disable={arrSome(el.id)} callback={()=>follow(el.id)} name={"Follow"}/>}
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default Users;
