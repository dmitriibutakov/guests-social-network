import React from 'react';
import s from "./Profile.module.css"
import {ProfileURLType} from "../../../01_BLL/profile-reducer";
import Status from "./Status";
import { images } from '../../../03_commons/images/dir/icons';

type ProfileComponentType = {
    profile: ProfileURLType
    updateStatus: (status: string) => void
    status: string
}
const Profile: React.FC<ProfileComponentType> = ({profile, status,updateStatus}) => {
     return (
        <div className={s.body}>
            <div className={s.cover}><img src={profile.photos.large || images.wallpaperImg} alt="cover"/></div>
            <div className={s.user}>
                <div className={s.user__image}>
                    <img src={profile.photos.small || images.incognito} alt="avatar"/>
                </div>
                <h1 className={s.user__name}>{profile.fullName || "incognito"}</h1>
                <Status status={status} updateStatus={updateStatus}/>
                <p className={s.user__aboutMe}>{profile.aboutMe || "about me"}</p>
                <img className={s.user__lookingJob} src={profile.lookingForAJob ? images.yesImg : images.noImg} alt="lookingJob"/>
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
