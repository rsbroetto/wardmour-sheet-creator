import { useState } from 'react';
import speciesData from '../data/species';

export default function SpecieSelection({hero, setHero}) {
  
  const [selected, setSelected] = useState('Undef');
  const { bonuses, description, image } = speciesData[selected];

  return (
    <div className="flex flex-col w-full bg-white p-4">
      <div className="text-2xl font-bold bg-gray-200 px-4 py-2 mb-4">
        Espécie
      </div>

      <div className="flex flex-1 border-t border-gray-300">
        {/* Coluna Esquerda */}
        <div className="w-1/4 flex flex-col gap-4 pr-4 pt-4">
          {Object.keys(speciesData).filter(s => s != 'Undef').map((specie) => (
            <label
              key={specie}
              className={`px-4 py-2 text-center border cursor-pointer ${
                selected === specie ? 'bg-gray-400 text-white font-semibold' : 'bg-gray-200'
              }`}
            >
              <input
                type="radio"
                name="species"
                value={specie}
                checked={selected === specie}
                onChange={() => {
                    setSelected(specie)
                    setHero((prev) => ({
                        ...prev,
                        maxPoints: specie === 'Humano' ? 7 : 6,
                        maxSkills: specie === 'Humano' ? 3 : 2,
                        metaAttributes: {
                            ...prev.metaAttributes,
                            FORTB: specie === 'Anão' ? 1 : 0,
                            AGILB: specie === 'Elfo' ? 1 : 0,
                            MENTB:  specie === 'Sylvarin' ? 1 : 0,
                        },
                        specie: {
                            ...prev.specie,
                            title: specie,
                            bonuses: speciesData[specie].bonuses
                        },
                    }));                    
                }}
                className="hidden"
              />
              {specie}
            </label>
          ))}
        </div>

        {/* Coluna Direita */}
        <div className="w-3/4 pl-4 pt-4 flex flex-col gap-4">
          {
            selected === 'Undef' ?
                <p className='text-2xl h-[100px] flex items-center justify-center' ><span>selecione sua espécie</span></p>
            :
                <>
                    <div className="flex justify-center p-[30px]">
                        <img src={image} alt={selected} className="w-[80%] object-contain" />
                    </div>

                    <div className="bg-gray-200 p-4 rounded">
                        <ul className="list-disc list-inside pl-4">
                        {bonuses.map((b, i) => (
                            <li key={i} className='text-left' >
                                <span className='font-bold'>{b.title}</span> {b.description}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <p className="text-justify text-sm px-2 leading-loose">{description}</p>
                </>
          }          
        </div>
      </div>
    </div>
  );
}
