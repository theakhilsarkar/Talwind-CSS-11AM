import React from 'react'

export default function FlexBox() {
    return (
        <div>
            {/* {/* <div className='flex justify-center'>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
            </div> */}

            <h1>Justify Start</h1>
            <div className='flex justify-start'>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
            </div>

            <div className='flex justify-end'>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
            </div>

            <div className='flex justify-evenly'>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
            </div>

            <div className='flex justify-around'>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
            </div>

            <div className='flex justify-between items-stretch bg-red-300'>
                <div className='flex bg-green-300'>
                    <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                    <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                </div>

                <div className=''>
                    <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                    <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                    <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                    <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                </div>

            </div>

            {/* <div className='flex flex-wrap md:justify-center justify-start'>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
                <div className='h-20 w-40 m-2 rounded-md bg-amber-200 '></div>
            </div> */}



            {/* <div className='h-dvh place-content-center place-items-center'>

                <div className='flex flex-col flex-col-reverse'>
                    <div className='h-20 w-40 m-2 rounded-md bg-amber-200'></div>
                    <div className='h-20 w-40 m-2 rounded-md bg-red-200'></div>
                    <div className='h-20 w-40 m-2 rounded-md bg-green-200'></div>
                    <div className='h-20 w-40 m-2 rounded-md bg-blue-200'></div>
                </div>

            </div> */}


            <div className='flex'>
                <div className='basis-1/3 bg-red-300'>h</div>
                <div className='basis-1/3 bg-green-300'>h</div>
                <div className='basis-1/3 bg-yellow-300'>h</div>
            </div>

        </div>
    )
}

// main axis
// cros axis

// row - col
// row - horizontal - main axis -> x, cross -> y
// col - verticle - main - main -> y, cross ->x