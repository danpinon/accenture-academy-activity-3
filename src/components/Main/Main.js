import React, { useContext } from 'react'
import ThemeContext from '../../ThemeContext'
import './Main.css'
import Post from './Post'
function Main({postsData}) {
    const [postCategory] = useContext(ThemeContext)
    console.log(postsData)
    return (
        <div className='border-red-500 grid grid-row-flow grid-cols-1 md:grid-row-flow md:grid-cols-2 mt-6 text-white'>
        {
            postsData.filter(post => post.category.includes(postCategory)).map(filteredPost => (
                <Post 
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
