import React from 'react'

export default function GridTemplate() {
    return (
        <div className='container mx-auto grid grid-cols-4'>
            {/* {
                Array.from({ length: 9 }).map((_, i) => {
                    const color = colorList[i % colorList.length];
                    return <div key={i} className={color + ' m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>
                })
            } */}
            {/* <div className='col-span-3 grid grid-cols-subgrid'>
                <div key="11" className={"bg-emerald-200" + ' col-start-2 m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>
            </div> */}


            <div className={"bg-emerald-200" + ' m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>

            <div className={"bg-emerald-200" + '  m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>

            <div className={"bg-emerald-200" + ' m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>

            <div className={"bg-emerald-200" + ' m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>

            <div className={"bg-emerald-200 col-span-2" + ' m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>

            <div className={"bg-emerald-200 col-start-4" + '  m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>

            <div className={"bg-emerald-200" + ' m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>

            <div className={"bg-emerald-200" + ' m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>

            <div className={"bg-emerald-200" + ' m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>

            <div className={"bg-emerald-200 col-span-4" + ' m-4 p-4 rounded-md'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae placeat saepe cum possimus earum ipsa voluptatem esse officia distinctio voluptatibus necessitatibus, accusantium vitae, delectus sapiente vel excepturi fugiat ullam nulla.</div>

        </div>

    )
}

// operator in js
// theory types - a,a,l,r
// defination,symbols,example

const colorList = [
    "bg-green-200",
    "bg-red-200",
    "bg-yellow-200",
    "bg-pink-200",
    "bg-sky-200",
    "bg-lime-200",
    "bg-amber-200",
    "bg-orange-200",
    "bg-rose-200",
    "bg-gray-200",
    "bg-cyan-200",
];