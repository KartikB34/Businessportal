import React from 'react'
import Header from './header/Header'
import Navbar from './Navbar/Navbar'

import DashHome from './dashhome/DashHome'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="w-full min-h-[90vh] flex flex-row">
        <Navbar className=""/>
        <div className="w-[640px]">
          {/* Left part */}
          {/* Right part */}
          <DashHome />
        </div>
      </div>
    </div>
  )
}

export default Dashboard