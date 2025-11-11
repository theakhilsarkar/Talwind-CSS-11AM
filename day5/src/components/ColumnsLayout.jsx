import React from 'react'

export default function ColumnsLayout() {
    return (
        <div className='container'>
            <div className='bg-gray-200 2xl:columns-4 xl:columns-3 md:columns-2 columns-1 m-3 space-y-3 space-x-3'>
                {
                    Array.from({ length: 110 }).map((_, i) => <div className='bg-sky-50 p-3 rounded break-inside-avoid'>
                        <img src={"https://picsum.photos/300/200?random=" + i} alt="" className='rounded mb-3 w-full' />
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius nisi molestias tempora quisquam odio optio, doloribus sint? Optio, doloribus </p>
                    </div>)
                }
            </div>
        </div>
    )
}


// md:columns-2 columns-1