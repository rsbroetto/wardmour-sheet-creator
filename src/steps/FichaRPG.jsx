import React from 'react';

export default function FichaRPG({hero}) {
    
  return (
    <div className='relative bg-brand-light' id="area-impressao">
    <div className="w-100 mx-auto border-gray-800 space-y-4">
      {/* <!-- Cabeçalho --> */}
      <div className="grid grid-cols-3 gap-4 text-center pt-4 pb-4">
        <div>
          <p className="font-bold text-left pl-4 text-brand-dark">{ hero.name }</p>
          <div className="border-t border-brand-dark text-left pl-4 pt-2 text-brand-dark">Nome</div>
        </div>
        <div>
          <p className="font-bold text-left pl-4 text-brand-dark">{ hero.specie.title }</p>
          <div className="border-t border-brand-dark text-left pl-4 pt-2 text-brand-dark">Espécie</div>
        </div>
        <div>
          <p className="font-bold text-left pl-4 text-brand-dark">{ hero.archetype.title }</p>
          <div className="border-t border-brand-dark text-left pl-4 pt-2 text-brand-dark">Arquétipo</div>
        </div>
      </div>

      {/* <!-- Atributos --> */}
      <div className="flex justify-center items-center space-x-4 pt-4 pb-12">
        <div className="border-2 border-brand-dark flex flex-col w-[144px]">
          <p className="font-bold bg-brand-dark text-brand-light h-[40px] flex items-center justify-center">FORT</p>
          <p className="text-3xl flex items-center justify-center h-[104px] w-[144px] text-brand-dark">{ hero.attributes.FORT + hero.metaAttributes.FORTB }</p>
        </div>
        <div className="border-2 border-brand-dark flex flex-col relative w-[144px]">
          <p className="font-bold bg-brand-dark text-brand-light h-[40px] flex items-center justify-center">AGIL</p>
          <p className="text-3xl flex items-center justify-center h-[104px] w-[144px] text-brand-dark">{ hero.attributes.AGIL + hero.metaAttributes.AGILB }</p>

          <div className="border-2 border-brand-dark text-center w-[60px] flex flex-col justify-center absolute left-[90px] top-[120px]">
            <p className="font-bold bg-brand-dark text-brand-light h-[20px] flex items-center justify-center">EV</p>
            <p className='bg-brand-light h-[40px] flex justify-center items-center text-brand-dark'>{ hero.metaAttributes.EVA }</p>
          </div>

        </div>
        <div className="border-2 border-brand-dark flex flex-col w-[144px]">
          <p className="font-bold bg-brand-dark text-brand-light h-[40px] flex items-center justify-center">MENT</p>
          <p className="text-3xl flex items-center justify-center h-[104px] w-[144px] text-brand-dark">{ hero.attributes.MENT + hero.metaAttributes.MENTB }</p>
        </div>
        <div className="border-2 border-brand-dark flex flex-col justify-center w-[144px] relative">
          <p className="font-bold bg-brand-dark text-brand-light h-[40px] flex items-center justify-center">ARMA</p>
          <p className="text-3xl flex items-center justify-center h-[104px] w-[144px] text-brand-dark">{ hero.metaAttributes.ARMA }</p>
          <div className="flex justify-center gap-1 mt-1 absolute top-[120px] left-[43px]">
            <div className="w-4 h-4 border border-brand-dark rounded-full"></div>
            <div className="w-4 h-4 border border-brand-dark rounded-full"></div>
            <div className="w-4 h-4 border border-brand-dark rounded-full"></div>
          </div>
        </div>
        <div className="border-2 border-brand-dark flex flex-col w-[144px]">
          <p className="font-bold bg-brand-dark text-brand-light h-[40px] flex items-center justify-center">PV</p>
          <p className="text-3xl flex items-center justify-center h-[104px] w-[144px] text-brand-dark">{ hero.metaAttributes.PV }</p>
        </div>
        <div className="border-2 border-brand-dark flex flex-col w-[144px]">
          <p className="font-bold bg-brand-dark text-brand-light h-[40px] flex items-center justify-center">PM</p>
          <p className="text-3xl flex items-center justify-center h-[104px] w-[144px] text-brand-dark">{ hero.metaAttributes.PM }</p>
        </div>
        
      </div>

      {/* <!-- Habilidades, Equipamento e Domínio Arcano --> */}
      <div className="grid grid-cols-2 gap-4">
        <div className='h-[900px]'>
          <div className="bg-brand-dark text-brand-light font-bold px-2 py-1">HABILIDADES E PERÍCIAS</div>
          <div className="space-y-2 mt-2 text-sm">            
            {hero.specie.bonuses.map((b, i) => (
                <p className='text-left px-6 py-2 text-brand-dark'>
                    <span className="font-bold">{b.title}:</span>{b.description}
                </p>
            ))}
            {hero.archetype.bonuses.map((b, i) => (
                <p className='text-left px-6 py-2 text-brand-dark'>
                    <span className="font-bold">{b.title}:</span>{b.description}
                </p>
            ))}
            {hero.skills.map((b, i) => (
                <p className='text-left px-6 py-2 text-brand-dark'>
                    <span className="font-bold">{b.nome}:</span>{b.descricao}
                </p>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className='h-[550px]'>
            <div className="bg-brand-dark text-brand-light font-bold px-2 py-1">EQUIPAMENTO</div>
            <div className="space-y-2 mt-2 text-sm">
              {hero.archetype.equipament.map((b, i) => (
                <p className='text-left px-6 py-2 text-brand-dark'>
                    {b.title} {b.type != 'I' ? '('+b.desc+')' : ''}
                </p>
              ))}              
            </div>
          </div>
          <div className='h-[300px]'>
            <div className="bg-brand-dark text-brand-light font-bold px-2 py-1">DOMÍNIO ARCANO</div>
            <div className="space-y-2 mt-2 text-sm">
                {hero.arcane.map((b, i) => (
                    <div className='text-brand-dark'>
                        <p className='text-left px-6 py-2 font-bold text-lg'>{ b.name }</p>
                        <p className='text-left px-6 py-1'>
                            <span className="font-bold pr-2">Fonte:</span>{b.shortDesc}
                        </p>
                        <p className='text-left px-6 py-1'>
                            <span className="font-bold pr-2">Fissura:</span>{b.shortFiss}
                        </p>
                    </div>
                ))}                                
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Experiência e Dinheiro --> */}
      <div className="grid grid-cols-2 gap-4">
        <div className='h-[100px]'>
          <div className="bg-brand-dark text-brand-light font-bold px-2 py-1">EXPERIÊNCIA</div>
          <div className="flex flex-wrap gap-1 mt-2">
            {/* <!-- 20 círculos --> */}
            {Array.from({ length: 38 }).map((_, i) => (
                <div className="w-5 h-5 border border-brand-dark rounded-full"></div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-brand-dark text-brand-light font-bold px-2 py-1">DINHEIRO</div>
        </div>
      </div>
    </div>
       
    </div>
  );
}