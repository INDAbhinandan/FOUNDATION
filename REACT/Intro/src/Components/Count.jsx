import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1 className='count'>{count}</h1>
            <div className="btn">
                <button
                    onClick={() => setCount(count + 1)}
                >Increment</button>


                <button
                    onClick={() => setCount(count - 1)}
                >Decrement</button>

            </div>

        </div>
    )
}

export default Count