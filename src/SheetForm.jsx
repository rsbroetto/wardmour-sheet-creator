import { useState } from 'react';
import SpecieSelection from './steps/SpecieSelection';
import ArchetypeSelection from './steps/ArchetypeSelection';
import AttributeSelector from './steps/AttributeSelector';
import SkillSelection from './steps/SkillSelection';
import ArcaneSelection from './steps/ArcaneSelection';
import FichaRPG from './steps/FichaRPG';
import NameSelector from './steps/NameSelector';

import defaultHero from './data/defaultHero'

function SheetForm() {
    const [hero, setHero] = useState(defaultHero);

    const [passoAtual, setPassoAtual] = useState(0);

    const passos = [        
        <div>
            <SpecieSelection hero={hero} setHero={setHero} />
        </div>,
        <div>
            <ArchetypeSelection hero={hero} setHero={setHero} />
        </div>,
        <div>
            <AttributeSelector hero={hero} setHero={setHero}/>
        </div>,
        <div>
            <SkillSelection hero={hero} setHero={setHero} />
        </div>,
        <div>
            <ArcaneSelection hero={hero} setHero={setHero} />
        </div>,
        <div>
            <NameSelector hero={hero} setHero={setHero} />
        </div>,
        <div>
            <FichaRPG hero={hero}/>
        </div>,
    ];

    const avancar = () => {
        if (passoAtual < passos.length - 1) { 
            
            let inc = 1

            if (passoAtual == 3 && hero.archetype.title !== 'Mago' ){
                inc = 2
            }
            
            setPassoAtual(passoAtual + inc);
        }
    };

    const voltar = () => {
        if (passoAtual > 0) {
        setPassoAtual(passoAtual - 1);
        }
    };

    const isDisabled = () => {
        // specie
        if(passoAtual==0 && hero.specie.title === ''){
            return true
        }

        // archetype
        if(passoAtual==1 && hero.archetype.title === ''){
            return true
        }

        // atributos
        if(passoAtual==2 && hero.attributes.FORT+hero.attributes.AGIL+hero.attributes.MENT < hero.maxPoints){
            return true
        }

        // pericias
        if(passoAtual==3 && hero.skills.length < hero.maxSkills ){
            return true
        }

        // arcane
        if(passoAtual==4 && hero.arcane.length === 0 ){
            return true
        }

        // name
        if(passoAtual==5 && hero.name === '' ){
            return true
        }

        return false
    };
 
    return (
        <div className='flex'>

            <div className="mx-auto p-6 bg-white rounded shadow flex flex-col gap-0 w-full">
                {/* <h2 className="text-xl font-bold">Passo {passoAtual + 1}</h2> */}

                <div className="p-4">{passos[passoAtual]}</div>

                <div className="flex justify-end">
                    {
                        passoAtual == 6 ?
                            <button
                            onClick={() => window.print()}
                                className="bg-blue-500 text-white px-4 py-2 disabled:opacity-50 justify-end"
                            >imprimir</button>
                        :
                            <button
                            onClick={avancar}
                            disabled={isDisabled()}
                            className="bg-blue-500 text-white px-4 py-2 disabled:opacity-50 justify-end"
                            >
                            Avançar
                            </button>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default SheetForm;
