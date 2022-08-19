import React from 'react';
import s from "./Profile.module.scss"
import {ProfileURLType} from "../../../02_BLL/profile-reducer";
import Status from "./Status";
import {images} from '../../../03_commons/images/dir/icons';
import Avatar from "./Avatar/Avatar";
import {useAppSelector} from "../../../02_BLL/store";

type ProfileComponentType = {
    profile: ProfileURLType
    updateStatus: (status: string) => void
    updatePhotos: (photos: any) => void
    status: string
    profileId: number
}
const Profile: React.FC<ProfileComponentType> = ({
                                                     profile,
                                                     status,
                                                     updateStatus,
                                                     updatePhotos,
                                                     profileId
                                                 }) => {
    const theme = useAppSelector(state => state.app.darkMode)
    return (
        <div className={s.body}>
            <div className={s.cover}>
                <img src={images.wallpaperImg} alt="cover"/>
            </div>
            <div className={theme ? s.user__dark : s.user}>
                <div className={s.avatar__status}>
                <Avatar profile={profile} profileId={profileId} changeAvatar={updatePhotos}/>
                <span>click for change status</span><Status status={status} updateStatus={updateStatus}/>
                </div>
                <div className={s.user__block}><span>Name:</span><h1
                    className={s.user__name}>{profile.fullName || "incognito"}</h1></div>
                <div className={s.user__block}><span>Employment:</span><div
                    className={theme ? s.user__lookingJob_text_dark
                        : s.user__lookingJob_text}>{profile.lookingForAJob ? "I'm working in" : "I'm not working in yet"}</div>
                </div></div>
        </div>
    );
};

export default Profile;
