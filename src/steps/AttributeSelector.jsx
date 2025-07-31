import { useState } from 'react';

export default function AttributeSelector({ hero, setHero }) {

  const totalPoints = Object.values(hero.attributes).reduce((a, b) => a + b, 0);


  const rolarDados =  (n) => {
      let total = 0;
      for (let i = 0; i < n; i++) {
          const dado = Math.floor(Math.random() * 4) + 3;
          total += dado;
      }
      return total;
  }

  const increment = (key) => {
    if (totalPoints < hero.maxPoints) {
        setHero((prev) => ({
            ...prev,
            attributes: {
                ...prev.attributes,
                [key]: prev.attributes[key] + 1
            },
            metaAttributes: {
                ...prev.metaAttributes,
                EVA: key == 'AGIL' ? 3 + Math.ceil((prev.attributes[key] + 1)/2) : prev.metaAttributes.EVA,                
                PV: key == 'FORT' ? rolarDados(prev.attributes[key] + 1) + prev.attributes[key] + 1  : prev.metaAttributes.PV,
                PM: key == 'MENT' ? rolarDados(prev.attributes[key] + 1) + prev.attributes[key] + 1  : prev.metaAttributes.PM,
            }
        }));
    }
  };

  const decrement = (key) => {
    if (hero.attributes[key] > 1) {
        setHero((prev) => ({
            ...prev,
            attributes: {
                ...prev.attributes,
                [key]: prev.attributes[key] - 1
            },
            metaAttributes: {
                ...prev.metaAttributes,
                EVA: key == 'AGIL' ? 3 + Math.ceil((prev.attributes[key] - 1)/2) : prev.metaAttributes.EVA,                
                PV: key == 'FORT' ? rolarDados(prev.attributes[key] - 1) + prev.attributes[key] - 1  : prev.metaAttributes.PV,
                PM: key == 'MENT' ? rolarDados(prev.attributes[key] - 1) + prev.attributes[key] - 1  : prev.metaAttributes.PM,
            }
        }));
    }
  };

  return (
    <div className="bg-white p-4 flex flex-col items-center w-full">
      <div className="text-2xl font-bold bg-gray-300 px-6 py-2 mb-6 w-full">
        Preencha seus atributos (máximo de {hero.maxPoints} pontos)
      </div>

      <div className="flex gap-8 justify-center">
        {Object.entries(hero.attributes).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            {/* Título */}
            <div className='h-[30px]'>
                {
                    parseInt(hero.metaAttributes[key+"B"]) > 0 ?
                    "+" + hero.metaAttributes[key+"B"] :
                    ""
                }                
            </div>
            <div className="bg-gray-300 w-24 h-10 flex items-center justify-center border border-black font-semibold">
              {key} 
            </div>

            {/* Valor */}
            <div className="w-24 h-16 flex items-center justify-center border border-black text-2xl">
              {value}
            </div>

            {/* Botões */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => increment(key)}
                className="bg-gray-300 px-3 py-1 text-xl font-bold hover:bg-gray-400"
              >
                +
              </button>
              <button
                onClick={() => decrement(key)}
                className="bg-gray-300 px-3 py-1 text-xl font-bold hover:bg-gray-400"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
