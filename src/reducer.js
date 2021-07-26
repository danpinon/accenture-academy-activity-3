import { combineReducers } from 'redux'
import data from './mock-posts-data.json'
import { SET_CATEGORY, ADD_POST, REMOVE_POST, UPDATE_POST } from './actions'
export const initialState = data
export const categoryState = ''

const userReducer = (users = initialState.users, action) => {
    return users
}

const postReducer = (posts = initialState.posts, action) => {
    if(action.type === ADD_POST) {
        return [...posts, action.payload]
    }

    if(action.type === REMOVE_POST) {
        const newPosts = posts.filter(post => post.id !== action.payload)
        return newPosts
    }

    if(action.type === UPDATE_POST) {
        const newPost = posts.map(post => {
            if(post.id === action.payload.id) {
                return action.payload
            }
            return post
        })
        return newPost
    }

    return posts
}

const categoryReducer = (category = categoryState, action) => {
    if(action.type === SET_CATEGORY){
       return  action.payload
    }
    return category
}

const commentsReducer = (comments = initialState.comments, action) => {
    return comments
}
export const reducer = (combineReducers({users: userReducer, posts: postReducer, comments: commentsReducer, category: categoryReducer,}))