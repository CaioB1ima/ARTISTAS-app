# Descoberta de Artistas Musicais - Parte 2

Este projeto é a evolução do aplicativo de descoberta de artistas, agora integrando funcionalidades avançadas como autenticação Firebase, navegação complexa e consumo de API externa.

---

## 🚀 Novas Funcionalidades (Segunda Parte)

### 1. Autenticação Firebase
- **Login e Registro**: Sistema completo de autenticação usando Firebase Auth.
- **Persistência**: O estado do usuário é mantido entre sessões.

### 2. Navegação Avançada
- **Stack Navigation**: Gerencia o fluxo entre a lista de artistas e os detalhes.
- **Drawer Navigation**: Menu lateral para acesso rápido ao Início e Perfil.
- **Fluxo Condicional**: Telas de autenticação separadas do conteúdo principal.

### 3. Integração com API e Hooks
- **Hook Customizado (`useFetchArtists`)**: Lógica reutilizável para busca de dados.
- **API Pública**: Consumo de dados da JSONPlaceholder para listar artistas/usuários.
- **Loading State**: Feedback visual com `ActivityIndicator` durante o carregamento.

### 4. Persistência com Firestore
- **Perfil do Usuário**: Dados como data de criação e email são armazenados e recuperados do Firebase Firestore.

---

## 🛠️ Requisitos Técnicos Atendidos

| Requisito | Implementação |
|-----------|---------------|
| **Hooks** | Uso de `useState`, `useEffect` e o custom hook `useFetchArtists`. |
| **Navegação** | Implementação de `Stack` e `Drawer` usando React Navigation. |
| **Loading** | Componente `ActivityIndicator` controlado por estado. |
| **Telas** | Login/Registro, Dashboard, Detalhes e Perfil. |
| **API** | Integração com `https://jsonplaceholder.typicode.com/users`. |
| **Firebase** | Auth para login e Firestore para dados de perfil. |

---

## 📂 Estrutura do Projeto

```
/src
  /components    # Componentes reutilizáveis
  /screens       # Telas do aplicativo (Login, Dashboard, Details, Profile)
  /navigation    # Configuração do AppNavigator (Stack + Drawer)
  /services      # Configurações de serviços externos
  /hooks         # Hooks customizados (useFetchArtists)
App.js           # Componente raiz
firebaseConfig.js # Configuração do Firebase
```

---

## ⚙️ Como Executar

1. **Instale as dependências**:
   ```bash
   pnpm install
   ```

2. **Configure o Firebase**:
   Edite o arquivo `firebaseConfig.js` com suas credenciais do console do Firebase.

3. **Inicie o projeto**:
   ```bash
   npx expo start
   ```

---

**Desenvolvido para a 3ª Menção do Projeto de Dispositivos Móveis.**
