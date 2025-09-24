"use client"

import React, { useState } from 'react'

interface AddProps {
    stock?: number;
}

const Add: React.FC<AddProps> = ({ stock = 4 }) => {

    const [quantity, setQuantity] = useState(1);

    // variable temporal
    // const stock = 4;

    const handleQuantity = (action: "increment" | "decrement") => {
        const MIN_QUANTITY = 1;
        const MAX_QUANTITY = stock;

        if (action === "decrement") {
            setQuantity(prev => Math.max(MIN_QUANTITY, prev - 1));
        } else if (action === "increment") {
            setQuantity(prev => Math.min(MAX_QUANTITY, prev + 1));
        }
    };

    // const handleQuantity = (action: "increment" | "decrement") => {
    //     switch (action) {
    //         case "decrement":
    //             if (quantity > 1) {
    //                 setQuantity(prev => prev - 1);
    //             }
    //             break;
    //         case "increment":
    //             if (quantity < stock) {
    //                 setQuantity(prev => prev + 1);
    //             }
    //             break;
    //     }
    // };

    return (
        <div className="flex flex-col gap-4">
            <h4 className='font-medium'>Añadir al carrito</h4>
            <div className="flex justify-between ">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button className='cursor-pointer text-xl' onClick={() => handleQuantity("decrement")}>-</button>
                        <span>{quantity}</span>
                        <button className='cursor-pointer text-xl' onClick={() => handleQuantity("increment")}>+</button>
                    </div>
                    <div className="text-xs">
                        solo quedan <span className="text-orange-500">4 unidades</span>! <br />{"No"}{" "}te lo puedes perder
                    </div>
                </div>
                <button className='w-36 text-sm rounded-3xl ring-1 ring-notify text-notify py-2 px-4 hover:bg-notify hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-pink-100'>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Add