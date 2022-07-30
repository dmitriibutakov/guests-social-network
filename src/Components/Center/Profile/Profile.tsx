import React from 'react';
import s from "./Profile.module.css"
import {ProfileURLType} from "../../../BLL/profile-reducer";
import Preloader from "../../UniversalComponents/Preloader/Preloader";
import {githubImg, incognito, instagramImg, noImg, twitterImg, wallpaperImg, yesImg} from "../../../Images/dir/icons";
import Status from "./Status";

type ProfileComponentType = {
    profile: ProfileURLType
    updateStatus: (status: string) => void
    status: string
}
const Profile: React.FC<ProfileComponentType> = ({profile, status,updateStatus}) => {
    if (!profile.userId) {
        return (<div className={s.body}><Preloader/></div>)
    } else return (
        <div className={s.body}>
            <div className={s.cover}><img src={profile.photos.large || wallpaperImg} alt="cover"/></div>
            <div className={s.user}>
                <div className={s.user__image}>
                    <img src={profile.photos.small || incognito} alt="avatar"/>
                </div>
                <h1 className={s.user__name}>{profile.fullName || "incognito"}</h1>
                <Status status={status} updateStatus={updateStatus}/>
                <p className={s.user__aboutMe}>{profile.aboutMe || "about me"}</p>
                <img className={s.user__lookingJob} src={profile.lookingForAJob ? yesImg : noImg} alt="lookingJob"/>
                <div
                    className={s.user__lookingJob_text}>{profile.lookingForAJob ? "Yeah! I'm looking for a job" : "I'm not looking for a job"}</div>

            </div>
            <div className={s.socials}>
                <div className={s.social}><img src={githubImg} alt="github"/></div>
                <div className={s.social}><img src={instagramImg} alt="instagram"/></div>
                <div className={s.social}><img src={twitterImg} alt="twitter"/></div>
            </div>
        </div>
    );
};

export default Profile;
