import { useState, useEffect } from 'react'

function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading…</p>

    return (
        <ul>
            {users.map((u) => (
                <li key={u.id}>{u.name} — {u.email}</li>
            ))}
        </ul>
    )
}

export default Users