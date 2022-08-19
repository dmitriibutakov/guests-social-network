import React from 'react';
import s from "./Profile.module.scss"
import {ProfileURLType} from "../../../02_BLL/profile-reducer";
import Status from "./Status";
import {images} from '../../../03_commons/images/dir/icons';
import Cover from "./Cover/Cover";
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
            <Cover profile={profile} profileId={profileId} changeCover={updatePhotos}/>
            <div className={theme ? s.user__dark : s.user}>
                <Avatar profile={profile} profileId={profileId} changeAvatar={updatePhotos}/>
                <h1 className={s.user__name}>{profile.fullName || "incognito"}</h1>
                <Status status={status} updateStatus={updateStatus}/>
                <p className={theme ? s.user__aboutMe_dark : s.user__aboutMe}>{profile.aboutMe || "about me"}</p>
                <img className={s.user__lookingJob_img} src={profile.lookingForAJob ? images.yesImg : images.noImg}
                     alt="lookingJob"/>
                <div
                    className={theme ? s.user__lookingJob_text_dark
                        : s.user__lookingJob_text}>{profile.lookingForAJob ? "I'm working in" : "I'm not working in yet"}</div>
            </div>
            <div className={s.socials}>
                <div className={s.social}><img src={images.githubImg} alt="github"/></div>
                <div className={s.social}><img src={images.instagramImg} alt="instagram"/></div>
                <div className={s.social}><img src={images.twitterImg} alt="twitter"/></div>
            </div>
        </div>
    );
};

export default Profile;
