import React, { useState } from 'react'
import { X } from 'lucide-react';


export default function App() {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()


    const copyTask = [...task];
    copyTask.push({ title, details })
    setTask(copyTask)



    // console.log(title, details);
    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];
    // console.log(copyTask[idx]);

    copyTask.splice(idx,1)

    setTask(copyTask)
    
    
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form
        onSubmit={(e) => {
          submitHandler(e)
        }} className='flex lg:w-1/2 gap-4 flex-col justify-between items-start  p-10 '>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/*pehla input for heading*/}
        <input
          className='w-full px-5 py-2 font-medium border-2 outline-none rounded '
          type="text"
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);

          }}
        />

        {/* details vala input */}
        <textarea
          className='w-full px-5 py-2 h-32 font-medium border-2 outline-none rounded'
          type="text"
          placeholder=' Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);

          }}
        />

        <button className='w-full active:scale-95 font-medium bg-white text-black px-5 py-2 outline-none rounded'>Add Notes</button>
        {/* <img className='h-52 rotate-y-180' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" /> */}
      </form>
      <div className=' lg:w-1/2 lg:border-l-2 bg-gray-500 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className=' flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>

          {/* <div className="h-52 w-40 rounded-2xl bg-white"></div> */}

          {task.map(function (elem, idx) {

            return <div key={idx} className="flex flex-col justify-between items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-7 pb-5 px-4.5  bg-[url('https://img.magnific.com/premium-vector/diary-page-template-with-cute-house-stars_781822-725.jpg')]">
              {/* <h2 className='absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs'><X/></h2> */}
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-3.5 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx) }}
                 className='w-full cursor-pointer active:scale-95 py-1 text-xs rounded font-bold bg-red-500  text-white'>Delete</button>

            </div>


          })}
        </div>
      </div>
    </div>
  )
}
