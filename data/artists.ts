export interface Artist {
  id: string;
  name: string;
  genre: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  country: string;
  yearsActive: string;
  popularity: number;
}

export const artists: Artist[] = [
  {
    id: '1',
    name: 'The Weeknd',
    genre: 'R&B/Hip-Hop',
    shortDescription: 'Artista canadense de R&B contemporâneo',
    longDescription: 'The Weeknd é um artista canadense nascido Abel Tesfaye, conhecido mundialmente por seus hits como "Blinding Lights", "Starboy" e "Can\'t Feel My Face". Com uma carreira que começou em 2010, ele conquistou múltiplos prêmios Grammy e se tornou um dos artistas mais ouvidos no Spotify. Seu estilo único mistura R&B, pop e hip-hop, criando uma sonoridade inconfundível que o diferencia no cenário musical contemporâneo.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    country: 'Canadá',
    yearsActive: '2010-Presente',
    popularity: 95,
  },
  {
    id: '2',
    name: 'Billie Eilish',
    genre: 'Pop/Eletrônico',
    shortDescription: 'Jovem prodígio do pop alternativo',
    longDescription: 'Billie Eilish é uma artista americana que revolucionou a indústria musical com seu estilo único e inovador. Começou sua carreira aos 16 anos e rapidamente se tornou um fenômeno global com músicas como "Bad Guy" e "When We All Fall Asleep, Where Do We Go?". Sua voz distintiva e produção minimalista criaram um novo padrão no pop contemporâneo. Ela ganhou múltiplos prêmios Grammy e é uma das artistas mais influentes da sua geração.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    country: 'Estados Unidos',
    yearsActive: '2015-Presente',
    popularity: 92,
  },
  {
    id: '3',
    name: 'Bad Bunny',
    genre: 'Reggaeton/Trap Latino',
    shortDescription: 'Rei do reggaeton e trap latino',
    longDescription: 'Bad Bunny é um artista porto-riquenho que se tornou uma das maiores estrelas da música latina. Com hits como "Gasolina", "Tití Me Preguntó" e "Un x100to", ele revolucionou o reggaeton e o trap latino, levando esses gêneros para o mainstream global. Sua carreira é marcada por inovação constante, colaborações estratégicas e uma conexão profunda com sua comunidade. É consistentemente um dos artistas mais ouvidos no mundo.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
    country: 'Porto Rico',
    yearsActive: '2013-Presente',
    popularity: 98,
  },
  {
    id: '4',
    name: 'Ariana Grande',
    genre: 'Pop/R&B',
    shortDescription: 'Diva pop com voz excepcional',
    longDescription: 'Ariana Grande é uma cantora e atriz americana conhecida por sua voz excepcional e alcance vocal impressionante. Com sucessos como "Thank U, Next", "God Is a Woman" e "Break Up with Your Girlfriend, I\'m Bored", ela se consolidou como uma das maiores pop stars do século XXI. Sua carreira combina atuação, canto e produção musical, e ela é conhecida por sua dedicação à excelência artística e conexão com seus fãs.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    country: 'Estados Unidos',
    yearsActive: '2008-Presente',
    popularity: 94,
  },
  {
    id: '5',
    name: 'Drake',
    genre: 'Hip-Hop/Rap',
    shortDescription: 'Lenda do hip-hop canadense',
    longDescription: 'Drake é um rapper, cantor e produtor canadense que se tornou uma das maiores figuras do hip-hop moderno. Com álbuns aclamados como "Take Care", "Nothing Was the Same" e "Scorpion", ele definiu o som do hip-hop contemporâneo. Sua capacidade de misturar rap com melodias pop, combinada com sua presença cultural e influência, o estabeleceu como um dos artistas mais importantes da música contemporânea. Ele é frequentemente um dos artistas mais ouvidos globalmente.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    country: 'Canadá',
    yearsActive: '2006-Presente',
    popularity: 96,
  },
  {
    id: '6',
    name: 'Taylor Swift',
    genre: 'Pop/Country',
    shortDescription: 'Rainha do pop e compositora premiada',
    longDescription: 'Taylor Swift é uma cantora e compositora americana que se tornou uma das maiores artistas de todos os tempos. Começou sua carreira no country e evoluiu para o pop, criando alguns dos maiores sucessos da música contemporânea como "Love Story", "Shake It Off" e "Anti-Hero". Sua capacidade de contar histórias através de suas músicas, combinada com sua excelência musical e produção, a estabeleceu como uma figura cultural dominante. Ela ganhou múltiplos prêmios Grammy e continua quebrando recordes.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop',
    country: 'Estados Unidos',
    yearsActive: '2006-Presente',
    popularity: 97,
  },
];
