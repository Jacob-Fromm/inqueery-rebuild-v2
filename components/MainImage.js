import React from 'react'
import Image from 'next/image'

export default function MainImage() {
    return(
        <div className="container mx-auto px-6">
            <h1 className="text-white text-2xl font-medium">Main Image</h1>
            <Image 
                src="/images/logo.png"
                alt="picture of the InQueery Media campus"
                width={5760}
                height={3600}
                layout='responsive'
            />
        </div>
    )
}