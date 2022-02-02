import { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({})

    useEffect(() => {
        fetch(url, { method })
        .then(resp => resp.json())
        .then(json => setResponse(json))
    }, [url, method])

    return response
}