import React from 'react'
import { useSelector } from 'react-redux'

import './Main.css'
import Post from './Post'

function Main() {

    const category = useSelector(state => state.category)
    const posts = useSelector(state => state.posts)
    console.log(posts)

    return (
        <div className='border-red-500 grid grid-row-flow grid-cols-1 md:grid-row-flow md:grid-cols-2 mt-5 text-white'>
        {
            posts.filter(post => post.category.includes(category)).map(filteredPost => (
                    <Post 
                        key={filteredPost.id}
                        id={filteredPost.id}
                        title={filteredPost.title}
                        comments={filteredPost.comments}
                        description={filteredPost.description}
                        category={filteredPost.category}
                        url={filteredPost.url}
                    />
            ))
        }
           
        </div>
    )
}

export default Main
