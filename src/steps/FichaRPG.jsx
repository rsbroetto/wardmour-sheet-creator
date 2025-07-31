import React from 'react';

export default function FichaRPG({hero}) {

    { console.log(hero) }

  return (
    <div className='relative bg-white' id="area-impressao">
        <div class="w-100 mx-auto border-gray-800 space-y-4">
      {/* <!-- Cabeçalho --> */}
      <div class="grid grid-cols-3 gap-4 text-center pt-4 pb-4">
        <div>
          <p class="font-bold text-left pl-4">{ hero.name }</p>
          <div class="border-t border-gray-800 text-left pl-4 pt-2">Nome</div>
        </div>
        <div>
          <p class="font-bold text-left pl-4">{ hero.specie.title }</p>
          <div class="border-t border-gray-800 text-left pl-4 pt-2">Espécie</div>
        </div>
        <div>
          <p class="font-bold text-left pl-4">{ hero.archetype.title }</p>
          <div class="border-t border-gray-800 text-left pl-4 pt-2">Arquétipo</div>
        </div>
      </div>

      {/* <!-- Atributos --> */}
      <div class="flex justify-center items-center space-x-4 pt-4 pb-12">
        <div class="border-2 border-gray-800 flex flex-col w-[144px]">
          <p class="font-bold bg-gray-800 text-white h-[40px] flex items-center justify-center">FORT</p>
          <p class="text-3xl flex items-center justify-center h-[104px] w-[144px]">{ hero.attributes.FORT }</p>
        </div>
        <div class="border-2 border-gray-800 flex flex-col relative w-[144px]">
          <p class="font-bold bg-gray-800 text-white h-[40px] flex items-center justify-center">AGIL</p>
          <p class="text-3xl flex items-center justify-center h-[104px] w-[144px]">{ hero.attributes.AGIL }</p>

          <div class="border-2 border-gray-800 text-center w-[60px] flex flex-col justify-center absolute left-[90px] top-[120px]">
            <p class="font-bold bg-gray-800 text-white h-[20px] flex items-center justify-center">EV</p>
            <p className='bg-white h-[40px] flex justify-center items-center'>{ hero.metaAttributes.EVA }</p>
          </div>

        </div>
        <div class="border-2 border-gray-800 flex flex-col w-[144px]">
          <p class="font-bold bg-gray-800 text-white h-[40px] flex items-center justify-center">MENT</p>
          <p class="text-3xl flex items-center justify-center h-[104px] w-[144px]">{ hero.attributes.MENT }</p>
        </div>
        <div class="border-2 border-gray-800 flex flex-col justify-center w-[144px] relative">
          <p class="font-bold bg-gray-800 text-white h-[40px] flex items-center justify-center">ARMA</p>
          <p class="text-3xl flex items-center justify-center h-[104px] w-[144px]">{ hero.metaAttributes.ARMA }</p>
          <div class="flex justify-center gap-1 mt-1 absolute top-[120px] left-[43px]">
            <div class="w-4 h-4 border border-gray-800 rounded-full"></div>
            <div class="w-4 h-4 border border-gray-800 rounded-full"></div>
            <div class="w-4 h-4 border border-gray-800 rounded-full"></div>
          </div>
        </div>
        <div class="border-2 border-gray-800 flex flex-col w-[144px]">
          <p class="font-bold bg-gray-800 text-white h-[40px] flex items-center justify-center">PV</p>
          <p class="text-3xl flex items-center justify-center h-[104px] w-[144px]">{ hero.metaAttributes.PV }</p>
        </div>
        <div class="border-2 border-gray-800 flex flex-col w-[144px]">
          <p class="font-bold bg-gray-800 text-white h-[40px] flex items-center justify-center">PM</p>
          <p class="text-3xl flex items-center justify-center h-[104px] w-[144px]">{ hero.metaAttributes.PM }</p>
        </div>
        
      </div>

      {/* <!-- Habilidades, Equipamento e Domínio Arcano --> */}
      <div class="grid grid-cols-2 gap-4">
        <div className='h-[900px]'>
          <div class="bg-gray-800 text-white font-bold px-2 py-1">HABILIDADES E PERÍCIAS</div>
          <div class="space-y-2 mt-2 text-sm">            
            {hero.specie.bonuses.map((b, i) => (
                <p className='text-left px-6 py-2'>
                    <span class="font-bold">{b.title}:</span>{b.description}
                </p>
            ))}
            {hero.archetype.bonuses.map((b, i) => (
                <p className='text-left px-6 py-2'>
                    <span class="font-bold">{b.title}:</span>{b.description}
                </p>
            ))}
            {hero.skills.map((b, i) => (
                <p className='text-left px-6 py-2'>
                    <span class="font-bold">{b.nome}:</span>{b.descricao}
                </p>
            ))}
          </div>
        </div>
        <div class="space-y-4">
          <div className='h-[550px]'>
            <div class="bg-gray-800 text-white font-bold px-2 py-1">EQUIPAMENTO</div>
            <div class="space-y-2 mt-2 text-sm">
              {hero.archetype.equipament.map((b, i) => (
                <p className='text-left px-6 py-2'>
                    {b.title} {b.type != 'I' ? '('+b.desc+')' : ''}
                </p>
              ))}              
            </div>
          </div>
          <div className='h-[300px]'>
            <div class="bg-gray-800 text-white font-bold px-2 py-1">DOMÍNIO ARCANO</div>
            <div class="space-y-2 mt-2 text-sm">
                {hero.arcane.map((b, i) => (
                    <>
                        <p className='text-left px-6 py-2 font-bold text-lg'>{ b.name }</p>
                        <p className='text-left px-6 py-1'>
                            <span class="font-bold pr-2">Fonte:</span>{b.shortDesc}
                        </p>
                        <p className='text-left px-6 py-1'>
                            <span class="font-bold pr-2">Fissura:</span>{b.shortFiss}
                        </p>
                    </>
                ))}                                
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Experiência e Dinheiro --> */}
      <div class="grid grid-cols-2 gap-4">
        <div className='h-[100px]'>
          <div class="bg-gray-800 text-white font-bold px-2 py-1">EXPERIÊNCIA</div>
          <div class="flex flex-wrap gap-1 mt-2">
            {/* <!-- 20 círculos --> */}
            {Array.from({ length: 38 }).map((_, i) => (
                <div key={i} className="w-5 h-5 border border-gray-800 rounded-full"></div>
            ))}
          </div>
        </div>
        <div>
          <div class="bg-gray-800 text-white font-bold px-2 py-1">DINHEIRO</div>
        </div>
      </div>
    </div>
       
    </div>
  );
}