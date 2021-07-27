export const SET_CATEGORY = 'SET_CATEGORY'

export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const UPDATE_POST = 'UPDATE_POST'

export const ADD_COMMENT = 'ADD_COMMENT'

export const setCategory = (category) => ({type: SET_CATEGORY, payload: category})

export const addPost= (post) => ({type: ADD_POST, payload: post})
export const removePost= (postId) => ({type: REMOVE_POST, payload: postId})
export const updatePost= (post) => ({type: UPDATE_POST, payload: post})

export const addComment= (comment, postId) => ({ type: ADD_COMMENT, payload: comment })