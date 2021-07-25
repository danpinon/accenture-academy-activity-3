import React from 'react'
import { Link } from 'react-router-dom'

function Post({title, commentsNumber, content, category, url, id}) {
    return (
    <Link to={`/post-details/${id}`}>
        <article className='bg-gray-600 bg-image-article px-8 pt-8 pb-4 flex flex-col' 
        style={
            {
                background: `linear-gradient( rgba(100, 100, 100, .2), rgba(50, 50, 50, .8) ), url(${url}) center`,
                backgroundSize: "cover"
            }
                }>
            <h1 className='text-4xl leading-none mb-4 font-medium'>{title}</h1>
            <h6 className='mb-4 font-light'>{commentsNumber} Comments</h6>
            <p className='mb-4 font-light'>{content}</p>      
            <h6 className='font-normal uppercase tracking-widest mt-auto'>{category}</h6>
        </article>
    </Link>
    )
}

export default Post
