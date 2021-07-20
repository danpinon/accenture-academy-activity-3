import React, {useContext} from 'react'
import ThemeContext from '../../ThemeContext'

function CategoryButton({category, name}) {
    const [postCategory, setPostCategory] = useContext(ThemeContext)
    return (
        <button onClick={() => {setPostCategory(category)}} className="-mx-px border px-4 py-1 capitalize focus:outline-none focus:bg-gray-300">{name}</button>
    )
}

export default CategoryButton
