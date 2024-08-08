import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cardImage from '../public/google-io-2023-1.png';

const Card = () => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image src={cardImage} alt="Event 1" className="w-full" />

      <div className="p-3">
        <Link href="./details.html" className="font-bold text-lg">
          Google I/O Extended
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">
          Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
        </p>
        <div className="text-[#737373] text-sm mt-1">
          <span>1k Interested</span>
          <span>|</span>
          <span>40K Going</span>
        </div>

        {/* <!-- Buttons --> */}
        <div className="w-full flex gap-4 mt-4">
          <button className="w-full">Interested</button>
          <button className="w-full bg-green-600 hover:bg-green-700">
            Going
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
