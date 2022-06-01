import {connect} from "react-redux";
import {MenuUsersType} from "../../../Redux/menu-users-reducer";
import Friend from "./Friend";
import {AppStateType} from "../../../Redux/store";

type mapStateToPropsType = {
    usersBlock: MenuUsersType
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersBlock: state.MenuUsers
    }
}
export type FriendPropsType = mapStateToPropsType
const FriendContainer = connect(mapStateToProps)(Friend)
export default FriendContainer;
