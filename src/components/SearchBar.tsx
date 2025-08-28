'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const SearchBar = () => {

    const route = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if (name) {
            route.push(`/list?name=${name}`);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex ic justify-center gap-4 bg-gray-100 py-2 rounded-md flex-1">
            <input type="text" name="name" placeholder='Buscar' className="bg-transparent outline-none flex-1" />
            <button className='cursor-pointer'>
                <Image src="/search.png" alt="search" width={16} height={16} />
            </button>
        </form>
    )
}

export default SearchBar