import React, { useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'

const TagInput = ({ tags, setTags }) => {

    const [inputValue, setInputValue] = useState("");
    const handelInput = (e) => {
        setInputValue(e.target.value)
    }

    const addNewTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("")

        }
    };
    const handelKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag()
        }
    }

    const handellRemoveTag=(remvedTag)=>{
        setTags(tags.filter((tag)=>tag !== remvedTag))
    }

    return (
        <div>

            <div className="">
                {
                    tags?.lengt > 0 && <div className=''>
                        {tags.map((tag, index) => (
                            <span key={index}>{tag}

                                <button className='' onClick={() => { handellRemoveTag(tag) }}>
                                    <MdClose className='' />
                                </button>
                            </span>
                        ))}
                    </div>
                }
            </div>
            <div className="flex items-center gap-4 mt-3">
                <input type="text"
                    className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
                    placeholder='Add Tags'
                    onChange={handelInput}
                    onKeyDown={handelKeyDown} />
                <button className="w-8 h-8 flex items-center justify-center rounded border border-primary hover:bg-primary" onClick={() => { addNewTag() }} >
                    <MdAdd className='text-2xl text-primary hover:text-white'/>
                </button>
            </div>
        </div>
    )
}

export default TagInput