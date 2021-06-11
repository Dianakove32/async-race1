import React, { useState, useEffect } from 'react'
export const ApiContext = React.createContext()

const initialState={
    data:[],
    id:null,
    currentPage:1,
    dataPage:10
}

export default function ContextProvider({ children }) {
    const [state, setState] = useState(initialState)
    useEffect(() => {
        getCar()

    }, [])


 function getCar(){
          fetch("http://localhost:3000/garage")
            .then(data => data.json())
            .then(res => setState({
                ...state,
                data:res
            }))
    }
    return (
        <ApiContext.Provider value={{ state, setState, getCar  }}>
            {children}
        </ApiContext.Provider>
    )
}