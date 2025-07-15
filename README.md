# 🤖 Assistant UI Mastra Starter Template

## 🇬🇧 English

A starter template to easily create your AI assistant using [assistant-ui](https://github.com/Yonom/assistant-ui) and [Mastra](https://mastra.ai/).

### 🚀 Quick Start

#### Prerequisites
- Node.js 18+
- An OpenAI or Anthropic API key

#### 1. Use this template
Click "Use this template" on GitHub to create your own repository.

#### 2. Installation
```bash
# Clone your new repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

# Install dependencies
npm install
```

#### 3. Configuration
Create a `.env.local` file at the root and add your API keys:

```env
# For OpenAI
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
# Or for Anthropic
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### 4. Start
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see your assistant!

### 📁 Project structure
```
├── app/                  # Next.js pages
│   ├── api/chat/         # Chat API route
│   ├── page.tsx          # Main page
│   └── layout.tsx        # App layout
├── components/           # React components
│   ├── assistant-ui/     # Assistant UI components
│   └── ui/               # Reusable UI components
├── mastra/               # Mastra config
│   ├── agents/           # Custom AI agents
│   └── index.ts          # Main config
└── lib/                  # Utils/config
```

### ✨ Features
- 💬 Modern chat interface (responsive, stylish)
- 🧠 Modular AI agents with Mastra
- 🎨 Customizable design (Tailwind CSS)
- 🔧 Simple config, ready in minutes
- 📱 Mobile ready
- 🔌 MCP integration: access to Mastra & Assistant UI docs

### 🛠️ Customization
- To change the default agent, edit `mastra/agents/chefAgent.ts`
- Add new agents in `mastra/agents/`, import in `mastra/index.ts`
- UI components for editing: `components/ui/`

### 🔌 Model Context Protocol (MCP)
- `.mcp.json` enables instant docs in Claude Code and Cursor
- For Cursor: rename `.mcp.json` → `mcp.json`

### 📚 Documentation
- [Assistant UI Docs](https://docs.assistant-ui.com/)
- [Mastra Docs](https://docs.mastra.ai/)
- [Next.js Docs](https://nextjs.org/docs)

### 🤝 Contributing
- Open issues for bugs/ideas
- PRs welcome

### 📄 License
MIT. See [LICENSE](LICENSE).

### 🆘 Support
- Check API keys & browser console
- Open a GitHub issue with details

---



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