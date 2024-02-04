import Image from 'next/image'
import React, { useState } from 'react'
import { urlFor } from '../lib/sanity'
interface imageProps {
  images: any
}

const ImageGallery = ({ images }: imageProps) => {
  const [bigImage, setBigImage] = useState(images[1]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 mb-20 mt-10 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={150}
              alt="photo"
              className="h-[150px] w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 h-[600px]">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={500}
          height={600}
          className="h-[600px] w-full object-cover object-center"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  )
}

export default ImageGallery
