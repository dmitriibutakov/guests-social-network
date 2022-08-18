import React from "react";
import s from "./Users.module.scss";
import {UserType} from "../../../02_BLL/users-reducer";
import UsersPaginator from "../../../03_commons/common_components/Paginator/Paginator";
import User from "./User/User";
import {useAppSelector} from "../../../02_BLL/store";

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
    const theme = useAppSelector(state => state.app.darkMode)
    const themeBlock = theme ? s.users__block_dark : s.users__block
    return (
        <div className={themeBlock}>
            <div className={s.users}>
                {users.map(el => {
                    return (
                        <User key={el.id}
                              id={el.id}
                              ava={el.ava}
                              name={el.name}
                              status={el.status}
                              followed={el.followed} follow={follow}
                              unfollow={unfollow}
                              arrSome={arrSome}/>
                    )
                })}

            </div>
            <UsersPaginator onPageChanged={onPageChanged}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            usersCount={usersCount}/>
        </div>
    );
};

export default Users;
