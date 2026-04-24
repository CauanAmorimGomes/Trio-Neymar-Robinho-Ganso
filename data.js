// =============================================
// DATA.JS — Todos os dados do Trio Mágico
// =============================================

const PLAYERS = [
  {
    id: "neymar",
    name: "Neymar Jr.",
    number: 11,
    position: "Atacante",
    born: "5 de fevereiro de 1992 — Mogi das Cruzes, SP",
    santosGols: 54,
    totalJogos: 103,
    assistencias: 35,
    color: "#FFD700",
    emoji: "⚡",
    desc: "Revelado nas categorias de base do Santos, Neymar estreou no profissional aos 17 anos e rapidamente se tornou o grande símbolo do futebol brasileiro. Com dribles desconcertantes e goleira fácil, foi o artilheiro do trio e o pivô central da formação mágica.",
    destaque: "Artilheiro da Copa do Brasil 2010 e Campeonato Paulista 2010",
    fase: "2009–2013 no Santos"
  },
  {
    id: "robinho",
    name: "Robinho",
    number: 7,
    position: "Atacante / Meia",
    born: "25 de janeiro de 1984 — São Vicente, SP",
    santosGols: 46,
    totalJogos: 90,
    assistencias: 41,
    color: "#00C2FF",
    emoji: "🌟",
    desc: "Ídolo histórico do Santos, Robinho retornou ao clube em 2010 vindo do Manchester City para fazer dupla com os jovens Neymar e Ganso. Veterano experiente com passagens por Real Madrid e City, trouxe maturidade e classe ao trio.",
    destaque: "Vice-artilheiro e maior número de assistências do trio",
    fase: "Retorno 2010–2014 ao Santos"
  },
  {
    id: "ganso",
    name: "Paulo Henrique Ganso",
    number: 10,
    position: "Meia Atacante",
    born: "4 de outubro de 1989 — São José do Rio Preto, SP",
    santosGols: 38,
    totalJogos: 112,
    assistencias: 55,
    color: "#FF6B35",
    emoji: "🎯",
    desc: "O cérebro do trio. Ganso era o maestro que ditava o ritmo do jogo com passes milimétricos e visão de jogo privilegiada. Dono da camisa 10, foi o responsável por criar mais jogadas para os companheiros e tinha o maior número de assistências do trio.",
    destaque: "Maior assistente do trio — 55 passes para gol",
    fase: "2008–2012 no Santos"
  }
];

const TIMELINE = [
  {
    year: "2009",
    season: "A Revelação",
    title: "Neymar chega ao profissional",
    description: "Com apenas 17 anos, Neymar faz sua estreia memorável no Campeonato Paulista. Ganso já brilha como titular. O Santos começa a perceber que tem algo especial em mãos.",
    gols: { neymar: 14, robinho: 0, ganso: 9 },
    highlight: "Neymar marca o primeiro hat-trick da carreira contra o Guarani. Ganso dá 18 assistências na temporada.",
    titulo: "Campeonato Paulista 2010 (conquistado com base nesta temporada)"
  },
  {
    year: "2010",
    season: "O Encontro",
    title: "Robinho retorna — o trio se completa",
    description: "O Santos anuncia o retorno de Robinho do Manchester City. Neymar e Ganso já formavam uma dupla explosiva — com Robinho, nasce o Trio Mágico. O Brasil todo para para assistir ao Santos.",
    gols: { neymar: 18, robinho: 22, ganso: 11 },
    highlight: "No Paulistão, o trio marca 51 gols juntos. Robinho com 22 gols é artilheiro. Neymar bate recorde de dribles na competição.",
    titulo: "Campeão Paulista 2010 e Copa do Brasil 2010"
  },
  {
    year: "2011",
    season: "O Auge",
    title: "A temporada inesquecível",
    description: "O Santos joga o melhor futebol do continente. O trio atua em total sincronia — Ganso criando, Neymar driblando, Robinho finalizando. O Pelé Arena vibra a cada partida.",
    gols: { neymar: 22, robinho: 24, ganso: 18 },
    highlight: "Neymar é eleito o melhor jogador da América do Sul. Robinho marca 4 gols em uma única partida. Ganso dá 3 assistências no mesmo jogo.",
    titulo: "Copa Libertadores 2011 e Recopa Sul-Americana"
  }
];

const NOTABLE_GOALS = [
  {
    id: 1,
    player: "neymar",
    title: "O Gol de Bicicleta",
    competition: "Campeonato Paulista 2011",
    opponent: "Atlético Sorocaba",
    date: "13 de março de 2011",
    minute: 67,
    assist: "Ganso",
    description: "Neymar recebe cruzamento de Ganso e executa uma bicicleta perfeita que estufou o lado direito da rede. O goleiro não teve chance sequer de reagir. Um gol que parou o Brasil.",
    type: "Bicicleta",
    importance: "⭐⭐⭐⭐⭐",
    emoji: "🌪️"
  },
  {
    id: 2,
    player: "robinho",
    title: "Hat-trick no Clássico",
    competition: "Campeonato Paulista 2010",
    opponent: "Santos 3 × 1 Palmeiras",
    date: "14 de fevereiro de 2010",
    minute: "23', 41', 78'",
    assist: "Ganso (2 assists), Neymar (1 assist)",
    description: "No dia dos namorados, Robinho presenteou a torcida com três gols no clássico contra o Palmeiras. Cada um mais bonito que o anterior — o último, um voleio de direita que virou pôster.",
    type: "Hat-trick",
    importance: "⭐⭐⭐⭐⭐",
    emoji: "🔥"
  },
  {
    id: 3,
    player: "ganso",
    title: "O Drible e a Finalização",
    competition: "Copa Libertadores 2011",
    opponent: "Santos vs. Peñarol",
    date: "18 de maio de 2011",
    minute: 55,
    assist: "Neymar",
    description: "Ganso recebeu de Neymar, deu uma bicicleta desconcertante sobre o marcador e chutou no ângulo. Um gol histórico que mostrou que o camisa 10 não era só o criador — mas também um finalizador letal.",
    type: "Drible + finalização",
    importance: "⭐⭐⭐⭐⭐",
    emoji: "🎯"
  },
  {
    id: 4,
    player: "neymar",
    title: "Gol da Libertadores",
    competition: "Copa Libertadores 2011 — Final",
    opponent: "Santos vs. Peñarol",
    date: "22 de junho de 2011",
    minute: 44,
    assist: "Robinho",
    description: "Na final da Copa Libertadores contra o Peñarol, Neymar marca o gol que deu o título ao Santos. Assistência de Robinho, gol de Neymar — o trio escreve seu nome na história do futebol sul-americano.",
    type: "Finalização no ângulo",
    importance: "⭐⭐⭐⭐⭐",
    emoji: "🏆"
  },
  {
    id: 5,
    player: "robinho",
    title: "Golaço de Falta",
    competition: "Copa do Brasil 2010",
    opponent: "Santos vs. Internacional",
    date: "7 de julho de 2010",
    minute: 81,
    assist: "Gol de falta direto",
    description: "A 25 metros do gol, Robinho cobrou falta com efeito surpreendente. A bola passou por cima da barreira e entrou no ângulo superior esquerdo. O goleiro Dida só viu a bola entrar.",
    type: "Falta direta",
    importance: "⭐⭐⭐⭐",
    emoji: "💫"
  },
  {
    id: 6,
    player: "ganso",
    title: "Lençol e Gol",
    competition: "Campeonato Paulista 2010",
    opponent: "Santos vs. Corinthians",
    date: "11 de abril de 2010",
    minute: 38,
    assist: "Neymar",
    description: "Ganso recebe passe de Neymar nas costas da defesa, passa por baixo das pernas do zagueiro e chuta cruzado. Um gol de habilidade técnica absurda que causou silêncio no estádio adversário.",
    type: "Caneta + chute cruzado",
    importance: "⭐⭐⭐⭐",
    emoji: "✨"
  },
  {
    id: 7,
    player: "neymar",
    title: "Golaço Individual",
    competition: "Campeonato Brasileiro 2011",
    opponent: "Santos vs. Flamengo",
    date: "30 de outubro de 2011",
    minute: 72,
    assist: "Individual",
    description: "Neymar recebe no meio-campo, dribla quatro jogadores do Flamengo — incluindo dois zagueiros e o goleiro — e empurra para o gol vazio. Um gol tão bonito que virou viral antes mesmo das redes sociais.",
    type: "Golaço individual — 5 adversários driblados",
    importance: "⭐⭐⭐⭐⭐",
    emoji: "🌊"
  },
  {
    id: 8,
    player: "robinho",
    title: "Toque de Letra",
    competition: "Copa Libertadores 2011",
    opponent: "Santos vs. Once Caldas",
    date: "12 de abril de 2011",
    minute: 61,
    assist: "Ganso",
    description: "Ganso cruza pela esquerda e Robinho, de frente para o gol, desvia de letra com o calcanhar. O goleiro colombiano não esboçou reação. Puro talento e improviso.",
    type: "Toque de letra",
    importance: "⭐⭐⭐⭐",
    emoji: "👑"
  },
  {
    id: 9,
    player: "ganso",
    title: "Gol de Cobertura",
    competition: "Campeonato Brasileiro 2010",
    opponent: "Santos vs. Fluminense",
    date: "14 de setembro de 2010",
    minute: 29,
    assist: "Robinho",
    description: "Robinho lançou Ganso em profundidade. O camisa 10 saiu na cara do goleiro, percebeu que estava adiantado e com uma precisão cirúrgica, tocou por cobertura. Um gol de inteligência rara.",
    type: "Cobertura",
    importance: "⭐⭐⭐⭐",
    emoji: "🎨"
  },
  {
    id: 10,
    player: "neymar",
    title: "Gol de Pênalti Paradinha",
    competition: "Campeonato Paulista Final 2010",
    opponent: "Santos vs. Santo André",
    date: "25 de abril de 2010",
    minute: 90,
    assist: "Pênalti",
    description: "Nos últimos segundos da final, Santos com um gol de desvantagem. Neymar converte o pênalti com a famosa paradinha que se tornaria sua marca registrada — levou o jogo para a prorrogação e depois para os pênaltis, onde o Santos foi campeão.",
    type: "Pênalti — Paradinha",
    importance: "⭐⭐⭐⭐⭐",
    emoji: "🎭"
  },
  {
    id: 11,
    player: "robinho",
    title: "Voleio Acrobático",
    competition: "Copa do Brasil 2010 — Semifinal",
    opponent: "Santos vs. Grêmio",
    date: "18 de agosto de 2010",
    minute: 54,
    assist: "Ganso",
    description: "Cruzamento de Ganso e Robinho no ar, com o corpo quase paralelo ao gramado, acertou um voleio impressionante. A bola entrou no ângulo antes que o goleiro pudesse se mexer. Um dos gols mais bonitos da carreira de Robinho.",
    type: "Voleio acrobático",
    importance: "⭐⭐⭐⭐⭐",
    emoji: "🦅"
  },
  {
    id: 12,
    player: "ganso",
    title: "Golaço na Libertadores",
    competition: "Copa Libertadores 2011 — Semifinal",
    opponent: "Santos vs. Cerro Porteño",
    date: "11 de maio de 2011",
    minute: 42,
    assist: "Neymar",
    description: "Neymar lançou Ganso na área. O camisa 10 controlou de peito, deu um toque sutil e finalizou no cantinho. Um gol de três movimentos perfeitos que colocou o Santos na grande final da Libertadores.",
    type: "Controle + finalização de primeira",
    importance: "⭐⭐⭐⭐⭐",
    emoji: "🌠"
  }
];

const FULL_STATS = {
  neymar: {
    golsTotais: 54,
    golsCampBrasileiro: 22,
    golsCampPaulistа: 19,
    golsLibertadores: 8,
    golsCopaDoBrasil: 5,
    assistencias: 35,
    jogos: 103,
    mediaGolsPorJogo: 0.52,
    hatTricks: 3,
    premios: ["Melhor Jogador Sul-Americano 2011", "Artilheiro Paulistão 2010", "Artilheiro Copa do Brasil 2010"]
  },
  robinho: {
    golsTotais: 46,
    golsCampBrasileiro: 18,
    golsCampPaulistа: 16,
    golsLibertadores: 7,
    golsCopaDoBrasil: 5,
    assistencias: 41,
    jogos: 90,
    mediaGolsPorJogo: 0.51,
    hatTricks: 2,
    premios: ["Artilheiro Paulistão 2010", "Melhor Atacante Copa do Brasil 2010"]
  },
  ganso: {
    golsTotais: 38,
    golsCampBrasileiro: 14,
    golsCampPaulistа: 13,
    golsLibertadores: 6,
    golsCopaDoBrasil: 5,
    assistencias: 55,
    jogos: 112,
    mediaGolsPorJogo: 0.34,
    hatTricks: 1,
    premios: ["Melhor Meia do Campeonato Paulista 2011", "Maior Assistente do Santos 2010–2011"]
  }
};
