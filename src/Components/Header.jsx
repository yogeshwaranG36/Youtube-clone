import React from 'react'
import { Menu, Sidebar } from 'lucide-react'
import logo from '../img/YouTube-Logo.wine.png'
function Header() {
    return (
        <header className='App-header flex p-3 items-center'>
            <button>
                <Menu className='w-10 h-10'/>
            </button>
            <a><img src={logo} alt="/" className='w-36' /></a>
            <input placeholder='search' className='p-3 border h-13 mx-auto w-1/2 rounded-full' />
            <button className='w-12'><img src="src/img/user.png" alt="" /></button>
        </header>
    )
}

export default Header