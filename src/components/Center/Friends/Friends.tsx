import React from "react";
import s from "./Friends.module.css";
import memo from "../../../cons/Memoji/Memoji-03.png";
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";
import {FriendType} from "../../../Redux/friends-reducer";

type FriendsType = {
    usersCount: number
    pageSize: number
    friends: FriendType[]
    currentPage: number
    unfollow: (id: string) => void
    follow: (id: string) => void
    onPageChanged: (n: number) => void
}


const Friends: React.FC<FriendsType> = (props) => {

    const {
        usersCount,
        pageSize,
        friends,
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
    return (
        <div className={s.friends__block}>
            <div>
                {/* eslint-disable-next-line array-callback-return */}
                {pages.map((e) => {
                    if (e < 15) {
                        return <span onClick={() => onPageChanged(e)}
                                     className={currentPage === e ? s.selectedPage : ""}>{e}</span>
                    }

                })}
            </div>
            <div className={s.friends}>
                {friends.map(el => {
                    const unfollowHandler = () => unfollow(el.id)
                    const followHandler = () => follow(el.id)
                    return (
                        <div className={s.friend__block} key={el.id}>
                            <div className={s.avatar}>
                                <img src={el.ava != null ? el.ava : memo} alt="avatar"/>
                            </div>

                            <h3 className={s.name}>{el.name}</h3>
                            <span className={s.status}>{el.status}</span>
                            <p className={s.location}>
                                <span>{"el.location.country"}</span>, <span>{"el.location.city"}</span>
                            </p>
                            {el.followed
                                ? <UniversalBtn callback={unfollowHandler} name={"Follow"}/>
                                : <UniversalBtn callback={followHandler} name={"Unfollow"}/>}
                        </div>
                    )
                })}

            </div>
            <UniversalBtn className={s.btn__more} name={"Add More"} callback={() => {
            }}/>
        </div>
    );
};

export default Friends;
