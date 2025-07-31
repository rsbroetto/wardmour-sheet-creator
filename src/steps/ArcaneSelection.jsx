import { useState } from 'react';
import arcanesData from '../data/arcanes';


export default function ArcaneSelection({hero, setHero}) {
  const [selected, setSelected] = useState('Undef');

  const { desc, fiss, shortDesc, shortFiss } = arcanesData[selected];

  return (
    <div className="flex flex-col w-full bg-white p-4">
      <div className="text-2xl font-bold bg-gray-200 px-4 py-2 mb-4">
        Selecione seu Domínio Arcano
      </div>

      <div className="flex flex-1 border-t border-gray-300">
        {/* Coluna Esquerda */}
        <div className="w-1/4 flex flex-col gap-4 pr-4 pt-4">
          {Object.keys(arcanesData).filter(s => s != 'Undef').map((arc) => (
            <label
              key={arc}
              className={`px-4 py-2 text-center border cursor-pointer ${
                selected === arc ? 'bg-gray-400 text-white font-semibold' : 'bg-gray-200'
              }`}
            >
              <input
                type="radio"
                name="species"
                value={arc}
                checked={selected === arc}
                onChange={() => {
                    setSelected(arc)
                    setHero((prev) => ({
                        ...prev,
                        arcane: [arcanesData[arc]]
                    }));                    
                }}
                className="hidden"
              />
              {arc}
            </label>
          ))}
        </div>

        {/* Coluna Direita */}
        <div className="w-3/4 pl-4 pt-4 flex flex-col gap-4">

            {selected === 'Undef' ?
                <p className='text-2xl h-[100px] flex items-center justify-center' ><span>selecione seu domínio arcano</span></p>
            :
                <>
                    <p className="text-justify text-sm px-2 leading-loose">
                        <span className='font-bold'>Fonte:</span>
                        {desc}
                    </p>
                    <p className="text-justify text-sm px-2 leading-loose">
                        <span className='font-bold'>Fissura:</span>
                        {fiss}
                    </p>
                </>
            }               
        </div>
      </div>
    </div>
  );
}
