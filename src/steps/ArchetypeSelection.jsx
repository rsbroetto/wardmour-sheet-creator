import { useState } from 'react';
import archetypesData from '../data/archetypes';

const calcArma = (equip) => {
    let c = equip.filter(e => e.type === 'A').reduce((sum, e) => sum + parseInt(e.desc), 0)
    return c
}

export default function ArchetypeSelection({hero, setHero}) {
  const [selected, setSelected] = useState('Undef');

  const { bonuses, description, image } = archetypesData[selected];

  return (
    <div className="flex flex-col w-full bg-white md:p-4 p-0">
      <div className="text-2xl font-bold bg-gray-200 px-4 py-2 md:mb-4 mb-0">
        Selecione seu arquetipo
      </div>

      <div className="flex flex-1 flex-col md:flex-row border-t border-gray-300">
        {/* Coluna Esquerda */}
        <div className="md:w-1/4 flex flex-row md:flex-col md:gap-4 md:pr-4 md:pt-4 overflow-auto flex-nowrap whitespace-nowrap md:justify-start justify-left">
          {Object.keys(archetypesData).filter(s => s != 'Undef').map((archetype) => (
            <label
              key={archetype}
              className={`md:px-4 md:py-2 py-6 px-6 text-center border cursor-pointer ${
                selected === archetype ? 'bg-gray-400 text-white font-semibold' : 'bg-gray-200'
              }`}
            >
              <input
                type="radio"
                name="archetypes"
                value={archetype}
                checked={selected === archetype}
                onChange={() => {
                    setSelected(archetype)
                    setHero((prev) => ({
                        ...prev,
                        metaAttributes: {
                            ...prev.metaAttributes,
                            ARMA: calcArma(archetypesData[archetype].equipament)
                        },
                        archetype: {
                            ...prev.archetype,
                            title: archetype,
                            bonuses: archetypesData[archetype].bonuses,
                            equipament: archetypesData[archetype].equipament
                        },
                    }));
                }}
                className="hidden"
              />
              {archetype}
            </label>
          ))}
        </div>

        {/* Coluna Direita */}
        <div className="md:w-3/4 w-100 md:pl-4 md:pt-4 pl-0 pt-0 flex flex-col md:gap-4 gap-0">

          {
            selected === 'Undef' ?
                <p className='text-2xl h-[100px] flex items-center justify-center' ><span>selecione seu arquetipo</span></p>
            :
                <>
                    <div className="flex justify-center md:p-[30px] p-0 pt-1">
                        <img src={image} alt={selected} className="md:w-[80%] w-[100%] object-contain" />
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

                    <p className="text-justify text-sm md:px-2 p-4 leading-loose">{description}</p>
                </>
          }    
        </div>
      </div>
    </div>
  );
}
