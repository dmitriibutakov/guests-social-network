import React from 'react';
import s from "./Friends.module.css"
import UniversalBtn from "../../UniversalComponents/UniversalBtn/UniversalBtn";
import memo from "../../../cons/Memoji/Memoji-03.png"
import axios from "axios";
import {FriendsPropsType} from "./FriendsContainer";

class Friends extends React.Component<FriendsPropsType> {
    // constructor(props: FriendsPropsType) {
    //     super(props);
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items)
            this.props.setUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items)
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i<=pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.friends__block}>
                <div>
                    {pages.map((e) => {
                        if (e < 15) {
                            // @ts-ignore
                            return <span onClick={()=>this.onPageChanged(e) } className={this.props.currentPage === e && s.selectedPage}>{e}</span>
                        }

                    })}
                </div>
                <div className={s.friends}>
                    {this.props.friends.map(el => {
                        const unfollowHandler = () => {
                            this.props.unfollow(el.id)
                        }
                        const followHandler = () => {
                            this.props.follow(el.id)
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
                <UniversalBtn className={s.btn__more} name={"Add More"} callback={()=> {}}/>
            </div>
        );
    }
}
export default Friends
