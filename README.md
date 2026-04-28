# 🎵 Descoberta de Artistas Musicais

Um aplicativo React Native moderno e intuitivo para descobrir, explorar e compartilhar seus artistas musicais favoritos. Desenvolvido com **Expo SDK 54**, **TypeScript** e **React 19**.

---

## Acesso Rápido

### Abra o app agora com o QR Code:

![Expo QR Code](./QR_CODE.png)

**Ou use o link direto:**
```
exps://8081-i1v606t4fzbm8avfoh0gk-b0faacff.us1.manus.computer
```

---

## Como Usar

### Para iOS:
1. Abra a **câmera** do seu iPhone
2. Aponte para o **QR Code** acima
3. Toque na notificação que aparecer
4. O **Expo Go** abrirá automaticamente com o app

### Para Android:
1. Instale o **[Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)** (Google Play)
2. Abra o **Expo Go**
3. Toque em **"Scan QR Code"**
4. Aponte para o **QR Code** acima
5. O app carregará automaticamente

---

## Funcionalidades

### Aba "Artistas" - Descoberta
- Lista de **6 artistas musicais** internacionais
- Imagens de alta qualidade dos artistas
- Gênero musical de cada artista
- Descrição curta e atraente
- Toque para ver detalhes completos

### Detalhes do Artista
- **Biografia completa** (30+ palavras)
- **Gênero musical** principal
- **País de origem**
- **Anos ativos** na indústria
- **Índice de popularidade** (1-100)
- Design responsivo e elegante

### Aba "Descobrir" - Formulário Interativo
Compartilhe novos artistas que você descobriu:

**Campos de Texto:**
- Nome do Artista
- Email para contato
- Comentário pessoal
- Link do Spotify

**Seletores:**
- Gênero Musical (Pop, Rock, Hip-Hop, R&B, Eletrônico, Country, Reggaeton, Outro)
- País de Origem (Brasil, EUA, Canadá, Reino Unido, Espanha, França, Alemanha, Outro)

**Controles Deslizantes:**
- Popularidade (1-10)
- Anos Ativo (0-70)

**Interruptores:**
- Artista Ativo
- Recomendado

**Ações:**
- Botão "Enviar" para submeter dados
- Botão "Limpar" para resetar formulário

---

## Artistas Apresentados

1. **The Weeknd** - R&B/Hip-Hop (Canadá)
2. **Billie Eilish** - Pop/Eletrônico (EUA)
3. **Bad Bunny** - Reggaeton/Trap Latino (Porto Rico)
4. **Ariana Grande** - Pop/R&B (EUA)
5. **Drake** - Hip-Hop/Rap (Canadá)
6. **Taylor Swift** - Pop/Country (EUA)

---

## Stack Tecnológico

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React Native** | 0.81.5 | Framework mobile |
| **Expo** | 54.0.29 | Plataforma de desenvolvimento |
| **TypeScript** | 5.9.3 | Tipagem estática |
| **React** | 19.1.0 | UI library |
| **Expo Router** | 6.0.19 | Navegação |
| **NativeWind** | 4.2.1 | Tailwind CSS para React Native |
| **React Query** | 5.90.12 | Gerenciamento de dados |
| **Reanimated** | 4.1.6 | Animações |

---

## 📁 Estrutura do Projeto

```
descoberta-artistas/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx              # Tela inicial - Lista de artistas
│   │   ├── artist-detail.tsx      # Detalhes do artista
│   │   ├── form.tsx               # Formulário de descoberta
│   │   └── _layout.tsx            # Navegação por abas
│   ├── _layout.tsx                # Layout raiz com providers
│   └── oauth/                     # Callbacks de autenticação
├── components/
│   ├── artist-card.tsx            # Card do artista
│   ├── screen-container.tsx       # Wrapper de tela com SafeArea
│   └── ui/
│       └── icon-symbol.tsx        # Ícones da navegação
├── data/
│   └── artists.ts                 # Dados dos artistas
├── hooks/
│   ├── use-colors.ts              # Hook de cores do tema
│   ├── use-color-scheme.ts        # Detecção de tema
│   └── use-auth.ts                # Autenticação
├── lib/
│   ├── utils.ts                   # Utilitários (cn, etc)
│   └── theme-provider.tsx         # Provider de tema
├── assets/
│   └── images/                    # Ícones e imagens
├── app.config.ts                  # Configuração do Expo
├── tailwind.config.js             # Configuração Tailwind
├── theme.config.js                # Paleta de cores
└── package.json                   # Dependências

```

---

##  Requisitos Atendidos

###  Parte 1: Lista de Artistas
- • Mínimo 6 artistas com imagens
- • Descrição curta para cada artista
- • Componente `ArtistCard` reutilizável
- • Lista com ScrollView

###  Parte 2: Interação e Detalhes
- • Tela de detalhes do artista
- • Navegação entre telas
- • Biografias longas (30+ palavras cada)
- • Mínimo 150 palavras totais
- • nformações adicionais (país, anos ativos, popularidade)

###  Parte 3: Formulário Completo
- • 4 TextInputs (Nome, Email, Comentário, Spotify Link)
- • 2 Pickers (Gênero, País)
- • 2 Sliders (Popularidade, Anos Ativo)
- • 2 Switches (Ativo, Recomendado)
- • 2 Botões (Enviar, Limpar)
- • Validação e feedback visual

---

**Desenvolvido com ❤️ usando Expo e React Native**
