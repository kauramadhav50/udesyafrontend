import React from 'react'
import { Link } from 'react-router-dom'

const Message = () => {
    return (
        <div>
            message page

            <Link to="/" className='text-blue-500 underline'>
                GoBack
            </Link>
        </div>
    )
}

export default Message
