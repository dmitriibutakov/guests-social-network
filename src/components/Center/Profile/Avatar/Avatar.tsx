import React from 'react';
import s from "../Profile.module.scss";
import {images} from "../../../../03_commons/images/dir/icons";
import InputFile from "../../../../03_commons/common_components/InputFile/InputFile";
import {ProfileURLType} from "../../../../02_BLL/profile-reducer";
import {useAppSelector} from "../../../../02_BLL/store";

type AvatarPropsType = {
    profile: ProfileURLType
    profileId: number
    changeAvatar: (avatar: string) => void
}
const Avatar: React.FC<AvatarPropsType> = ({profile, profileId, changeAvatar}) => {
    const theme = useAppSelector(state => state.app.darkMode)
    const blockTheme = theme ? s.user__image_dark : s.user__image
    return (
        <div className={blockTheme}>
            <img src={profile.photos.small || images.incognito} alt="avatar"/>
            {profile.userId === profileId && <button className={s.btn}>
                <InputFile accept={"image/*"} callback={changeAvatar}>add</InputFile></button>}</div>
    )
};

export default Avatar;