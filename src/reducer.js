import { combineReducers } from 'redux'
import data from './mock-posts-data.json'
import { SET_CATEGORY } from './actions'
export const initialState = data
export const categoryState = ''

const userReducer = (users = initialState.users, action) => {
    return users
}

const postReducer = (posts = initialState.posts, action) => {
    return posts
}

const categoryReducer = (category = categoryState, action) => {
    if(action.type === SET_CATEGORY){
       return  action.payload
    }
    return category
}

export const reducer = (combineReducers({users: userReducer, posts: postReducer, category: categoryReducer}))