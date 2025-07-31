import sentinelaImage from '../assets/images/sentinela.png'
import mercenarioImage from '../assets/images/mercenario.png'
import batedorImage from '../assets/images/batedor.png'
import cacadorImage from '../assets/images/cacador.png'
import magoImage from '../assets/images/mago.png'
import trapaceiroImage from '../assets/images/trapaceiro.png'
import espiaoImage from '../assets/images/espiao.png'
import alquimistaImage from '../assets/images/alquimista.png'
import curandeiroImage from '../assets/images/curandeiro.png'
import cacadorDeMonstrosImage from '../assets/images/cacador-de-monstros.png'



const archetypesData = {
  Undef: {bonuses:[], description:'Selecione sua Espécie', image: ''},
  Sentinela: {
    bonuses: [
        {title: 'Marca do guerreiro', description: 'você pode usar armas e armaduras pesadas'}
    ],
    equipament: [
        {title: 'Espada', desc: 'F+1', type: 'M'},
        {title: 'Armadura de Placas de Metal', desc: '2', type: 'A' },
        {title: 'Escudo Redondo de Madeira', desc: '1', type: 'A' },
    ],
    description: 'A Sentinela é o vigia imperturbável, o defensor que nunca abandona seu posto e cuja presença significa segurança para os aliados e terror para os inimigos. Mais do que um simples guarda ou soldado, a Sentinela é treinada para manter posições, proteger pontos estratégicos e resistir a investidas implacáveis. Seja sobre as muralhas de um castelo, vigiando os portões de uma cidade ou guardando as trilhas de uma floresta amaldiçoada, a Sentinela permanece atenta, paciente e inflexível. Ela não busca a glória do ataque, mas o orgulho de manter seus companheiros vivos e os inimigos afastados. Com escudo em punho, lança ou espada à mão e olhos sempre vigilantes, a Sentinela se destaca por sua capacidade de antecipar movimentos, erguer defesas rápidas e proteger aliados com o próprio corpo.',
    image: sentinelaImage, // substitua pelo caminho correto da imagem
  },
  Mercenário: {
    bonuses: [
        {title: 'Fúria em combate', description: 'você consegue usar 2 armas de forma simultânea. enquanto estiver nessa posição, adicione +1 ao seu poder de ataque e -1 na sua agilidade.'}
    ],
    equipament: [
        {title: 'Espada', desc: 'F+1', type: 'M'},
        {title: 'Espada Curta', desc: 'F+1', type: 'M'},
        {title: 'Mochila de Viagem', desc: '1', type: 'I'},
    ],
    description: 'O Mercenário é o guerreiro sem bandeira, o espadachim contratado, o combatente forjado nas batalhas alheias. Diferente de cavaleiros de ordens sagradas ou soldados de reinos, o Mercenário luta por aquilo que se pode carregar: ouro, provisões, influência ou vingança. Treinado no caos da guerra e na dureza das estradas, sabe que não há honra em morrer sem pagamento e que a sobrevivência depende mais de esperteza do que de bravura cega. Alguns Mercenários servem em companhias organizadas, outros viajam sozinhos, oferecendo lâminas a quem pagar mais — seja defendendo caravanas, sitiando fortalezas ou caçando monstros. Cínico, endurecido e com cicatrizes de batalhas que nem sempre constam nas canções, o Mercenário conhece o preço da vida e o valor do aço.',
    image: mercenarioImage,
  },
  Batedor: {
    bonuses: [
        {title: 'Precavido', description: 'você consegue detectar armadilhas com um teste de MENT e desarma-las com um teste de AGIL.'}
    ],
    equipament: [
        {title: 'Adaga', desc: 'A+0', type: 'S'},
        {title: 'Arco Curto', desc: 'A+1', type: 'S'},
        {title: 'Armadura de Couro', desc: '1', type: 'A'},
        {title: 'Tocha', desc: 'x3', type: 'I'},
    ],
    description: 'O Batedor é o explorador, mensageiro e sentinela das fronteiras selvagens. Ágil, discreto e experiente, ele é aquele que caminha à frente do grupo, desbravando territórios perigosos, detectando armadilhas naturais ou emboscadas, e localizando trilhas seguras em meio a florestas densas, montanhas traiçoeiras ou ruínas.',
    image: batedorImage,
  },
  Caçador: {
    bonuses: [
        {title: 'Ataque Surpresa', description: 'Enquanto estiver oculto, consegue realizar um ataque com +1 no seu nível de concentração'}
    ],
    equipament: [
        {title: 'Besta', desc: 'A+1', type: 'S'},
        {title: 'Luvas de Couro Reforçado', desc: '1', type: 'A'},
        {title: 'Corda Gancho', desc: '', type: 'I'}
    ],
    description: 'O Caçador é o mestre da floresta, o predador que conhece a linguagem do vento e o rastro dos animais. Mais do que um simples arqueiro ou rastreador, o Caçador vive em harmonia com as terras selvagens, sabendo onde encontrar alimento, água, abrigo e perigos. Em vilarejos e cidades, os Caçadores são respeitados por sua habilidade em prover carne, peles e ervas raras. Em tempos de guerra, tornam-se patrulheiros e batedores, capazes de eliminar sentinelas silenciosamente ou guiar tropas por rotas ocultas.',
    image: cacadorImage,
  },
  Mago: {
    bonuses: [
        {title: 'Natureza Arcana', description: 'você consegue utilizar pontos de magia para acessar um domínio mágico'}
    ],
    equipament: [
        {title: 'Cajado de Madeira', desc: 'F+0', type: 'M'},
        {title: 'Roupão Antigo', desc: '0', type: 'A'},
        {title: 'Kit de Escriba', desc: '', type: 'I'},
        {title: 'Frasco de Tinta e Pena', desc: '', type: 'I'}
    ],
    description: 'O Mago é o estudioso das forças arcanas, o manipulador dos segredos antigos e o detentor de saberes que desafiam as leis naturais. Enquanto guerreiros empunham espadas e caçadores dependem de flechas, o Mago molda a realidade com palavras esquecidas e gestos ritualísticos, extraindo poder de fontes que poucos ousam sequer contemplar. Seja como conselheiro de reis, eremita em uma torre esquecida ou andarilho em busca de grimórios proibidos, o Mago vive entre dois mundos: o terreno e o etéreo. Teme-se seu poder, respeita-se sua sabedoria e desconfia-se de seus motivos. Pois onde há magia, há consequências. Alguns Magos se dedicam à evocação dos elementos, outros à manipulação da mente, ao controle do tempo ou à invocação de entidades de outros planos. Mas todos compartilham a mesma maldição: o conhecimento sempre cobra seu preço.',
    image: magoImage,
  },
  Trapaceiro: {
    bonuses: [
        {title: 'Ladino', description: 'vocè é extremamente presuasivo e consegue abrir portas trancadas com um teste de AGIL.'}
    ],
    equipament: [
        {title: 'Espada Curta', desc: 'F+1', type: 'M'},
        {title: 'Dardos', desc: 'A+0', type: 'S'},
        {title: 'Kit de Ladrão', desc: '', type: 'I'},
        {title: 'Sineta de Bronze', desc: '', type: 'I'}
    ],
    description: 'O Trapaceiro é o mestre da lábia, o artista da enganação, o oportunista que sabe que, em um mundo de aço e magia, a mente afiada e a língua solta valem tanto quanto qualquer espada. Diferente dos guerreiros que confiam na força e dos magos que confiam no saber, o Trapaceiro aposta na sorte, no blefe e na astúcia para se safar das situações mais perigosas. Capaz de iludir guardas, blefar em tavernas e desaparecer em meio à multidão, o Trapaceiro é um sobrevivente nato. Alguns atuam como batedores de carteira, outros como vigaristas de nobres, espiões de guildas ou espertalhões de estrada. Para ele, a fronteira entre certo e errado é apenas uma questão de quem está contando a história.',
    image: trapaceiroImage, // substitua pelo caminho correto da imagem
  },
  Espião: {
    bonuses: [
        {title: 'Minucioso', description: 'você consegue realizar tarefas furtivas com facilidade e pode perceber se alguém está mentindo com um teste de MENT.'}
    ],
    equipament: [
        {title: 'Dardos', desc: 'A+0', type: 'S'},
        {title: 'Adaga', desc: 'A+0', type: 'S'},
        {title: 'Algibeira para moedas', desc: '', type: 'I'}
    ],
    description: 'O Espião é o mestre das informações ocultas, o rosto anônimo por trás das intrigas de reis e conselheiros. Enquanto exércitos lutam e magos conjuram, o Espião vence suas batalhas nas sombras, com palavras sussurradas, alianças secretas e punhais escondidos. Treinado para se infiltrar, ouvir o que não deveria e manipular pessoas sem levantar suspeitas, o Espião pode ser tanto um servo fiel de uma coroa quanto um traidor vendendo segredos para o inimigo. Disfarces, códigos e falsas identidades são suas armas, e uma boa mentira, sua proteção mais valiosa. Em tempos de guerra, são enviados para sabotar tropas, corromper generais ou assassinar líderes. Em tempos de paz, vigiam cortes, guildas e cidades, mantendo os olhos atentos para qualquer movimento que possa alterar o equilíbrio de poder.',
    image: espiaoImage,
  },
  Alquimista: {
    bonuses: [
        {title: 'Dom da Química', description: 'você consegue fabricar poções com ingredientes encontrados na natureza'}
    ],
    equipament: [
        {title: 'Bastão', desc: 'F+0', type: 'M'},
        {title: 'Funda', desc: 'A+0', type: 'S'},
        {title: 'Kit de Alquimia', desc: '', type: 'I'}
    ],
    description: 'O Alquimista é o estudioso das substâncias, o manipulador de essências e o obcecado pelo segredo da transmutação. Em um mundo de espadas e feitiços, ele escolhe o caminho da ciência arcana, combinando ervas raras, metais preciosos e elementos misteriosos para criar poções, explosivos, venenos e elixires capazes de alterar o curso de uma batalha ou curar doenças que nem os clérigos ousam tratar. Enquanto magos invocam relâmpagos e guerreiros esmagam crânios, o Alquimista vence suas lutas com frascos fervilhantes, misturas aromáticas e fórmulas inscritas em pergaminhos manchados de tinta e sangue. Muitos trabalham em oficinas escondidas ou torres de estudo, outros viajam o mundo em busca de ingredientes esquecidos e artefatos antigos. Cobiçados por reis e temidos por inimigos, Alquimistas são tanto curandeiros quanto assassinos, capazes de criar vida artificial ou destruir exércitos com uma única poção instável.',
    image: alquimistaImage,
  },
  Curandeiro: {
    bonuses: [
        {title: 'Primeiros Socorros', description: 'você consegue fabricar poções de cura e antídotos com ingredientes encontrados na natureza'}
    ],
    equipament: [
        {title: 'Bastão', desc: 'F+0', type: 'M'},
        {title: 'Capa grossa com capuz', desc: '0', type: 'A'},
    ],
    description: 'O Curandeiro é o guardião da vida, o conhecedor de ervas, rituais e técnicas ancestrais de cura. Em um mundo onde a guerra, a doença e os venenos ceifam vidas com a mesma frequência que as espadas, o Curandeiro é muitas vezes a única esperança entre a vida e a morte. Enquanto clérigos canalizam milagres divinos e alquimistas misturam substâncias instáveis, o Curandeiro atua com mãos firmes e saber antigo. Ele entende as propriedades das plantas, a maneira como os corpos adoecem e os sinais que anunciam a morte ou a recuperação. Alguns servem em cortes e templos, outros percorrem estradas e vilarejos oferecendo auxílio a quem precisa — e não são poucos os que arriscam a própria vida para salvar guerreiros em meio à batalha ou tratar doenças em regiões amaldiçoadas.',
    image: curandeiroImage,
  },
  "Caçador de Monstros": {
    bonuses: [
        {title: 'Nêmesis', description: 'você ganha +1 em concentração quando enfrenta criaturas naturais e possui imunidade à medo '}
    ],
    equipament: [
        {title: 'Machado de mão', desc: 'F+1', type: 'M'},
        {title: 'Escudo', desc: '1', type: 'A'},        
        {title: 'Cota de Malha leve', desc: '1', type: 'A'},
        {title: 'Martelo pequeno e estacas', desc: '', type: 'I'},
    ],
    description: 'O Caçador de Monstros é o guerreiro solitário que caminha pelas trilhas esquecidas e ruínas amaldiçoadas onde as criaturas da noite e bestas sobrenaturais espreitam. Nascido da necessidade de enfrentar o que os soldados comuns temem e os sacerdotes evitam nomear, o Caçador de Monstros vive para rastrear, estudar e abater aberrações que ameaçam o mundo dos homens. Armado com lâminas de prata, frascos de veneno e o conhecimento proibido de velhos grimórios e tradições orais, esse especialista sabe que cada criatura tem fraquezas únicas e que a vitória depende tanto da astúcia quanto da força bruta. Alguns são contratados por nobres temerosos, outros vagam por conta própria, guiados por um código pessoal ou por antigos juramentos. Para os aldeões, o Caçador é um salvador relutante; para os monstros, é o presságio da morte.',
    image: cacadorDeMonstrosImage,
  },

}

export default archetypesData