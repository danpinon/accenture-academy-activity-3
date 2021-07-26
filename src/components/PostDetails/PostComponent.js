import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import WriteComment from './WriteComment'
function PostComponent({title, comments, description, id, category, url}) {

    const Allcomments = useSelector(state => state.comments)
    const posts = useSelector(state => state.posts)
    return (
        <div className='mt-6 h-screen'>
            <div className='h-64 flex items-center justify-center text-white relative flex-col'
            style={
                {
                    background: `linear-gradient( rgba(100, 100, 100, .2), rgba(50, 50, 50, .8) ), url(${url}) center`,
                    backgroundSize: "cover"
                }
            }
            >
                <Link to='/'>
                    <p className="absolute top-0 left-0 ml-4 mt-2 text-xs font-semibold">{`< View Posts`}</p>
                </Link>
                <h1 className='text-3xl font-semibold'>{title}</h1>
                
            </div>
            
            <section className='h-full bg-gray-300'>
                <div className='container m-auto'>
                    <p className='px-5 pt-10'>{description}</p>
                </div>
                <div style={{width: "24rem"}}className='mt-10 mb-4 m-auto'>
                    <h1 className='text-left font-bold'>Comments</h1>
                    {/* {
                    comments.map(commentId => {
                        const filteredComments = Allcomments.filter(comment => comment.id === commentId).map(comment => (
                        <Comment comment={comment.comment} username={comment.user.name}/>
                    ))
                    return filteredComments
                    })                   
                    } */}
                    {
                        comments.map(comment => comment.comment)
                    }
                    
                    <WriteComment 
                        post={{
                            title,
                            comments,
                            description,
                            id,
                            category
                        }}
                    />
                </div>
            </section>
        </div>
    )
}

export default PostComponent
