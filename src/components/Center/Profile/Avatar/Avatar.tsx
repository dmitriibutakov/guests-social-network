import React from 'react';
import s from "../Profile.module.css";
import {images} from "../../../../03_commons/images/dir/icons";
import InputFile from "../../../../03_commons/common_components/InputFile/InputFile";
import {ProfileURLType} from "../../../../02_BLL/profile-reducer";

type AvatarPropsType = {
    profile: ProfileURLType
    profileId: number
    changeAvatar: (avatar: any) => void
}
const Avatar: React.FC<AvatarPropsType> = ({profile, profileId, changeAvatar}) => {
    return (
        <div className={s.user__image}>
            <img src={profile.photos.small || images.incognito} alt="avatar"/>
            {profile.userId === profileId && <button className={s.btn}>
                <InputFile index={1} accept={"image/*"} callback={changeAvatar}>add</InputFile></button>}</div>
    )
};

export default Avatar;