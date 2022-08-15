import React from 'react'
import Header from './header/Header'
import Navbar from './Navbar/Navbar'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <Navbar/>
        <div>
          {/* Left part */}
          {/* Right part */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard