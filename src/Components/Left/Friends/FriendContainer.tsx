import {connect} from "react-redux";
import Friend from "./Friend";
import {AppStateType} from "../../../BLL/store";
import {MenuFriendsType} from "../../../BLL/menu-friends-reducer";

type mapStateToPropsType = {
    friends: MenuFriendsType
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: state.MenuFriends
    }
}
export type FriendPropsType = mapStateToPropsType
const FriendContainer = connect(mapStateToProps)(Friend)
export default FriendContainer;
