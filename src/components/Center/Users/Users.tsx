import React from "react";
import s from "./Users.module.css";
import incognito from "../../../cons/incognito.png";
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";
import {NavLink} from "react-router-dom";
import {UsersAPI} from "../../../Api/api";
import {UserType} from "../../../Redux/users-reducer";

type UsersType = {
    usersCount: number
    pageSize: number
    users: UserType[]
    currentPage: number
    unfollow: (id: number) => void
    follow: (id: number) => void
    onPageChanged: (n: number) => void
}

const Users: React.FC<UsersType> = (props) => {

    const {
        usersCount,
        pageSize,
        users,
        currentPage,
        unfollow,
        follow,
        onPageChanged,
    } = props

    let pagesCount = Math.ceil(usersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const unfollowHandler = (id: number) => {
        UsersAPI.unfollowUser(id).then(response => {
            if (response.data.resultCode === 0) {
                return unfollow(id)
            }
        })
    }

    const followHandler = (id: number) => {
        UsersAPI.followUser(id).then(response => {
            if (response.data.resultCode === 0) {
                return follow(id)
            }
        })

    }
    return (
        <div className={s.users__block}>
            {pagesCount ? <div className={s.pages}>
                { pages.map((e) => {
                    if (e < 15) {
                        return <span  key={Math.random()} onClick={() => onPageChanged(e)}
                                      className={currentPage === e ? s.selectedPage : ""}>{e}</span>
                    }
                })}
            </div> : null}
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
                                ? <UniversalBtn callback={()=>unfollowHandler(el.id)} name={"Unfollow"}/>
                                : <UniversalBtn callback={()=>followHandler(el.id)} name={"Follow"}/>}
                        </div>
                    )
                })}

            </div>
            <UniversalBtn className={s.btn__more} name={"Add More"} callback={() => {
            }}/>
        </div>
    );
};

export default Users;
