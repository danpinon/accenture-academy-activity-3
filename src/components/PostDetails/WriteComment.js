import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import supervillains from 'supervillains'
import { addComment } from '../../actions'
import { BrowserRouter as Router, useParams } from "react-router-dom";
function WriteComment() {
    let { id } = useParams()

    const emptyComment = {
        postId: parseInt(id),
        comment: '',
        user: {
            id: new Date().valueOf(),
            name: supervillains.random()
        }
    }
    const [comment, setComment] = useState(emptyComment)

    const dispatch = useDispatch()
    
    function handleAddComment(e) {
        setComment({...comment, comment: e.target.value})
    }

    console.log(comment)
    return (
        <div className='pt-6'>
            <form className="flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addComment(comment))
                    setComment(emptyComment)
                }}
            >
                <label>Write a Comment</label>
                <input 
                    className="mt-2 focus:outline-none bg-transparent border-b border-gray-500"
                    value={comment.comment}
                    onChange={(e) => {
                        handleAddComment(e)
                        }}
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
