import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-cover bg-fixed bg-center custom-img h-screen ">
      {/* Overley */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/40  " />
      <div className="p-5 text-white ">
        <h1 className="font-bold  text-5xl ">BriFlight </h1>
        <p className="py-3 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          adipisci dolore{' '}
        </p>
        <button className="relative border py-2 px-4 cursor-pointer z-10 hover:bg-transparent rounded-lg border-gray hover:border-blue-300  hover:text-blue-300  ">
          {' '}
          Sign in{' '}
        </button>
      </div>
    </div>
  );
};

export default Hero;
