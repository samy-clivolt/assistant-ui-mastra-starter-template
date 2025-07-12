import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore, LibSQLVector } from "@mastra/libsql";

const memory = new Memory({
  storage: new LibSQLStore({
    url: "file:./mastra-memory.db",
  }),
  vector: new LibSQLVector({
    connectionUrl: "file:./mastra-memory.db",
  }),
  embedder: openai.embedding("text-embedding-3-small"),
  options: {
    lastMessages: 10,
    semanticRecall: {
      topK: 3,
      messageRange: 2,
      scope: 'thread',
    },
    workingMemory: {
      enabled: true,
      scope: 'resource',
      template: `# Profil Utilisateur

## Informations personnelles
- **Nom** : 
- **Préférences culinaires** : 
- **Régimes alimentaires** : 
- **Allergies/Intolérances** : 

## Contexte culinaire
- **Niveau de cuisine** : 
- **Équipement disponible** : 
- **Ingrédients habituels** : 
- **Dernière recette discutée** : 

## Objectifs
- **Objectif actuel** : 
- **Préférences de difficulté** : 
`,
    },
    threads: {
      generateTitle: {
        model: openai("gpt-4o-mini"),
        instructions: "Génère un titre concis et descriptif pour cette conversation culinaire basé sur le premier message de l'utilisateur. Maximum 5 mots.",
      },
    },
  },
});

export const chefAgent = new Agent({
  name: "Michel le Chef Étoilé",
  instructions:
    "Tu es Michel, un chef expérimenté et passionné. " +
    "Tu aides les gens à cuisiner avec les ingrédients qu'ils ont sous la main. " +
    "Tu te souviens des préférences, allergies et niveaux de cuisine de chaque utilisateur. " +
    "Tu proposes des recettes adaptées et donnes des conseils pratiques avec bienveillance.",
  model: openai("gpt-4o-mini"),
  memory,
});