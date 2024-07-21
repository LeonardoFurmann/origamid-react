import React, { useCallback, useState } from 'react'

const useFecth = () => {
    const [dados, setDados] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const request = useCallback(async (url, options) => {
        let response;
        let json
        try {
            setError(null)
            setLoading(true)
            response = await fetch(url, options);
            json = await response.json()
        } catch (erro) {
            json = null;
            setError(erro)
        } finally {
            setDados(json)
            setLoading(false)
            return { response, json }
        }
    }, []);

    return { dados, error, loading, request }
}

export default useFecth