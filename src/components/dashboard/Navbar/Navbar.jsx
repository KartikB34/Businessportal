import React from 'react'
import { navLinks } from './Utils/NavDB'

const Navbar = () => {
  return (
    <nav className='col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
        <div className='space-y-8 w-full'>
            {navLinks.slice(0,4).map( (Link) => (
                <NavItem key={Link.id} Link={Link} />
            ))}

            <div className='w-full border-t border-gray-200'/>

            {navLinks.slice(4,6).map( (Link) => (
                <NavItem key={Link.id} Link={Link} />
            ))}
        </div>
    </nav>
  )
}

function NavItem({Link}) {
    return (
        <div className="w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent">
                    <span>{Link.icon}</span>
                    <h1 className='text-gray-600  group-hover:text-black xl:flex hidden'>{Link.title}</h1>
                </div>
    )
}

export default Navbar