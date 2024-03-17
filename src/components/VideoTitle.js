import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[20%] px-20'>
        <p className='font-bold text-4xl pb-2'>{title}</p>
        <p className='w-1/2'>{overview}</p>
        <div className='mt-4'>
            <button className='bg-white text-black hover:bg-opacity-80 rounded-lg px-6 py-2 mr-2 border border-black'>Play</button>
            <button className='border border-black px-3 py-2 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle