import React from 'react'

function Comment({ comment, username }) {
    return (
        <div className='bg-white rounded my-4 p-2 shadow'>
            <div className='rounded-full h-6 mb-1 flex'>
                <img className='h-full overflow-hidden' src='https://hook.finance/sites/default/files/user.png' alt='user'/>
                <h6 className='px-2 font-semibold'>{username}</h6>
            </div>
            <p className='ml-10'>{comment}</p>
        </div>
    )
}

export default Comment
