import React from "react";
import s from "./Users.module.css";
import incognito from "../../../04_Images/incognito.png";
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../01_BLL/users-reducer";
import Paginator from "./Paginator/Paginator";
import UsersPaginator from "./Paginator/Paginator";
import User from "./User/User";

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

    const arrSome = (userId: number) => followingInProgress.some(id => id === userId)
    return (
        <div className={s.users__block}>
            <UsersPaginator onPageChanged={onPageChanged}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            usersCount={usersCount}/>
            <div className={s.users}>
                {users.map(el => {
                    return (
                      <User id={el.id}
                            ava={el.ava}
                            name={el.name}
                            status={el.status}
                            followed={el.followed} follow={follow}
                      unfollow={unfollow}
                      arrSome={arrSome}/>
                    )
                })}

            </div>
        </div>
    );
};

export default Users;
