'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'

const Menu = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className=''>
            <Image
                src="/menu.png"
                alt="menu"
                width={30}
                height={30}
                className='cursor-pointer'
                onClick={() => setOpenMenu((prev) => !prev)}
            />{
                openMenu && (
                    <div className='absolute top-20 left-0 bg-black text-white w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
                        <Link href="/">Inicio</Link>
                        <Link href="/">Contacto</Link>
                        <Link href="/">Login</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Menu 