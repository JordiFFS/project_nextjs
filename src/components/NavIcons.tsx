'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { MdPerson, MdNotifications, MdMessage } from 'react-icons/md';

const NavIcons = () => {

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  // Para hacer pruebas 
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push('/login');
    }
    setIsProfileOpen((prev) => !prev);
  }

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <MdPerson size={22} onClick={handleProfile} className='cursor-pointer' />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
          <Link href="/">Perfil</Link>
          <div className="mt-2 cursor-pointer"> Cerrar sesión </div>
        </div>
      )}
      <MdNotifications size={22} className='cursor-pointer' />
      <MdMessage size={22} className='cursor-pointer'/>
    </div>
  );
};

export default NavIcons;
