import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList: React.FC = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg" alt="product" fill sizes="25vw" className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />
                    <Image src="https://images.pexels.com/photos/8489670/pexels-photo-8489670.jpeg" alt="product" fill sizes="25vw" className='absolute object-cover rounded-md' />
                </div>
                <div className="flex justify-between">
                    <span className='font-medium'>Nombre del producto</span>
                    <span className='font-semibold'>49$</span>
                </div>
                <div className="text-sm text-gray-500">
                    Descripción
                </div>
                <button className='rounded-2xl ring-1 ring-notify text-notify w-max py-2 px-4 text-xs hover:bg-notify hover:text-white'>Agregar al carrito</button>
            </Link>
        </div>
    )
}

export default ProductList  