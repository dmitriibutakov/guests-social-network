import React from 'react';
import s from "../Profile.module.css";
import {images} from "../../../../03_commons/images/dir/icons";
import InputFile from "../../../../03_commons/common_components/InputFile/InputFile";
import {ProfileURLType} from "../../../../02_BLL/profile-reducer";

type CoverPropsType = {
    profile: ProfileURLType
    profileId: number
    changeCover: (photos: any) => void
}
const Cover:React.FC<CoverPropsType> = ({profile, profileId, changeCover}) => {
    return (
        <div className={s.cover}><img src={profile.photos.large || images.wallpaperImg} alt="cover"/>
            {profile.userId === profileId && <InputFile callback={changeCover}/>}</div>
    );
};

export default Cover;