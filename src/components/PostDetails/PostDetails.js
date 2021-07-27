import React from 'react'
import postsData from '../../mock-posts-data.json'
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
import PostComponent from './PostComponent'
import { useSelector } from 'react-redux';

function PostDetails() {
    const posts = useSelector(state => state.posts)

    let { id } = useParams()
    console.log(id)
    console.log(postsData.posts)

    return (
        <>

        {
            posts.filter( post => post.id === parseInt(id) ).map(filteredPost => (
                <PostComponent 
                    key={filteredPost.id}
                    id={filteredPost.id}
                    title={filteredPost.title}
                    description={filteredPost.description}
                    comments={filteredPost.comments}
                    url={filteredPost.url}
                    category={filteredPost.category}

                />
            ))
        }
        </>
    )
}

export default PostDetails
