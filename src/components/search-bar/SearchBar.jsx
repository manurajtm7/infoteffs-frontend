import { Search } from 'lucide-react'
import React, { useRef } from 'react'

function SearchBar({ inputState, setInputState, submitEvent }) {
    const inputFocusRef = useRef(null);

    document.addEventListener("keypress", (e) => {
        inputFocusRef.current.focus();
    })
    return (
        <div className='w-full  h-10 p-3 border border-zinc-600 rounded flex items-center justify-center'>
            <input ref={inputFocusRef} type="text" value={inputState} className='w-full h-full bg-transparent outline-none' onChange={(e) => setInputState(e.target.value)} placeholder='search peoples' />
            <Search className='text-zinc-500' />
        </div>
    )
}

export default SearchBar