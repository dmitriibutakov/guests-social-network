import React from 'react';
import s from "./Friends.module.css"
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";
import {v1} from "uuid";
import friend4 from "../../../cons/friends/friend4.png";
import friend5 from "../../../cons/friends/friend5.png";
import friend6 from "../../../cons/friends/friend6.png";
import friend1 from "../../../cons/friends/friend1.png";
import friend7 from "../../../cons/friends/friend7.png";
import friend8 from "../../../cons/friends/friend8.png";
import friend10 from "../../../cons/friends/friend10.png";
import friend9 from "../../../cons/friends/friend9.png";
import friend2 from "../../../cons/friends/friend1.png";
import memo from "../../../cons/Memoji/Memoji-03.png"
import {FriendsPropsType} from "./FriendsContainer";
import axios from "axios";

const Friends: React.FC<FriendsPropsType> = (props) => {
    const getUsers = () => {
        if (props.friendsBlock.friends.length < 1) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setFriends(response.data.items)
            })
    }

    }
    return (
        <div className={s.friends__block}>
            <div className={s.friends}>
                {props.friendsBlock.friends.map(el => {
                    const unfollowHandler = () => {
                        props.unfollow(el.id)
                    }
                    const followHandler = () => {
                        props.follow(el.id)
                    }
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
            <UniversalBtn className={s.btn__more} name={"Add More"} callback={getUsers}/>
        </div>
    );
};

export default Friends;
