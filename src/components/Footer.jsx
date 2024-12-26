import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='flex justify-center gap-4 sm:justify-between items-center flex-wrap text-center p-6'>
      <div className='flex gap-5'>
        <Link className='text-sm text-teal-900 underline'>Privacy Policy</Link>
        <Link className='text-sm text-teal-900 underline'>Terms of Use</Link>
        <Link className='text-sm text-teal-900 underline'>Cookie Preference</Link>
      </div>
      <p className='text-sm text-teal-950 underline'>© 2024 Learning Hub. All rights reserved.</p>
    </div>
  )
}

export default Footer