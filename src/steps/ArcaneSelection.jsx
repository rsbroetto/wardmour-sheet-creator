import { useState } from 'react';
import arcanesData from '../data/arcanes';


export default function ArcaneSelection({hero, setHero}) {
  const [selected, setSelected] = useState('Undef');

  const { desc, fiss, shortDesc, shortFiss } = arcanesData[selected];

  return (
    <div className="flex flex-col w-full bg-white md:p-4 p-0">
      <div className="text-2xl font-bold bg-gray-200 px-4 py-2 mb-4">
        Selecione seu Domínio Arcano
      </div>

      <div className="flex flex-col md:flex-row flex-1 border-t border-gray-300">
        {/* Coluna Esquerda */}
        <div className="md:w-1/4 w-100 flex flex-row md:flex-col md:gap-4 md:pr-4 md:pt-4 overflow-auto flex-nowrap md:justify-start justify-center">
          {Object.keys(arcanesData).filter(s => s != 'Undef').map((arc) => (
            <label
              key={arc}
              className={`md:px-4 md:py-2 py-6 px-6 text-center border cursor-pointer ${
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
        <div className="md:w-3/4 w-100 md:pl-4 md:pt-4 pl-0 pt-0 flex flex-col md:gap-4 gap-0">

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
