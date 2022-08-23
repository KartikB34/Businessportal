import React from 'react'
import { navLinks } from './Utils/NavDB'
import {useRecoilState} from "recoil"
import { ActiveTabState } from '../atoms/ActiveTabState'
// import {useNavigate} from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Navbar = ({path}) => {
  return (
    <nav className='col-span-2 border-r border-gray-200 min-h-[90vh] w-[90px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
        <div className='space-y-8 w-full'>
            {navLinks.slice(0,4).map( (Link) => (
                <NavItem key={Link.id} Link={Link} path={path} />
            ))}

            <div className='w-full border-t border-gray-200'/>

            {navLinks.slice(4,6).map( (Link) => (
                <NavItem key={Link.id} Link={Link} path={path} />
            ))}
        </div>
    </nav>
  )
}

function NavItem({Link, path}) {
    const [activeNavItem, setActiveNavItem] = useRecoilState(ActiveTabState);
    // Inside div when using recoil:    onClick={()=>setActiveNavItem(Link.id)}
    // let navigate = useNavigate();
    const history = useHistory();

    const redirector = () => {

        if(Link.title==='Dashboard'){
            return (`${path}/dashboard`)
        }
        else if(Link.title==='Your Jobs'){
            return (`${path}/yourjob`)
        }
        else if(Link.title==='Your Internships'){
            return (`${path}/yourinternships`)
        }
        else if(Link.title==='Add Job'){
            return (`${path}/addjob`)
        }
        else{
            return(`${path}`)
        }
        
    }

    const clickHandler = () => {
        setActiveNavItem(Link.id);
        // navigate(redirector())
        history.push(redirector())
    }

    
    // Inside div when using recoil:    onClick={()=>setActiveNavItem(Link.id)}
    // window.location.pathname = Link.link
    return (
        <div onClick={()=>{setActiveNavItem(Link.id)}} className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${activeNavItem===Link.id && "border-gray-900"}`}>
                    <span>{Link.icon}</span>
                    <h1 className={`text-gray-600  group-hover:text-black xl:flex hidden ${activeNavItem===Link.id && "text-black"}`}>{Link.title}</h1>
                </div>
    )
}

export default Navbar