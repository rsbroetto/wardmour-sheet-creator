const speciesData = {
  Undef: {bonuses:[], description:'Selecione sua Espécie', image: ''},
  Humano: {
    bonuses: [
        {title: 'Especialista', description: '+1 em um atributo à sua escolha'},
        {title: 'Versátil', description: 'selecione uma perícia adicional na criação do personagem'}
    ],
    description: 'Os humanos são a raça mais comum e versátil do continente de Wardmour e possuem alto grau de adaptabilidade, ambição e diversidade cultural. Se tornaram a raça dominante e mais numerosa dos cinco reinos, através do estabelecimento de impérios duradouros e exploração de territórios desconhecidos,  moldando assim o curso da história através de suas ações. Conhecidos por sua tenacidade, os humanos frequentemente buscam superar desafios e alcançar grandes feitos, seja através da diplomacia, guerra ou inovação. Com uma variedade de culturas, línguas e tradições, os humanos podem ser encontrados em quase todas as regiões, adaptando-se às condições locais e interagindo com outras raças de maneiras únicas.',
    image: '/images/humans.png',
  },
  Elfo: {
    bonuses: [
        {title: 'Peso Pena', description: '+1 em AGIL'},
        {title: 'Filhos da Floresta', description: 'Você nunca se perde dentro da floresta'}
    ],
    description: 'Os Elfos são uma raça antiga e enigmática, descendentes diretos das forças primordiais que moldaram o mundo. Seus corpos são altos e graciosos, seus traços refinados e seus olhos reluzem como estrelas em noites sem luar. Desde a aurora dos tempos, os Aeltharin habitam os bosques encantados, as florestas ancestrais e os reinos ocultos além dos véus dimensionais. Caminham com a leveza de uma folha ao vento, e sua presença carrega o perfume sutil da terra fértil e do ar da alvorada. Vivem séculos, alguns chegando a testemunhar a ascensão e queda de impérios humanos sem jamais deixar a juventude fenecer. Os Aeltharin valorizam a harmonia entre magia, natureza e espírito. Sua sociedade é organizada em Clãs de Sangue Antigo, cada um responsável por guardar saberes arcanos, tradições de combate, canções ancestrais ou artefatos de poder. Governados por Conselhos de Anciãos, os elfos deliberam com cautela e raramente interferem nos assuntos das outras raças, a não ser quando a própria ordem natural é ameaçada.',
    image: '/images/elfs.png',
  },
  Anão: {
    bonuses: [
        {title: 'Robusto', description: '+1 em FORT'},
        {title: 'Ferreiro', description: 'Com o material e equipamento adequado, você consegue reparar armaduras danificadas'}
    ],
    description: 'Os anões são um povo robusto, orgulhoso e tradicionalista, conhecidos por sua maestria em trabalhos de forja, mineração e arquitetura subterrânea. Habitando fortalezas escavadas nas profundezas das montanhas ou cidades de pedra em planaltos rochosos, os anões mantêm antigas linhagens e prezam a honra, o dever e a lealdade acima de tudo. Guerreiros incansáveis e artesãos lendários, suas façanhas e canções ecoam por eras. Embora desconfiados com estrangeiros e relutantes em aceitar mudanças, uma vez que um anão considera alguém como amigo, essa aliança é quase inquebrável. Seu orgulho racial e paixão pelas tradições ancestrais moldam grande parte de suas atitudes e conduta.',
    image: '/images/dwarfs.png',
  },
  Drelmarin: {
    bonuses: [
        {title: 'Sangue de Dragão', description: 'Você possui resistência ao frio e calor'},
        {title: 'Sangue réptil', description: 'Você possui resistência à veneno'}
    ],
    description: 'Os Drelmarin são humanoides descendentes dos antigos dragões marinhos gigantes que um dia dominaram os oceanos. Trazem em si essa herança: escamas azuladas, olhos como pérolas e um cheiro constante de maresia. Exímios navegantes, vivem como piratas, mercenários e exploradores, cruzando os mares em embarcações velozes adornadas com símbolos marinhos. Embora tenham fama de saqueadores, seguem um rígido código de honra: jamais traem a tripulação e respeitam pactos selados sob as estrelas. Usam lanças forjadas de ossos de predadores marinhos, lutando com agilidade e estratégia. Para os Drelmarin, o oceano é lar, templo e campo de batalha.',
    image: '/images/drelmarines.png',
  },
  Sylvarin: {
    bonuses: [
        {title: 'Sabedoria nata', description: '+1 em MENT'},
        {title: 'Olhar místico', description: 'você consegue detectar magia em uma sala ou objeto com um teste de MENT'}
    ],
    description: 'Os Sylvarin são um povo ancestral das florestas profundas, nascidos da união entre terra, vento e magia primordial. Vivem ocultos em bosques intocados, onde constroem aldeias em árvores colossais e grutas envoltas por brumas. Suas moradas se fundem à natureza, feitas de madeira viva, pedra encantada e iluminadas por fungos e fogo-fada. Conectados ao Plano da Magia, veem os fluxos arcanos do mundo natural e aprendem desde cedo a conjurar feitiços com cantos e rituais antigos. Sua magia é fluida e voltada à proteção, comunicação espiritual e controle dos elementos. Possuem olhos brilhantes, pele pálida, cabelos como folhas e musgos, e marcas naturais na pele. São pacíficos, mas ferozes ao defender a floresta, lutando com armas vivas e táticas de emboscada.',
    image: '/images/sylvarines.png',
  },
}

export default speciesData