import React from 'react'

export const Pagination = ({pageQuantity, activePage, goToPage}) => {
    const pageNums = [...Array(pageQuantity).keys()];

    if (activePage > 2 && activePage < pageQuantity - 2 && pageQuantity > 6) {
        pageNums.splice(1, activePage-3, -1);
        pageNums.splice(5, pageNums.length-6, -1);
    } else if (pageQuantity > 6) {
        pageNums.splice(3, pageQuantity - 6, -1);
    }

    const pages = pageNums.map((el, i) => {
        if (el !== -1) {
            return <li key={i + 1} className={el + 1 === activePage ? 'page-item active' : 'page-item'}><a
                className="page-link" onClick={() => {
                goToPage(el + 1)
            }} href="#">{el + 1}</a></li>
        } else {
            return <li key={i + 1} className='page-item disabled'><a
                className="page-link" href="#">...</a></li>
        }

    })


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={activePage <= 1 ? "page-item disabled" : "page-item"}>
                    <a className="page-link" aria-disabled={activePage <= 1 ? "true" : "false"} onClick={() => {
                        goToPage(activePage - 1)
                    }} href="#">Previous</a>
                </li>
                {pages}
                <li className={activePage >= pageQuantity ? "page-item disabled" : "page-item"}>
                    <a className="page-link" aria-disabled={activePage >= pageQuantity ? "true" : "false"}
                       onClick={() => {
                           goToPage(activePage + 1)
                       }} href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}