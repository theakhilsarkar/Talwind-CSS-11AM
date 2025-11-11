import React from 'react'

export default function Container() {
    return (
        <section className='w-full bg-yellow-100'>
            <div className='mx-auto container bg-white p-4'>
                {/* <div className='h-md w-lg bg-sky-200'> */}
                <img src="https://picsum.photos/300/300" className='h-48 w-96 object-contain rounded-xl bg-green-200' alt="" />
                {/* </div> */}

                <div className='relative w-xl p-5'>
                    <div className='h-md w-lg bg-pink-200 px-3 py-5 m-4 rounded-md '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rerum soluta qui fugiat praesentium necessitatibus aliquam, dolorum illum itaque assumenda laborum porro sunt doloribus. Facere saepe doloremque sit officia rem?
                        <div className='absolute top-5 right-4 bg-red-600 text-white px-3 py-1 rounded-full'>
                            5
                        </div>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vitae molestiae commodi nulla laudantium doloremque architecto sunt nihil cumque reiciendis porro, impedit quaerat ducimus iure magnam natus, provident exercitationem assumenda temporibus repellat! Dolorum, voluptate sapiente aperiam placeat consectetur nobis voluptatibus vel quaerat, officia pariatur, aliquam qui sed! Unde maiores nobis aliquam tempora? Quaerat dicta exercitationem reiciendis corrupti numquam magnam non iste ducimus? Debitis minus tempore sunt animi a praesentium vel veniam enim magnam suscipit esse est alias amet, doloremque consequuntur eius deleniti expedita voluptates excepturi neque iusto quae. Quaerat explicabo suscipit illo mollitia fugiat est dolorum voluptatem blanditiis provident facilis.
                </p>
            </div>
        </section>
    )
}

//