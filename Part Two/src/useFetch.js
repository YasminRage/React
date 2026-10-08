import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url).then((r) => r.json()).then(setData)
    }, [url])

    return data
}

export default useFetch