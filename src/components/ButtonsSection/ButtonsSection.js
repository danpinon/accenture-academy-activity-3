import React from 'react'
import CategoryButton from './CategoryButton'

function ButtonsSection() {
    return (
    <section className='text-center mt-8 mx-auto w-full'>
        <CategoryButton category='' name={'All'}/>
        <CategoryButton category='travel' name={'Travel'}/>
        <CategoryButton category='lifestyle' name={'Lifestyle'}/>
        <CategoryButton category='business' name={'Business'}/>
        <CategoryButton category='food' name={'Food'}/>
        <CategoryButton category='work' name={'Work'}/>
    </section>
    )
}

export default ButtonsSection
