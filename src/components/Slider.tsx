"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const slides = [
    {
        id: 1,
        title: "Espacio de trabajo acogedor",
        description: "Un entorno ideal para trabajar desde casa con iluminación natural.",
        img: "https://images.pexels.com/photos/33726900/pexels-photo-33726900.jpeg",
        url: "/",
        bg: "bg-gradient-to-r from-[#F7F3EE] to-[#EAD9C1]" // Beige cálido
    },
    {
        id: 2,
        title: "Estación de trabajo minimalista",
        description: "Diseño sencillo y elegante con monitor de pantalla plana.",
        img: "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg",
        url: "/",
        bg: "bg-gradient-to-r from-[#EFEFEF] to-[#D6D6D6]" // Gris neutro elegante
    },
    {
        id: 3,
        title: "Oficina moderna",
        description: "Espacio organizado y moderno para productividad máxima.",
        img: "https://images.pexels.com/photos/8489670/pexels-photo-8489670.jpeg",
        url: "/",
        bg: "bg-gradient-to-r from-[#F3ECE7] to-[#D5C3B3]" // Tono madera claro
    }
];


const Slider: React.FC = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div
                className="w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                        {/* Contenedor del texto */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-bold'>{slide.title}</h1>
                            <Link href={slide.url}><button className='rounded-md bg-black text-white px-4 py-3'>Comprar ahora!</button></Link>
                        </div>
                        {/* contenedor de la imagen */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image src={slide.img} alt='' fill sizes="100%" className='object-cover' />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {
                    slides.map((slide, index) => (
                        <div
                            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`}
                            key={slide.id}
                            onClick={() => setCurrent(index)}
                        >
                            {
                                current === index && (
                                    <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Slider   