import React from 'react'
import SimerBox from './SimerBox'

export default function Table() {
    return (
        <div className='text-center'>
            <SimerBox />
            <button className='relative bg-gray-400 text-white px-3 py-1 mt-3 rounded-sm'>
                Transition
                <div className='absolute -top-1 -right-1'>
                    <span class="relative flex size-3">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                        <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                    </span>
                </div>
            </button>
        </div>
    )
}
