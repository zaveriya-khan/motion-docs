import React from 'react'

function Background() {
  return (
    <>
    <div className='w-full h-full fixed z-[2]'>
    <div className='bg w-full py-10 flex justify-center text-zinc-500 text-xl absolute top-[5%]'>Documents.</div>
    <h1 className='bg text-[13vw] text-zinc-700 leading-none tracking-tight absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Docs.</h1>
    </div>
    </>
  )
}

export default Background