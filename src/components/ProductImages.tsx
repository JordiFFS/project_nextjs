"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/4138152/pexels-photo-4138152.jpeg",
        alt: "product"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/30253193/pexels-photo-30253193.jpeg",
        alt: "product"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/6893805/pexels-photo-6893805.jpeg",
        alt: "product"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/10095861/pexels-photo-10095861.jpeg",
        alt: "product"
    },
]

const ProductImages: React.FC = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image src={images[index].url} alt="product" fill sizes="50vw" className="object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4 mt-8 ">
                {images.map((img, i) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>
                        <Image src={img.url} alt="product" fill sizes="30vw" className="object-cover rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages