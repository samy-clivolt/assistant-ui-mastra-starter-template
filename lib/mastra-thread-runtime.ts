'use client';

import { useState, useEffect } from 'react';

export interface MastraThread {
  id: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
  resourceId: string;
}

/**
 * Hook pour gérer les threads Mastra côté client
 */
export function useMastraThreads() {
  const [threads, setThreads] = useState<MastraThread[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Charger les threads
  const loadThreads = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const resourceId = getResourceId();
      const response = await fetch(`/api/threads?resourceId=${encodeURIComponent(resourceId)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Convertir le format API vers notre interface
      const formattedThreads = data.threads.map((thread: {
        id: string;
        title?: string;
        createdAt: string;
        updatedAt: string;
        resourceId: string;
      }) => ({
        id: thread.id,
        title: thread.title || "Nouvelle conversation",
        createdAt: new Date(thread.createdAt),
        updatedAt: new Date(thread.updatedAt),
        resourceId: thread.resourceId,
      }));
      
      setThreads(formattedThreads);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors du chargement des threads');
      console.error("Erreur lors de la récupération des threads:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Créer un nouveau thread
  const createThread = async () => {
    try {
      const resourceId = getResourceId();
      const response = await fetch('/api/threads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resourceId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Recharger la liste des threads
      await loadThreads();
      
      return data.threadId;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la création du thread');
      throw err;
    }
  };

  // Archiver un thread
  const archiveThread = async (threadId: string) => {
    try {
      const response = await fetch(`/api/threads?threadId=${encodeURIComponent(threadId)}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Retirer le thread de la liste locale
      setThreads(prev => prev.filter(t => t.id !== threadId));
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'archivage du thread');
      return false;
    }
  };

  // Charger les threads au montage
  useEffect(() => {
    loadThreads();
  }, []);

  return {
    threads,
    isLoading,
    error,
    loadThreads,
    createThread,
    archiveThread,
  };
}

/**
 * Récupère l'ID de la ressource (utilisateur) depuis le localStorage
 */
function getResourceId(): string {
  if (typeof window !== 'undefined') {
    let resourceId = localStorage.getItem('mastra-resource-id');
    
    if (!resourceId) {
      resourceId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
      localStorage.setItem('mastra-resource-id', resourceId);
    }
    
    return resourceId;
  }
  
  return 'anonymous-user';
}