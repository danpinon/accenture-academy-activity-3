import React, { useState } from 'react'
import Modal from './Modal'
import postsData from '../mock-posts-data.json'
function AddPostButton() {

    const [edit, setEdit] = useState(false)
    const [post, setPost] = useState({
       id: new Date().valueOf(),
       title: '',
       commentsNumber: '',
       content: '',
       category: '',
       url: '' 
    })
    return (
        <div className="relative h-12">
            <button onClick={() => setEdit(true)} style={{top: "-30px", left: "80%"}} className="text-white focus:outline-none hover:bg-orange-400 absolute bg-orange-500 h-20 w-20 rounded-full flex items-center justify-center shadow-lg">
            <i class="material-icons text-4xl">edit</i>
            </button>
            {edit ? 
            (
            <Modal>
                <div className="">
                    <form className="">
                        <label className="">Title</label>
                        <input 
                            className='' 
                            />

                        <label>Description</label>
                        <input 
                            className=''
                            />

                        <label>Category</label>
                        <select>
                            <option />
                            {
                                postsData.categories.map(category => (
                                    <option value={category}>
                                        {category}
                                    </option>

                                ))
                            }
                        </select>
                        
                            <label className="text-sm">URL of the Image</label>
                        <div className="flex flex-col relative">
                            <i className="absolute right-0 pl-20 bg-gradient-to-l from-white to-transparent material-icons">link</i>
                            <input
                                className=''
                                />
                        </div>

                        <div className="flex justify-end">
                            <button onClick={() => setEdit(false)}className="px-4 py-1 bg-white hover:text-gray-700">Cancel</button>
                            <button className="px-4 py-1 bg-indigo-700 text-white hover:bg-indigo-600">Submit</button>
                        </div>
                    </form>
                </div>
            </Modal>
            ):null
            }
        </div>
    )
}

export default AddPostButton
