import React from 'react'

function MainLayout({children}) {
  return (
    <div className=''>
      <div className='left-bar w-[20vw] fixed h-[100vh] bg-black text-white'>left bar</div>
      <div className='w-[60vw] mx-auto'>{children}</div>
      <div className="right bar w-[20vw] fixed h-[100vh] bg-black text-white right-0 top-0">right bar</div>
    </div>
  )
}

export default MainLayout
