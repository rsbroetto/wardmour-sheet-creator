import { useState } from 'react';

const skills = [
  {
    nome: 'Acrobacia',
    descricao: 'Você realiza saltos, rolamentos e manobras com precisão e leveza, mesmo em espaços apertados.',
  },
  {
    nome: 'Armadilhas',
    descricao: 'Você detecta, constrói e desarma armadilhas com engenhosidade e cautela.',
  },
  {
    nome: 'Atuação',
    descricao: 'Você encarna personagens, emoções e disfarces com talento cênico convincente.',
  },
  {
    nome: 'Negociação',
    descricao: 'Você sabe extrair vantagens e acordos favoráveis em qualquer troca ou trato.',
  },
  {
    nome: 'Montaria',
    descricao: 'Você monta, guia e combate sobre cavalos ou outras criaturas com firmeza e controle.',
  },
  {
    nome: 'Culinária',
    descricao: 'Você prepara refeições nutritivas, reconfortantes ou até exóticas com maestria.',
  },
  {
    nome: 'Disfarce',
    descricao: 'Você altera sua aparência, voz e gestos para enganar ou se infiltrar.',
  },
  {
    nome: 'Escalada',
    descricao: 'Você sobe muros, árvores e penhascos com agilidade e técnica.',
  },
  {
    nome: 'Etiqueta',
    descricao: 'Você compreende e aplica regras sociais, nobres ou cerimoniais com elegância.',
  },
  {
    nome: 'Falsificação',
    descricao: 'Você copia selos, assinaturas ou documentos com precisão criminosa.',
  },
  {
    nome: 'Furtividade',
    descricao: 'Você se move silenciosamente, evitando ser visto, ouvido ou notado.',
  },
  {
    nome: 'Herbalismo',
    descricao: 'Você conhece plantas medicinais e venenosas, e sabe como usá-las.',
  },
  {
    nome: 'História',
    descricao: 'Você domina relatos, eventos e lendas do passado com profundidade.',
  },
  {
    nome: 'Intimidação',
    descricao: 'Você impõe medo com palavras, gestos ou pura presença física.',
  },
  {
    nome: 'Investigação',
    descricao: 'Você observa pistas, conexões e inconsistências com mente afiada.',
  },
  {
    nome: 'Liderança',
    descricao: 'Sua presença inspira, organiza e direciona aliados com confiança.',
  },
  {
    nome: 'Idiomas',
    descricao: 'Você fala, lê e interpreta múltiplos idiomas e dialetos com fluência.',
  },
  {
    nome: 'Arcanismo',
    descricao: 'Você compreende teorias, símbolos e efeitos da magia arcana.',
  },
  {
    nome: 'Religião',
    descricao: 'Você conhece ritos, doutrinas e mitos de deuses e cultos.',
  },
  {
    nome: 'Navegação',
    descricao: 'Você lê mapas, astros e sinais naturais para guiar-se por mar ou terra.',
  },
  {
    nome: 'Percepção',
    descricao: 'Você nota detalhes sutis, movimentos, sons e mudanças no ambiente.',
  },
  {
    nome: 'Persuasão',
    descricao: 'Você convence, influencia ou engana com fala habilidosa.',
  },
  {
    nome: 'Primeiros Socorros',
    descricao: 'Você estabiliza feridos e trata lesões com rapidez básica.',
  },
  {
    nome: 'Rastreamento',
    descricao: 'Você segue pegadas, odores e sinais deixados por criaturas ou pessoas.',
  },
  {
    nome: 'Sobrevivência',
    descricao: 'Você encontra abrigo, comida e segurança na natureza selvagem.',
  },
  {
    nome: 'Apotecaria',
    descricao: 'Você cria bálsamos, tônicos e venenos com precisão e cuidado.',
  },
  {
    nome: 'Astrologia',
    descricao: 'Você interpreta estrelas e signos para prever eventos ou ler destinos.',
  },
  {
    nome: 'Runologia',
    descricao: 'Você lê, escreve e ativa runas mágicas com conhecimento ancestral.',
  },
  {
    nome: 'Ferreiro',
    descricao: 'Você forja, repara e modifica armas, armaduras e ferramentas metálicas.',
  },
  {
    nome: 'Pintura/Escultura',
    descricao: 'Você cria arte com cor, forma e expressão técnica e estética.',
  },
  {
    nome: 'Caça',
    descricao: 'Você rastreia, abate e prepara animais com eficiência e respeito.',
  },
  {
    nome: 'Agricultura',
    descricao: 'Você cultiva, planta e colhe com conhecimento do solo e das estações.',
  },
  {
    nome: 'Escapismo',
    descricao: 'Você se solta de cordas, correntes e prisões com destreza surpreendente.',
  },
];


export default function SkillSelection({hero, setHero}) {
  const [selecionadas, setSelecionadas] = useState([]);

  const toggleSkill = (skill) => {
    const jaSelecionada = selecionadas.includes(skill);

    if (jaSelecionada) {
        setSelecionadas((prev) => {
            let updated = prev.filter((s) => s !== skill)
            setHero((prevh) => ({
                ...prevh, 
                skills: skills.filter(s => updated.includes(s.nome)),
            }));
            return updated
        });
    } else if (selecionadas.length < hero.maxSkills) {
        setSelecionadas((prev) => {
            let updated = [...prev, skill]
            setHero((prevh) => ({
                ...prevh, 
                skills: skills.filter(s => updated.includes(s.nome)),
            }));
            return updated
        });
    }

    // setHero((prev) => ({
    //     ...prev, 
    //     skills: selecionadas,            
    // }));
  };

  return (
    <div className="min-h-screen bg-white md:p-4 p-0 flex flex-col items-start mx-auto">
      <div className="text-2xl font-bold bg-gray-300 px-6 py-2 mb-6 w-full text-left">
        Escolha suas Perícias (máximo {hero.maxSkills} perícias)
      </div>

      <div className="flex flex-col gap-6 pl-2">
        {skills.map((skill) => (
          <label key={skill.nome} className="flex items-start gap-2 text-left">
            <input
              type="checkbox"
              checked={selecionadas.includes(skill.nome)}
              onChange={() => toggleSkill(skill.nome)}
              className="mt-1 w-5 h-5"
            />
            <p>
              <strong>{skill.nome}:</strong> {skill.descricao}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
}
