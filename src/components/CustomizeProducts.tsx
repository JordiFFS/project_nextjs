import React from 'react'

const CustomizeProducts: React.FC = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h4 className='font-medium'>Escoger el color</h4>
            <ul className="flex items-center gap-3">
                <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-yellow-400'>
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                </li>
                <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-yellow-800'>
                    {/* <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/> */}
                </li>
                <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-yellow-200'>
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                </li>
            </ul>
            <h4 className='font-medium'>Escoger el tamaño</h4>
            <ul className="flex items-center gap-3">
                <li className='ring-1 ring-notify text-notify rounded-md py-1 px-4 text-sm cursor-pointer'>
                    Pequeño
                </li>
                <li className='ring-1 ring-notify text-white bg-notify rounded-md py-1 px-4 text-sm cursor-pointer'>
                    Mediano
                </li>
                <li className='ring-1 ring-pink-100 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed'>
                    Grande
                </li>
            </ul>
        </div>
    )
}

export default CustomizeProducts