import { useState } from 'react';

export default function NameSelector({ hero, setHero }) {

  return (
    <div className="bg-white p-4 flex flex-col items-center w-full">
      <div className="text-2xl font-bold bg-gray-300 px-6 py-2 mb-6 w-full">
        Preencha seu nome
      </div>

      <div className="flex gap-8 justify-center w-[50%]">
            <input
              type="text"
              value={hero.name}
              onChange={(e) => {                    
                setHero((prev) => ({
                    ...prev,
                    name: e.target.value
                }));  
              }}
              className="text-center w-full font-bold border-b border-black focus:outline-none border border-gray-800 p-4"
              placeholder="John"
            />
      </div>
    </div>
  );
}
