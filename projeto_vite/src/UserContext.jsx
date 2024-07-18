import React, { Children, createContext, useEffect, useState } from 'react'

export const UserContext = createContext();


export const UserStorage = ({ children }) => {
    const [produto, setProdutos] = useState(null)

    useEffect(() => {
        fetch(' https://ranekapi.origamid.dev/json/api/produto/')
            .then((response) => response.json())
            .then((json) => setProdutos(json))
    }, [])

    function limpaDados() {
        setProdutos(null)
    }


    return <UserContext.Provider value={{ produto, limpaDados }}>{children}</UserContext.Provider>
}