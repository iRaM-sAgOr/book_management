import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid'

function Sidebar() {
    return (
        <div className='ml-2 mt-2'>
            <Link href="/store"
                className='bg-purple-500 flex h-20 items-end justify-start rounded-md p-4'
            >
                <div className='w-32 md:w-40'>
                    <Logo />
                </div>
            </Link>
            <div className='flex flex-wrap flex-col items-start justify-start'>
                <NavLinks />
                <form>
                    <button className='flex h-[48px] grow items-center justify-center ml-3'>
                        <ArrowLeftStartOnRectangleIcon className='w-6'/>
                        Sign Out
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Sidebar