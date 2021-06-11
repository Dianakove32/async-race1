import React  from 'react'
export const ApiContext = React.createContext()

export default function ContextProvider({ children }) {
  //  const [id, setId] = useState('')

    return (
        <ApiContext.Provider >
            {children}
        </ApiContext.Provider>
    )
}