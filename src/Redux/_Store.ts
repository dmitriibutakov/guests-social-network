import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {v1} from "uuid";
//
// let _Store = {
//     _state: {
//         navSidebar: {
//             friends: [
//                 {name: 'Alexey', id: 1},
//                 {name: 'Evgenia', id: 2},
//                 {name: 'Maksim', id: 3},
//                 {name: 'Tatiana', id: 4},
//                 {name: 'Olga', id: 5}
//             ]
//         },
//         dialogsPage: {
//             users: [
//                 {name: 'Alexey', id: v1()},
//                 {name: 'Evgenia', id: v1()},
//                 {name: 'Maksim', id: v1()},
//                 {name: 'Tatiana', id: v1()},
//                 {name: 'Olga', id: v1()}
//             ],
//             usersDialogs: [
//                 {name: 'Evgenia', text: 'Hello', time: 22.14},
//                 {name: 'Me', text: 'How are you?', time: 22.24},
//                 {name: 'Evgenia', text: 'I love you', time: 22.34},
//                 {name: 'Me', text: 'Love you 2', time: 22.44}
//             ],
//             newMessageText: " ",
//         },
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'How are you?! You are Welcome!', likes: 22},
//                 {id: v1(), message: 'Hi! It\'s my first post!', likes: 13}
//             ],
//             newPostText: " ",
//         }
//     },
//     _callSubscriber(_state: StateType) {
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: (_state: StateType) => void) {
//         this._callSubscriber = observer
//     },
//     dispatch(action: ActionType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.navSidebar = sidebarReducer(this._state.navSidebar, action)
//         this._callSubscriber(this._state)
//         /* if (action.type === "ADD-POST") {
//              let newPost = {
//                  id: 0,
//                  message: this._state.profilePage.newPostText,
//                  likes: 5
//              }
//              this._state.profilePage.posts.push(newPost)
//              this._state.profilePage.newPostText = " "
//              this._callSubscriber(this._state)
//          } else if (action.type === "UPDATE-NEW-TEXT") {
//              this._state.profilePage.newPostText = action.newText
//              this._callSubscriber(this._state)
//          } else if (action.type === "ADD-MESSAGE") {
//              let newMessage = {
//                  name: "me",
//                  text: this._state.dialogsPage.newMessageText,
//                  time: 22.45
//              }
//              this._state.dialogsPage.usersDialogs.push(newMessage)
//              this._state.dialogsPage.newMessageText = " "
//              this._callSubscriber(this._state)
//          } else if (action.type === "UPDATE-NEW-MESSAGE") {
//              this._state.dialogsPage.newMessageText = action.newText
//              this._callSubscriber(this._state)
//          }*/
//     }
//     /*   addMessage() {
//            let newMessage = {
//                name: "me",
//                text: this._state.dialogsPage.newMessageText,
//                time: 23.45
//            }
//            this._state.dialogsPage.usersDialogs.push(newMessage)
//            this._state.dialogsPage.newMessageText = " "
//            this._callSubscriber(this._state)
//        },*/
//     /*   addPost() {
//            let newPost = {
//                id: 0,
//                message: this._state.profilePage.newPostText,
//                likes: 5
//            }
//            this._state.profilePage.posts.push(newPost)
//            this._state.profilePage.newPostText = " "
//            this._callSubscriber(this._state)
//        },*/
//     /* updateNewPost(newText: string) {
//          this._state.profilePage.newPostText = newText
//          this._callSubscriber(this._state)
//      },
//     /!* updateNewMessage(newText: string) {
//          this._state.dialogsPage.newMessageText = newText
//          this._callSubscriber(this._state)
//      },*!/*/
// }
//
//


export type DispatchType = (action: ActionType) => void
export type ActionType = {
    type: string,
    newText: string
}
// export type AddPostType = () => void
// export type UpdateNewPostType = (e: string) => void
// export type UpdateNewMessageType = (e: string) => void
// export type AddMessageType = () => void
/*export type StoreType= {
    _state: StateType[]
    _callSubscriber: (_state: StateType) => void
    getState: () => StateType[]
    dispatch: (action: ActionType) => void
    subscribe: (observer: (_state: StateType) => void) => void
}*/
export type StateType = {
    navSidebar: NavSidebarType
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}
export type NavSidebarType = {
    friends: Array<FriendsType>
}
export type FriendsType = {
    name: string
    id: string
}
export type DialogsPageType = {
    users: Array<UsersType>
    usersDialogs: Array<UsersDialogsType>
    newMessageText: string
}
export type UsersType = {
    name: string
    id: string
}
export type UsersDialogsType = {
    name: string
    text: string
    time: number
}
export type PostsType = {
    id: string
    message: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}



