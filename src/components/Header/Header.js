import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <div>
            <h3 className=' text-orange-500 text-center text-lg my-2'>
                <span className='text-3xl'>[</span>
                    <Link to='/'>
                        Making your Life Easier 
                    </Link>
                <span className='text-3xl'>]</span>
            </h3>
            <h1 className='text-6xl font-bold leading-none text-center mx-auto w-full w-4/5 sm:w-3/5'>
                <Link to='/'>
                    Discovering the World
                </Link>
            </h1>      
        </div>
    )
}

export default Header
