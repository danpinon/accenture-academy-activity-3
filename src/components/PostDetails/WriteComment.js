import React, { useState } from 'react'

function WriteComment() {
    const [comment, setComment] = useState({
        id: new Date().valueOf(),
        comment: '',
        user: {
            id: 1,
            name: "Daniel"
        }
    })

    function handleAddComment(e) {
        setComment({...comment, comment: e.target.value})
    }
    return (
        <div className='pt-6'>
            <form className="flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault()
                    // addComment(comment)
                }}
            >
                <label>Write a Comment</label>
                <input 
                    className="mt-2 focus:outline-none bg-transparent border-b border-gray-500"
                    value={comment.comment}
                    onChange={(e) => {handleAddComment(e)}}
                />
                <div>
                    <button 
                        className="px-2 py-1 font-semibold text-white mt-3 bg-indigo-500 hover:bg-indigo-700"  
                    >
                    Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default WriteComment
