import postsReducer from "./posts-reducer";
import chatReducer from "./chat-reducer";
import leftFriendsReducer from "./left-friends-reducer";
import friend1 from "../cons/friends/friend1.png";
import {v1} from "uuid";
import friend2 from "../cons/friends/friend2.png";
import friend3 from "../cons/friends/friend3.png";
import ava from "../cons/ava.png";
import dots from "../cons/icons/dots.png";
import photo1 from "../cons/posts/posts-photo-1.jpeg";
import photo2 from "../cons/posts/posts-photo-2.jpeg";
import photo3 from "../cons/posts/posts-photo-3.jpeg";
import photo4 from "../cons/posts/posts-photo-4.jpeg";
import friend4 from "../cons/friends/friend4.png";
import friend5 from "../cons/friends/friend5.png";
import friend6 from "../cons/friends/friend6.png";
import friend7 from "../cons/friends/friend7.png";
import me from "../cons/ava.png";

let _Store:StoreType = {
    _state: {
        navSidebar: {
            friends: [
                {avatar: friend1, name: 'Noora Hayes', id: v1(), city: "New York"},
                {avatar: friend2, name: 'Edward sarte', id: v1(),  city: "Paris"},
                {avatar: friend3, name: 'Emily Endresen', id: v1(),  city: "Los Angeles"},
            ]
        },
        dialogsPage: {
            users: [
                {name: 'Mike', id: v1(), ava: friend4},
                {name: 'Lisa', id: v1(), ava: friend5},
                {name: 'Emily Martin', id: v1(), ava: friend6},
                {name: 'Lucky', id: v1(), ava: friend1},
                {name: 'Jacky Swarbe', id: v1(), ava: friend7},
            ],
            usersDialogs: [
                {id: v1(), name: 'Lisa', text: 'Hello', time: 22.14, ava: friend5},
                {id: v1(), name: 'Me', text: 'How are you?', time: 22.24, ava: me},
                {id: v1(), name: 'Lisa', text: 'I love you', time: 22.34, ava: friend5},
                {id: v1(), name: 'Me', text: 'Love you 2', time: 22.44, ava: me}
            ],
            newMessageText: " ",
        },
        profilePage: {
            posts: [
                {id: v1(), ava,dots,photo1,photo2,photo3,photo4, message: 'I find a new Collection', likes: 22},
                {id: v1(), ava,dots,photo1,photo2,photo3,photo4, message: 'Hi! It\'s my first post!', likes: 13}
            ],
            newPostText: " ",
        }
    },
    _callSubscriber(_state: StateType) {
    },
    getState() {
        return this._state
    },
    subscribe(observer: (_state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        this._state.profilePage = postsReducer(this._state.profilePage, action)
        this._state.dialogsPage = chatReducer(this._state.dialogsPage, action)
        this._state.navSidebar = leftFriendsReducer(this._state.navSidebar, action)
        this._callSubscriber(this._state)
         if (action.type === "ADD-POST") {
             const newPost = {
                 id: v1(),
                 message: this._state.dialogsPage.newMessageText,
                 likes: 5,
                 ava, dots,photo1,photo2,photo3,photo4
             }
             this._state.profilePage.posts = [newPost, ...this._state.profilePage.posts]
             this._state.profilePage.newPostText = ""
             this._callSubscriber(this._state)
         } else if (action.type === "UPDATE-NEW-TEXT") {
             this._state.profilePage.newPostText = action.newText
             this._callSubscriber(this._state)
         } else if (action.type === "ADD-MESSAGE") {
             const newMessage = {
                 id: v1(),
                 name: "me",
                 text: this._state.dialogsPage.newMessageText,
                 time: 22.45,
                 ava: me
             }
             this._state.dialogsPage.usersDialogs.push(newMessage)
             this._state.dialogsPage.newMessageText = " "
             this._callSubscriber(this._state)
         } else if (action.type === "UPDATE-NEW-MESSAGE") {
             this._state.dialogsPage.newMessageText = action.newText
             this._callSubscriber(this._state)
         }
    },
       addMessage() {
           const newMessage = {
               id: v1(),
               name: "me",
               text: this._state.dialogsPage.newMessageText,
               time: 22.45,
               ava: me
           }
           this._state.dialogsPage.usersDialogs = [ newMessage, ...this._state.dialogsPage.usersDialogs]
           this._state.dialogsPage.newMessageText = " "
           this._callSubscriber(this._state)
       },
       addPost() {
           const newPost = {
               id: v1(),
               message: this._state.profilePage.newPostText,
               likes: 5,
               ava, dots,photo1,photo2,photo3,photo4
           }
           this._state.profilePage.posts.push(newPost)
           this._state.profilePage.newPostText = " "
           this._callSubscriber(this._state)
       },
     updateNewPost(newText: string) {
         this._state.profilePage.newPostText = newText
         this._callSubscriber(this._state)
     },
     updateNewMessage(newText: string) {
         this._state.dialogsPage.newMessageText = newText
         this._callSubscriber(this._state)
     },
}

export type ActionType = {
    type: string,
    newText: string
}
export type UpdateNewPostType = (e: string) => void
export type StoreType= {
    _state: { navSidebar: NavSidebarType
        dialogsPage: DialogsPageType
        profilePage: ProfilePageType }
    _callSubscriber: (_state: StateType) => void
    getState: () => void
    dispatch: (action: ActionType) => void
    subscribe: (observer: (_state: StateType) => void) => void
    addMessage: () => void
    addPost: () => void
    updateNewPost: (newText: string) => void
    updateNewMessage: (newText: string) => void
}
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
    avatar: string
    city: string
}
export type DialogsPageType = {
    users: Array<UsersType>
    usersDialogs: Array<UsersDialogsType>
    newMessageText: string
}
export type UsersType = {
    name: string
    id: string
    ava: string
}
export type UsersDialogsType = {
    name: string
    text: string
    time: number
    id: string
    ava: string
}
export type PostsType = {
    id: string
    message: string
    likes: number
    ava: string
    dots: string
    photo1: string
    photo2: string
    photo3: string
    photo4: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}



