import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar'
import { ApiContext } from "../../context/Context";
import './Winners.scss'
import WinnerItem from './WinnerItem';
import PaginationWinners from '../Pagination/PaginationWinners';
import Spinner from '../Spinner';

export default function Winners() {
    const [number, setNumber] = useState(false)

    const context = useContext(ApiContext);

    useEffect(() => {
        context.getWinners()
        console.log('useEffect')
    }, [])
    // useEffect(() => {
    //     context.putWinners()
    //     console.log('useEffect')
    // }, [])

    function sortNumber() {
        setNumber(!number)
    }
    function sortTime() {
        setNumber(!number)
    }
    function sortWinners(a, b) {
        if (a.time > b.time) {
            return 1
        } else { return -1 }
    }
    function sortWinners2(a, b) {
        if (a.time < b.time) {
            return -1
        } else { return -1 }
    }

    if (!context.state.winners) {
        return <Spinner />
    }

    const lastDataIndex = context.state.currentWinnersPage * context.state.dataWinnersPage;
    const allPages = Math.ceil(context.state.winners.length / context.state.dataWinnersPage);
    const firstDataIndex = lastDataIndex - context.state.dataWinnersPage;
    const currentData = context.state.winners.slice(firstDataIndex, lastDataIndex);
    const paginate = pageNumber => context.setState({
        ...context.state,
        currentWinnersPage: pageNumber
    })

    const nextPage = () => {
        if (context.state.currentWinnersPage === allPages) {
            return
        } else {
            context.setState({
                ...context.state,
                currentWinnersPage: context.state.currentWinnersPage + 1
            })
        }
    }

    function prevPage() {
        if (context.state.currentWinnersPage === 1) {
            return
        } else {
            context.setState({
                ...context.state,
                currentWinnersPage: context.state.currentWinnersPage - 1
            })
        }

    }

    return (
        <div  >
            <Navbar isActiveLinkWinners={true} />
            <h3>Winners ({context.state.winners.length})</h3>
            <div className='winners-row'>

                <div className='winners-car'>Car</div>
                <div className='winners-name'>Name</div>
                <div className='winners-win'>Wins</div>
                <div className='winners-time' onClick={sortTime}>Time</div>
            </div>
            <ol className='winners-container'>
                {currentData.sort(number ? sortWinners : sortWinners2).map((el, i) => {
                    return <ol><WinnerItem key={el.id} {...el} i={i} /></ol>
                })
                }
            </ol>
            <PaginationWinners paginate={paginate} nextPage={nextPage} prevPage={prevPage} allPages={allPages} />
        </div>
    )
}
