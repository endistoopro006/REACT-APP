import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center bg-slate-400' >
      <dotlottie-player src="https://lottie.host/528c5003-89fb-4beb-88e2-c0d476a1cfce/cX9lbeRsUp.json" background="transparent" loop autoplay></dotlottie-player>
      <div>
        <h1 className='text-3xl'>Hi, I am Chetan</h1>
        <p className='text-green-950 my-2 italic tracking-widest'>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, tenetur!</p>
      </div>

    </div>
  )
}

export default Display