import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removePost, updatePost } from '../../actions'
import Modal from '../Modal'
import postsData from '../../mock-posts-data.json'

function Post({title, comments, description, category, url, id}) {
  
    const dispatch = useDispatch()
    
    function handleRemovePost(postId) {
        dispatch(removePost(postId))
    }
    
    const [edit, setEdit] = useState(false)
    const [post, setPost] = useState({
        id,
        title,
        comments,
        description,
        category,
        url
     })

     console.log(post)

     function handlePost(e){
        setPost({...post, [e.target.id]: e.target.value})
     }
    return (
        <article className='h-full bg-gray-600 bg-image-article px-8 pt-8 pb-4 flex flex-col' 
        style={
            {
                background: `linear-gradient( rgba(100, 100, 100, .2), rgba(50, 50, 50, .8) ), url(${url}) center`,
                backgroundSize: "cover"
            }
                }>
        <Link to={`/post-details/${id}`}>
            <h1 className='text-4xl leading-none mb-4 font-medium'>{title}</h1>
            <h6 className='mb-4 font-light'>{comments.length} Comments</h6>
            <p className='mb-4 font-light'>{description}</p>
        </Link>
            <div className='flex justify-between mt-auto'>
                <h6 className='font-normal uppercase tracking-widest'>{category}</h6>    
                <div className='z-10'>
                    <button className='hover:text-gray-500' onClick={() => setEdit(true)}>
                        <i className="mr-3 material-icons text-2xl">edit</i>
                    </button>
                    <button className='hover:text-red-500' onClick={() => {handleRemovePost(id)}}>
                        <i className="material-icons text-2xl">delete</i>
                    </button>
                </div>
            </div>

            {edit?
                (<Modal>
                <div className="">
                    <form 
                        onSubmit={(e)=>{
                            e.preventDefault()
                            dispatch(updatePost(post)) 
                            setEdit(false)
                        }}
                        >
                        <label className="">Title</label>
                        <input 
                            id='title'
                            value={post.title}
                            onChange={(e) => handlePost(e)}
                            />

                        <label>Description</label>
                        <input 
                            id='description'
                            value={post.description}
                            onChange={(e) => handlePost(e)}
                            />

                        <label>Category</label>
                        <select
                            className={'capitalize'}
                            id='category'
                            value={post.category}
                            onChange={(e) => handlePost(e)}>
                            <option />
                            {
                                postsData.categories.map(category => (
                                    <option className={'capitalize'}>
                                        {category}
                                    </option>

                                ))
                            }
                        </select>
                        
                            <label className="text-sm">URL of the Image</label>
                        <div className="flex flex-col relative">
                            <i className="absolute right-0 pl-20 bg-gradient-to-l from-white to-transparent material-icons">link</i>
                            <input
                                id='url'
                                value={post.url}
                                onChange={(e) => handlePost(e)}
                                />
                        </div>

                        <div className="flex justify-end">
                            <button onClick={() => setEdit(false)}className="px-4 py-1 bg-white hover:text-gray-700">Cancel</button>
                            <button className="px-4 py-1 bg-indigo-700 text-white hover:bg-indigo-600">Submit</button>
                        </div>
                    </form>
                </div>
            </Modal>) : null
            }    
        </article>
    )
}

export default Post
