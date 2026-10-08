import { useState } from 'react'

function Counter() {
    const [count, setCount] = userState(0)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} >Add one</button>
            <button onClick={() => setCount(count - 1)} >Subtract one</button>
            <button onClick={() => setCount(0)}>Reset</button>

            <input value={text} onChange={(e) => setText(e.target.value)} />
            <p>You typed: {text}</p>

        </div>
    )


}

export default Counter