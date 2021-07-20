import React from 'react'
import CategoryButton from './CategoryButton'
function Header() {

    return (
        <div className='border '>
            <h3 className=' text-red-500 text-center text-lg my-2'>
                <span className='text-3xl'>[</span> 
                    Making your Life Easier 
                <span className='text-3xl'>]</span>
            </h3>
            <h1 className='text-6xl font-bold leading-none text-center mx-auto mb-8 w-full w-4/5 sm:w-3/5'>Discovering the World</h1>
   
            <div className='text-center mx-auto w-full'>
                <CategoryButton category='' name={'All'}/>
                <CategoryButton category='travel' name={'Travel'}/>
                <CategoryButton category='lifestyle' name={'Lifestyle'}/>
                <CategoryButton category='business' name={'Business'}/>
                <CategoryButton category='food' name={'Food'}/>
                <CategoryButton category='work' name={'Work'}/>
            </div>
        </div>
    )
}

export default Header
