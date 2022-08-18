import React from 'react';
import s from "./Profile.module.css"
import {ProfileURLType} from "../../../02_BLL/profile-reducer";
import Status from "./Status";
import {images} from '../../../03_commons/images/dir/icons';
import InputFile from "../../../03_commons/common_components/InputFile/InputFile";
import Cover from "./Cover/Cover";
import Avatar from "./Avatar/Avatar";

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
    return (
        <div className={s.body}>
            <Cover profile={profile} profileId={profileId} changeCover={updatePhotos}/>
            <div className={s.user}>
                <Avatar profile={profile} profileId={profileId} changeAvatar={updatePhotos}/>
                <h1 className={s.user__name}>{profile.fullName || "incognito"}</h1>
                <Status status={status} updateStatus={updateStatus}/>
                <p className={s.user__aboutMe}>{profile.aboutMe || "about me"}</p>
                <img className={s.user__lookingJob} src={profile.lookingForAJob ? images.yesImg : images.noImg}
                     alt="lookingJob"/>
                <div
                    className={s.user__lookingJob_text}>{profile.lookingForAJob ? "Yeah! I'm looking for a job" : "I'm not looking for a job"}</div>
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
