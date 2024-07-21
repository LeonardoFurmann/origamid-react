import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, ini) => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key)
    return local ? local : ini
  })

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [state, key])

    return [state, setState]

}

export default useLocalStorage