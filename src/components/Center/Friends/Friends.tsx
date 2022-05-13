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
import {FriendsPropsType} from "./FriendsContainer";

const Friends: React.FC<FriendsPropsType> = (props) => {
    if (props.friendsBlock.friends.length < 1) {
        props.setFriends([
            {
                name: 'Mike',
                followed: false,
                id: v1(),
                ava: friend4,
                status: "No is possible",
                location: {city: "Roma", country: "Italy"}
            },
            {
                name: 'Lisa',
                followed: true,
                id: v1(),
                ava: friend5,
                status: "No is possible",
                location: {city: "Roma", country: "Italy"}
            },
            {
                name: 'Emily Martin',
                followed: true,
                id: v1(),
                ava: friend6,
                status: "No is possible",
                location: {city: "Roma", country: "Italy"}
            },
            {
                name: 'Lucky',
                followed: false,
                id: v1(),
                ava: friend1,
                status: "No is possible",
                location: {city: "Roma", country: "Italy"}
            },
            {
                name: 'Jacky Swarbe',
                followed: true,
                id: v1(),
                ava: friend7,
                status: "No is possible",
                location: {city: "Roma", country: "Italy"}
            },
            {
                name: 'Swally Murren',
                followed: false,
                id: v1(),
                ava: friend8,
                status: "No is possible",
                location: {city: "Roma", country: "Italy"}
            },
            {
                name: 'Muller Dwab',
                followed: true,
                id: v1(),
                ava: friend10,
                status: "No is possible",
                location: {city: "Roma", country: "Italy"}
            },
            {
                name: 'Martin Haris',
                followed: false,
                id: v1(),
                ava: friend9,
                status: "No is possible",
                location: {city: "Roma", country: "Italy"}
            },
            {
                name: 'Slouy Byter',
                followed: true,
                id: v1(),
                ava: friend2,
                status: "No is possible",
                location: {city: "Roma", country: "Italy"}
            }])
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
                                <img src={el.ava} alt="avatar"/>
                            </div>

                            <h3 className={s.name}>{el.name}</h3>
                            <span className={s.status}>{el.status}</span>
                            <p className={s.location}>
                                <span>{el.location.country}</span>, <span>{el.location.city}</span>
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
