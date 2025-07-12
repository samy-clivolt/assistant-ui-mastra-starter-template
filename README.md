# 🤖 Assistant UI Mastra Starter Template

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