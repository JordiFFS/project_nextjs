"use client"
import Image from 'next/image';
import React from 'react'

const CartModal = () => {

    const cartItem = true;

    return (
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
            {!cartItem ? (
                <div className="">Carta con items</div>
            ) : (
                // Lista de productos
                <>
                    <h2 className="text-xl">Carrito de compras</h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4">
                            <Image src="https://importadoracuevas.com/cdn/shop/files/SillaGamer100_ReclinableOficinaEscritorioErgonomica01.jpg?v=1734114267&width=1445" alt="cart-empty" width={72} height={96} className='object-cover rounded-md' />
                            <div className="flex flex-col justify-between w-full">
                                {/* Productos  */}
                                {/* parte superios */}
                                <div className="">
                                    {/* Titulo */}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Nombre del producto</h3>
                                        {/* Precio */}
                                        <div className="p-1 bg-gray-50 rounded-sm">
                                            49$
                                        </div>
                                    </div>
                                    {/* Descripcion */}
                                    <div className="text-sm text-gray-500">
                                        Descripción
                                    </div>
                                </div>
                                {/* Boton */}
                                <div className="flex justify-between text-sm">
                                    <span className="cursor-pointer text-gray-500">Cantidad 1</span>
                                    <span className="cursor-pointer text-blue-500">Eliminar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Acciones o botones */}
                    <div className="">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="cursor-pointer text-gray-500">Subtotal</span>
                            <span className="cursor-pointer text-blue-500">49.00$</span>
                        </div>
                        <p className='text-sm text-gray-500 mt-2 mb-4'>Silla gamer</p>
                        <div className="flex justify-between text-sm">
                            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>Ver carrito</button>
                            <button className='rounded-md py-3 px-4 ring-1 bg-black text-white'>Comprar</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartModal    