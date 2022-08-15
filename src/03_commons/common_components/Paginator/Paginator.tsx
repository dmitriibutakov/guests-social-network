import React, {useState} from 'react';
import s from "./Paginator.module.css";
import UniversalBtn from "../UniversalBtn/UniversalBtn";
import {images} from '../../images/dir/icons';

type UsersPaginatorType = {
    usersCount: number
    pageSize: number
    onPageChanged: (n: number) => void
    currentPage: number
    portionSize?: number
}
const UsersPaginator: React.FC<UsersPaginatorType> = ({
                                                          usersCount, pageSize,
                                                          onPageChanged,
                                                          currentPage, portionSize = 5
                                                      }) => {
    const pagesCount = Math.ceil(usersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize

    return (
        <div className={s.paginator__body}>
            <button className={s.paginator__btn_left} disabled={portionNumber < 1}
                    onClick={() => setPortionNumber(portionNumber - 1)}>
                <img src={images.previousImg} alt="previous"/>
            </button>
            <div className={s.paginator}>
                {pages.filter(e => e >= leftPortionNumber && e <= rightPortionNumber).map(e => {
                    return <span key={Math.random()} onClick={() => onPageChanged(e)}
                                 className={currentPage === e ? s.selectedPage : ""}>{e}</span>
                })}
                <button className={s.paginator__btn_right} disabled={portionCount < portionNumber}
                        onClick={() => setPortionNumber(portionNumber + 1)}>
                    <img src={images.nextImg} alt="next"/>
                </button>
            </div>
        </div>)
}

export default UsersPaginator;