import React, { useState, useEffect } from 'react'
export const ApiContext = React.createContext()

const initialState = {
    data: [],
    id: null,
    currentPage: 1,
    currentDataCar:[],
    dataPage: 7,
    currentWinnersPage: 1,
    dataWinnersPage: 10,
    winners: [],
    velosity: {}
}

export default function ContextProvider({ children }) {
    const [state, setState] = useState(initialState)


    useEffect(() => {
        getCar()
    }, [])

    function getCar() {
        fetch("http://localhost:3000/garage")
            .then(data => data.json())
            .then(res => setState({
                ...state,
                data: res
            }))
    }
    async function getVelocity(id, status) {
        let url = `http://localhost:3000/engine?id=${id}&status=${status}`;
        let rrr = await fetch(url);
        let hhfg = await rrr.json();
        return hhfg;
    }

    async function putWinners(id, wins, timePassed, color) {
        const data = {
            id: id,
            wins: wins,
            time: timePassed,
            color: color,
            count: 1
        }
        await fetch(`http://localhost:3000/winners?id=${id}`)
            .then(data => data.json())
            .then(res => {
                if (res.length !== 0) {
                    fetch(`http://localhost:3000/winners/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                } else {
                    fetch(`http://localhost:3000/winners`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                }
            })
    }

    async function getWinners() {

        await fetch("http://localhost:3000/winners")

            .then(data => data.json())
            .then(res => setState({
                ...state,
                winners: res
            }))
    }
    return (
        <ApiContext.Provider value={{ state, setState, getCar, getVelocity, putWinners, getWinners }}>
            {children}
        </ApiContext.Provider>
    )
}