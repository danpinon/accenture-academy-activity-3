import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import postsData from '../../mock-posts-data.json'

import './Main.css'
import Post from './Post'

function Main() {

    const category = useSelector(state => state.category)
    
    return (
        <div className='border-red-500 grid grid-row-flow grid-cols-1 md:grid-row-flow md:grid-cols-2 mt-5 text-white'>
        {
            postsData.posts.filter(post => post.category.includes(category)).map(filteredPost => (
                    <Post 
                        key={filteredPost.id}
                        id={filteredPost.id}
                        title={filteredPost.title}
                        commentsNumber={filteredPost.commentsNumber}
                        content={filteredPost.content}
                        category={filteredPost.category}
                        url={filteredPost.url}
                    />
            ))
        }
           
        </div>
    )
}

export default Main
