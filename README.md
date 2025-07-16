# 🤖 Assistant UI Mastra Starter Template

## English

### Overview
This is a starter template for quickly creating your own AI assistant using [assistant-ui](https://github.com/Yonom/assistant-ui) and [Mastra](https://mastra.ai/).

### Quick Start
1. **Requirements**
   - Node.js 18+ installed on your machine.
   - An OpenAI or Anthropic account to obtain an API key.

2. **Using this Template**
   - Click "Use this template" at the top of this page to create your own repository.

3. **Installation**
   ```bash
   # Clone your new repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME

   # Install dependencies
   npm install
   ```

4. **Configuration**
   - Create a `.env.local` file at the root of the project and add your API keys:
   ```env
   # For OpenAI
   OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

   # Or for Anthropic
   ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

5. **Launch**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser to see your assistant!

### Project Structure
```
├── app/                    # Next.js Pages
│   ├── api/chat/          # API route for chat
│   ├── page.tsx           # Main page
│   └── layout.tsx         # Application layout
├── components/            # React components
│   ├── assistant-ui/      # Assistant interface components
│   └── ui/               # Reusable UI components
├── mastra/               # Mastra configuration
│   ├── agents/           # Custom AI agents
│   └── index.ts          # Main configuration
└── lib/                  # Utilities and configurations
```

### Features
- 💬 **Modern Chat Interface** - Sleek and responsive UI
- 🧠 **Smart AI Agents** - Modular agent system with Mastra
- 🎨 **Customizable Design** - UI components with Tailwind CSS
- 🔧 **Simple Configuration** - Up and running in minutes
- 📱 **Responsive** - Works on both desktop and mobile
- 🔌 **MCP Integration** - Direct access to Mastra and Assistant UI documentation

### Customization
- **Modify the Default Agent**
  Edit `mastra/agents/chefAgent.ts` to customize your assistant's behavior:
  ```typescript
  export const chefAgent = {
    name: "MyAssistant",
    instructions: "You are a helpful assistant who...",
    model: {
      provider: "openai",
      name: "gpt-4"
    }
  };
  ```

- **Add New Agents**
  Create a new file in `mastra/agents/` and import it in `mastra/index.ts`.

- **Customize the Interface**
  UI components are located in `components/ui/` and can be modified as needed.

### MCP Integration (Model Context Protocol)
This template includes an `.mcp.json` file to access Mastra and Assistant UI documentation directly from Claude Code or Cursor.

- **For Claude Code**
  The `.mcp.json` file is already configured and active. You have access to MCP servers:
  - **Mastra** - Complete Mastra documentation
  - **Assistant UI** - Assistant UI documentation

- **For Cursor**
  Rename the `.mcp.json` file to `mcp.json` to activate integration in Cursor.
  ```bash
  # Activate MCP for Cursor
  mv .mcp.json mcp.json
  ```

### Available MCP Features
- 📖 Instant access to documentation
- 🔍 Search within the docs
- 💡 Contextual code examples
- 🚀 Implementation guides

### Documentation
- [Assistant UI Documentation](https://docs.assistant-ui.com/)
- [Mastra Documentation](https://docs.mastra.ai/)
- [Next.js Documentation](https://nextjs.org/docs)

### Contribution
Contributions are welcome! Feel free to:
- Open an issue to report a bug
- Propose a new feature
- Submit a pull request

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Support
If you encounter any issues:
1. Make sure your API key is configured correctly
2. Check the logs in the browser console
3. Open an issue on GitHub with details of your problem

---

Created with ❤️ using [assistant-ui](https://github.com/Yonom/assistant-ui) and [Mastra](https://mastra.ai/)

Un template de démarrage pour créer facilement votre propre assistant IA avec [assistant-ui](https://github.com/Yonom/assistant-ui) et [Mastra](https://mastra.ai/).

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ installé sur votre machine
- Un compte OpenAI ou Anthropic pour obtenir une clé API

### 1. Utiliser ce template
Cliquez sur le bouton "Use this template" en haut de cette page pour créer votre propre repository.

### 2. Installation
```bash
# Cloner votre nouveau repository
git clone https://github.com/VOTRE-USERNAME/VOTRE-REPO-NAME.git
cd VOTRE-REPO-NAME

# Installer les dépendances
npm install
```

### 3. Configuration
Créez un fichier `.env.local` à la racine du projet et ajoutez vos clés API :

```env
# Pour OpenAI
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Ou pour Anthropic
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Lancement
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir votre assistant !

## 📁 Structure du projet

```
├── app/                    # Pages Next.js
│   ├── api/chat/          # API route pour le chat
│   ├── page.tsx           # Page principale
│   └── layout.tsx         # Layout de l'application
├── components/            # Composants React
│   ├── assistant-ui/      # Composants de l'interface assistant
│   └── ui/               # Composants UI réutilisables
├── mastra/               # Configuration Mastra
│   ├── agents/           # Agents IA personnalisés
│   └── index.ts          # Configuration principale
└── lib/                  # Utilitaires et configurations
```

## ✨ Fonctionnalités

- 💬 **Interface de chat moderne** - Interface utilisateur élégante et responsive
- 🧠 **Agents IA intelligents** - Système d'agents modulaire avec Mastra
- 🎨 **Design personnalisable** - Composants UI avec Tailwind CSS
- 🔧 **Configuration simple** - Prêt à l'emploi en quelques minutes
- 📱 **Responsive** - Fonctionne sur desktop et mobile
- 🔌 **Intégration MCP** - Accès direct à la documentation Mastra et Assistant UI

## 🛠️ Personnalisation

### Modifier l'agent par défaut
Éditez le fichier `mastra/agents/chefAgent.ts` pour personnaliser le comportement de votre assistant :

```typescript
export const chefAgent = {
  name: "MonAssistant",
  instructions: "Vous êtes un assistant utile qui...",
  model: {
    provider: "openai",
    name: "gpt-4"
  }
};
```

### Ajouter de nouveaux agents
Créez un nouveau fichier dans `mastra/agents/` et importez-le dans `mastra/index.ts`.

### Personnaliser l'interface
Les composants UI se trouvent dans `components/ui/` et peuvent être modifiés selon vos besoins.

## 🔌 Intégration MCP (Model Context Protocol)

Ce template inclut un fichier `.mcp.json` qui vous permet d'accéder directement à la documentation Mastra et Assistant UI depuis Claude Code ou Cursor.

### Pour Claude Code
Le fichier `.mcp.json` est déjà configuré et actif. Vous avez accès aux serveurs MCP :
- **Mastra** - Documentation complète de Mastra
- **Assistant UI** - Documentation d'Assistant UI

### Pour Cursor
Renommez le fichier `.mcp.json` en `mcp.json` pour activer l'intégration dans Cursor.

```bash
# Activer MCP pour Cursor
mv .mcp.json mcp.json
```

### Fonctionnalités MCP disponibles
- 📖 Accès instantané à la documentation
- 🔍 Recherche dans les docs
- 💡 Exemples de code contextuels
- 🚀 Guides d'implémentation

## 📚 Documentation

- [Assistant UI Documentation](https://docs.assistant-ui.com/)
- [Mastra Documentation](https://docs.mastra.ai/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Ouvrir une issue pour signaler un bug
- Proposer une nouvelle fonctionnalité
- Soumettre une pull request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez que votre clé API est correctement configurée
2. Consultez les logs dans la console du navigateur
3. Ouvrez une issue sur GitHub avec les détails de votre problème

---

Créé avec ❤️ en utilisant [assistant-ui](https://github.com/Yonom/assistant-ui) et [Mastra](https://mastra.ai/)