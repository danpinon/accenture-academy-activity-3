import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import supervillains from 'supervillains'
import { addComment, updatePost } from '../../actions'

function WriteComment({ post}) {
    const emptyComment = {
        id: new Date().valueOf(),
        comment: '',
        user: {
            id: new Date().valueOf(),
            name: supervillains.random()
        }
    }
    const [comment, setComment] = useState(emptyComment)

    const [postState, setPostState] = useState(post)

    const dispatch = useDispatch()
    
    function handleAddComment(e) {
        setComment({...comment, comment: e.target.value})
    }

    console.log(postState)
    return (
        <div className='pt-6'>
            <form className="flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addComment(comment))
                    dispatch(updatePost('hello'))
                    setComment(emptyComment)
                }}
            >
                <label>Write a Comment</label>
                <input 
                    className="mt-2 focus:outline-none bg-transparent border-b border-gray-500"
                    value={comment.comment}
                    onChange={(e) => {
                        setPostState({...post, [post.comments]: [...post.comments, comment.id]})
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
