import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  num: string; // use lowercase `string` (not `String`)
  title: string;
  description: string;
};

const HowitWorkCard = ({ image, num, title, description }: Props) => {
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="object-contain mx-auto"
        />
        <div className="w-14 h-14 bg-pink-600 text-white text-xl font-bold flex items-center justify-center absolute top-0 left-0 rounded-full">
          {num}
        </div>
      </div>
      <h2 className="mt-6 text-lg sm:text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <p className="mt-4 text-base font-bold text-blue-800 dark:text-blue-400 hover:text-blue-600 transition-all duration-150 cursor-pointer text-center"> Start Earning &rarr;</p>
    </div>
  );
};

export default HowitWorkCard;
