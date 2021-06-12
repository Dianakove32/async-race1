import React, { useContext, useEffect } from 'react';
import Navbar from '../navbar/Navbar'
import { ApiContext } from "../../context/Context";
import './Winners.scss'

export default function Winners() {
    const context = useContext(ApiContext);
    useEffect(() => {
        context.getWinners()

    }, [])
    function sortWinners(a,b){

        if (a.time > b.time) {
            return 1
          } else { return -1 }
    }

    //context.getWinners()

    return (
        <div  >
         <Navbar isActiveLinkWinners={true} />
         <div className='winners-container'>
           {context.state.winners.sort(sortWinners).map(el=>{
            return <div style={{background: el.color}}  key={el.id} className='winners'>{el.wins}-{el.time/1000}</div>
         })}
        </div> </div>
    )
}
