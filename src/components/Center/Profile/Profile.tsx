import React from 'react';
import s from "./Profile.module.css"
import cover1 from "../../../cons/right/cover1.png"
import cover2 from "../../../cons/right/cover2.png"
import cover3 from "../../../cons/right/cover3.png"
import story1 from "../../../cons/friends/friend3.png";
import story2 from "../../../cons/friends/friend6.png";
import story3 from "../../../cons/friends/friend8.png";
import story4 from "../../../cons/friends/friend2.png";
import {ProfileURLType} from "../../../Redux/profile-reducer";
import Preloader from "../../UniversalComponents/Preloader/Preloader";
type ProfileComponentType = {
    profile: ProfileURLType
}
const Profile:React.FC<ProfileComponentType> = ({profile}) => {
  if (profile.userId === 0) {
      return <Preloader/>
  } else return (
        <div className={s.body}>
            <div className={s.covers}>
                <div className={s.cover}><img src={cover1} alt="cover"/></div>
                <div className={s.cover}><img src={cover2} alt="cover"/></div>
                <div className={s.cover}><img src={cover3} alt="cover"/></div>
            </div>
            <div className={s.user}>
                <div className={s.block__image}>
                    <img src={profile.photos.small} alt="avatar"/>
                </div>
                <h1 className={s.user__name}>{profile.fullName}</h1>
                <p className={s.user__city}>{profile.aboutMe || "about me"}</p>
            </div>
            <div className={s.friends}>
                <p className={s.friends__count}>10 mutual friend</p>
                <div className={s.friends__list}>
                    <div className={s.friends__links}>
                        <div className={s.friend}>
                            <img className={s.friend__img} src={story1} alt="story"/>
                        </div>
                        <div className={s.friend}>
                            <img className={s.friend__img} src={story2} alt="story"/>
                        </div>
                        <div className={s.friend}>
                            <img className={s.friend__img} src={story3} alt="story"/>
                        </div>
                        <div className={s.friend}>
                            <img className={s.friend__img} src={story4} alt="story"/>
                        </div>
                        <span className={s.friends__count_add}>+6</span>
                    </div>

                </div>
            </div>
            <div className={s.counts}>
                <div className={s.counts__block}>
                    <div className={s.counts__number}>
                        980
                    </div>
                    <div className={s.counts__title}>Friends</div>
                </div>
                <div className={s.counts__block}>
                    <div className={s.counts__number}>
                        50
                    </div>
                    <div className={s.counts__title}>Posts</div>
                </div>
                <div className={s.counts__block}>
                    <div className={s.counts__number}>
                        20
                    </div>
                    <div className={s.counts__title}>Tags</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
