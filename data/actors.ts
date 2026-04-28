export interface Actor {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  nationality: string;
  birthYear: number;
}

export const actors: Actor[] = [
  {
    id: '1',
    name: 'Tom Hanks',
    shortDescription: 'Ator americano premiado',
    longDescription: 'Tom Hanks é um dos atores mais respeitados de Hollywood, conhecido por seus papéis memoráveis em filmes como Forrest Gump, Toy Story e Náufrago. Com uma carreira que se estende por mais de quatro décadas, ele conquistou inúmeros prêmios incluindo dois Oscars. Sua versatilidade e capacidade de se conectar com o público o tornaram uma lenda do cinema.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    nationality: 'Americana',
    birthYear: 1956,
  },
  {
    id: '2',
    name: 'Meryl Streep',
    shortDescription: 'Atriz lendária de Hollywood',
    longDescription: 'Meryl Streep é amplamente considerada uma das maiores atrizes de todos os tempos. Sua carreira notável inclui papéis icônicos em filmes como O Diabo Veste Prada, Sophie\'s Choice e Mamma Mia. Com múltiplos prêmios Grammy, Golden Globe e indicações ao Oscar, ela demonstra consistentemente sua excelência em interpretação e versatilidade artística excepcional.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    nationality: 'Americana',
    birthYear: 1949,
  },
  {
    id: '3',
    name: 'Leonardo DiCaprio',
    shortDescription: 'Ator e produtor de cinema',
    longDescription: 'Leonardo DiCaprio é um ator de renome internacional conhecido por seus papéis em filmes de grande sucesso como Titanic, Inception e O Lobo de Wall Street. Além de sua carreira de atuação brilhante, ele é um produtor de cinema dedicado e ativista ambiental. Sua dedicação à excelência artística o torna um dos atores mais influentes da geração contemporânea.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    nationality: 'Americana',
    birthYear: 1974,
  },
  {
    id: '4',
    name: 'Cate Blanchett',
    shortDescription: 'Atriz australiana premiada',
    longDescription: 'Cate Blanchett é uma atriz australiana de destaque internacional, celebrada por suas performances em filmes como Elizabeth, Blue Jasmine e Thor: Ragnarok. Sua capacidade de interpretar personagens complexos e multifacetados a estabeleceu como uma das atrizes mais respeitadas do cinema contemporâneo. Ela ganhou múltiplos prêmios incluindo Oscar e BAFTA.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    nationality: 'Australiana',
    birthYear: 1969,
  },
  {
    id: '5',
    name: 'Denzel Washington',
    shortDescription: 'Ator e diretor americano',
    longDescription: 'Denzel Washington é um ator e diretor americano de grande prestígio, conhecido por seus papéis poderosos em filmes como Homem em Chamas, Dia de Treinamento e Fácil Dinheiro. Com dois Oscars de Melhor Ator e inúmeros outros prêmios, ele é reconhecido como um dos atores mais talentosos e influentes da indústria cinematográfica mundial.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    nationality: 'Americana',
    birthYear: 1954,
  },
  {
    id: '6',
    name: 'Saoirse Ronan',
    shortDescription: 'Atriz irlandesa talentosa',
    longDescription: 'Saoirse Ronan é uma atriz irlandesa jovem mas já consagrada, conhecida por seus papéis em Amor Além das Estrelas, Lady Bird e Mulherzinhas. Sua capacidade de trazer profundidade emocional e autenticidade aos seus personagens a tornou uma das atrizes mais promissoras de sua geração. Ela recebeu múltiplas indicações ao Oscar antes dos trinta anos.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    nationality: 'Irlandesa',
    birthYear: 1994,
  },
];
