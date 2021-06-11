import React, { useContext } from 'react'
import { ApiContext } from '../../context/Context';
import './Pagination.scss'


export default function Pagination({ paginate, nextPage, prevPage, allPages }) {
    const context = useContext(ApiContext);


    const pageNamber = [];

    for (let i = 1; i <= allPages; i++) {
        pageNamber.push(i)

    }
    return (
        <div>
            <h4>Page № {context.state.currentPage}</h4>
            <div className='pagination-container'>
            {
                pageNamber.map((num, i) => <div className='pagination-num' key={i} onClick={() => paginate(num)}>{num}</div>)
            }
            </div>
            <div className='pagination-buttons'>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}


