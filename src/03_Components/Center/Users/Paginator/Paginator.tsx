import React from 'react';
import s from "./Paginator.module.css";

type UsersPaginatorType = {
    usersCount: number
    pageSize: number
    onPageChanged: (n: number) => void
    currentPage: number
}
const UsersPaginator: React.FC<UsersPaginatorType> = ({
                                                          usersCount, pageSize,
                                                          onPageChanged,
                                                          currentPage
                                                      }) => {
    let pagesCount = Math.ceil(usersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            {pagesCount && <div className={s.pages}>
                {pages.map((e) => {
                    if (e < 15) {
                        return <span key={Math.random()} onClick={() => onPageChanged(e)}
                                     className={currentPage === e ? s.selectedPage : ""}>{e}</span>
                    }
                })}
            </div>
            }
        </>
    )
};

export default UsersPaginator;