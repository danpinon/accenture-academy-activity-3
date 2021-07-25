import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../actions'

function CategoryButton({category, name}) {

    const dispatch = useDispatch()

    return (
        <button onClick={() => {dispatch(setCategory(category))}} className="-mx-px border px-4 py-1 capitalize focus:outline-none focus:bg-gray-300">{name}</button>
    )
}

export default CategoryButton
