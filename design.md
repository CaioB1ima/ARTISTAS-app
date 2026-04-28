# Design - Atores & Formulários App

## Visão Geral

Aplicativo React Native com Expo que apresenta uma lista de atores/atrizes com imagens, descrições detalhadas, e um formulário completo com múltiplos componentes de entrada.

## Telas

### Tela 1: Home - Lista de Atores (Parte 1 & 2)
- **Objetivo**: Exibir lista de atores com imagens e descrições
- **Conteúdo Principal**:
  - Header com título "Atores & Atrizes"
  - ScrollView com lista de cards de atores
  - Cada card contém: imagem (quadrada), nome, descrição curta
  - Mínimo 5 atores com 6 imagens no total
  - Ao tocar em um ator, navega para tela de detalhes

### Tela 2: Detalhes do Ator (Parte 2)
- **Objetivo**: Mostrar informações detalhadas do ator selecionado
- **Conteúdo Principal**:
  - Imagem grande do ator
  - Nome em destaque
  - Descrição longa (mínimo 30 palavras)
  - Botão voltar
  - Mínimo 5 atores com descrições detalhadas

### Tela 3: Formulário (Parte 3)
- **Objetivo**: Coletar informações com múltiplos tipos de entrada
- **Componentes Obrigatórios**:
  - Título: "Cadastro de Ator"
  - 4 TextInputs: Nome, Email, Bio, Telefone
  - 2 Pickers: Nacionalidade, Gênero
  - 2 Sliders: Experiência (anos), Popularidade (1-10)
  - 2 Switches: Ativo, Disponível para Trabalho
  - 2 Botões: Enviar, Limpar

## Fluxo de Navegação

```
Home (Lista de Atores)
  ↓
  → Toque em ator → Detalhes do Ator
  → Aba "Formulário" → Tela de Cadastro
```

## Paleta de Cores

- **Primária**: #0a7ea4 (azul)
- **Fundo**: #ffffff (claro) / #151718 (escuro)
- **Superfície**: #f5f5f5 (claro) / #1e2022 (escuro)
- **Texto Principal**: #11181C (claro) / #ECEDEE (escuro)
- **Texto Secundário**: #687076 (claro) / #9BA1A6 (escuro)
- **Borda**: #E5E7EB (claro) / #334155 (escuro)

## Componentes Principais

1. **ActorCard**: Card com imagem, nome e descrição curta
2. **ActorDetail**: Tela de detalhes com informações completas
3. **FormScreen**: Formulário com todos os componentes solicitados
4. **TabNavigation**: Navegação entre Home, Detalhes e Formulário

## Requisitos de Conteúdo

- **Mínimo 5 atores** na lista principal
- **6 imagens no total** (distribuídas entre os atores)
- **Mínimo 150 palavras** no total das descrições longas
- **Descrições mínimo 30 palavras** cada uma (Parte 2)
- **Formulário completo** com todos os componentes especificados
