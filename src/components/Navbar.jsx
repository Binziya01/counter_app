import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 mt-5 bg-pink-700 h-20'>
        <div className='text-4xl font-bold'>logo</div>
        <ul className='flex gap-7 items-center text-2xl'>
            <li>Home</li>
            <li>About</li>
            <li>Login</li>
            <li>Sign up</li>
        </ul>
    </div>
  )
}

export default Navbar