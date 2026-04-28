# Design - Descoberta de Artistas Musicais App

## Visão Geral

Aplicativo React Native com Expo que apresenta uma lista de artistas musicais com imagens, biografias detalhadas, e um formulário para descoberta de novos artistas com múltiplos componentes de entrada.

## Telas

### Tela 1: Home - Lista de Artistas (Parte 1 & 2)
- **Objetivo**: Exibir lista de artistas musicais com imagens e descrições
- **Conteúdo Principal**:
  - Header com título "Descoberta de Artistas"
  - ScrollView com lista de cards de artistas
  - Cada card contém: imagem (foto do artista), nome, gênero musical, descrição curta
  - Mínimo 6 artistas com 6 imagens no total
  - Ao tocar em um artista, navega para tela de detalhes

### Tela 2: Detalhes do Artista (Parte 2)
- **Objetivo**: Mostrar informações detalhadas do artista selecionado
- **Conteúdo Principal**:
  - Imagem grande do artista
  - Nome em destaque
  - Gênero musical, país de origem, anos ativo, popularidade
  - Biografia longa (mínimo 30 palavras)
  - Botão voltar
  - Mínimo 6 artistas com biografias detalhadas

### Tela 3: Formulário (Parte 3)
- **Objetivo**: Coletar informações para descobrir novos artistas
- **Componentes Obrigatórios**:
  - Título: "Descobrir Artista"
  - 4 TextInputs: Nome do Artista, Email, Comentário, Link do Spotify
  - 2 Pickers: Gênero Musical, País de Origem
  - 2 Sliders: Popularidade (1-10), Anos Ativo
  - 2 Switches: Artista Ativo, Recomendado
  - 2 Botões: Enviar, Limpar

## Fluxo de Navegação

```
Home (Lista de Artistas)
  ↓
  → Toque em artista → Detalhes do Artista
  → Aba "Descobrir" → Tela de Descoberta
```

## Paleta de Cores

- **Primária**: #0a7ea4 (azul)
- **Fundo**: #ffffff (claro) / #151718 (escuro)
- **Superfície**: #f5f5f5 (claro) / #1e2022 (escuro)
- **Texto Principal**: #11181C (claro) / #ECEDEE (escuro)
- **Texto Secundário**: #687076 (claro) / #9BA1A6 (escuro)
- **Borda**: #E5E7EB (claro) / #334155 (escuro)

## Componentes Principais

1. **ArtistCard**: Card com imagem, nome, gênero e descrição curta
2. **ArtistDetail**: Tela de detalhes com informações completas do artista
3. **FormScreen**: Formulário para descobrir novos artistas
4. **TabNavigation**: Navegação entre Home, Detalhes e Descoberta

## Requisitos de Conteúdo

- **Mínimo 6 artistas** na lista principal
- **6 imagens no total** (distribuídas entre os artistas)
- **Mínimo 150 palavras** no total das biografias
- **Biografias mínimo 30 palavras** cada uma (Parte 2)
- **Formulário completo** com todos os componentes especificados
