import React from 'react'
import postsData from '../../mock-posts-data.json'
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
import PostComponent from './PostComponent'
function PostDetails() {
    let { id } = useParams()
    console.log(id)
    console.log(postsData.posts)
    return (
        <>

        {
            postsData.posts.filter( post => post.id === parseInt(id) ).map(filteredPost => (
                <PostComponent 
                    key={filteredPost.id}
                    title={filteredPost.title}
                    content={filteredPost.content}
                    commentsNumber={filteredPost.commentsNumber}
                    url={filteredPost.url}
                    category={filteredPost.category}

                />
            ))
        }
        </>
    )
}

export default PostDetails
