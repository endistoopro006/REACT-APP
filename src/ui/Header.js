import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-between items-baseline'>
      <h1 className='text-3xl'>TailWind</h1>
      <nav className='space-x-4'>
        <button>
          About
        </button>
        <button>
          Contact
        </button>
      </nav>


    </div>
  )
}

export default Header
