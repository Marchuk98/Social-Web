import s from './Paginator.module.css'
import React from "react";

type PaginatorPropsType = {
    currentPageUserPage:number
    onPageChanged:(pageNumber: number) => void
    totalUserCountUserPage: number
    pageSizeUserPage: number
}

export const Paginator:React.FC<PaginatorPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUserCountUserPage / props.pageSizeUserPage)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {
                pages.map((p, index) =>
                    <span key={index} className={props.currentPageUserPage === p ? s.selectedPage : ""}
                          onClick={(e) => {
                              props.onPageChanged(p)
                          }}>
                            {p}</span>
                )}
        </div>
    )
}