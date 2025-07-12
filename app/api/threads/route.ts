import { NextRequest, NextResponse } from "next/server";

// Simuler une base de données en mémoire pour les threads
// Dans une vraie application, cela viendrait de la base de données Mastra
const threadsDB: Record<string, Array<{
  threadId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  resourceId: string;
}>> = {};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const resourceId = searchParams.get('resourceId');

    if (!resourceId) {
      return NextResponse.json(
        { error: 'resourceId is required' },
        { status: 400 }
      );
    }

    // Récupérer les threads pour cet utilisateur
    const userThreads = threadsDB[resourceId] || [];
    
    return NextResponse.json({
      threads: userThreads.map(thread => ({
        id: thread.threadId,
        title: thread.title,
        createdAt: new Date(thread.createdAt),
        updatedAt: new Date(thread.updatedAt),
        resourceId: thread.resourceId,
      })),
      total: userThreads.length,
    });

  } catch (error) {
    console.error("Error fetching threads:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { resourceId } = await request.json();

    if (!resourceId) {
      return NextResponse.json(
        { error: 'resourceId is required' },
        { status: 400 }
      );
    }

    // Générer un nouvel ID de thread
    const threadId = `thread_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    const now = new Date().toISOString();

    // Ajouter le nouveau thread à la "base de données"
    if (!threadsDB[resourceId]) {
      threadsDB[resourceId] = [];
    }

    const newThread = {
      threadId,
      title: "Nouvelle conversation", // Sera mis à jour par Mastra après le premier message
      createdAt: now,
      updatedAt: now,
      resourceId,
    };

    threadsDB[resourceId].unshift(newThread); // Ajouter au début

    return NextResponse.json({
      threadId,
      resourceId,
    });

  } catch (error) {
    console.error("Error creating thread:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const threadId = searchParams.get('threadId');

    if (!threadId) {
      return NextResponse.json(
        { error: 'threadId is required' },
        { status: 400 }
      );
    }

    // Trouver et supprimer le thread de tous les utilisateurs
    for (const resourceId in threadsDB) {
      threadsDB[resourceId] = threadsDB[resourceId].filter(
        thread => thread.threadId !== threadId
      );
    }

    return NextResponse.json({
      success: true,
      threadId,
    });

  } catch (error) {
    console.error("Error deleting thread:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Fonction utilitaire pour mettre à jour le titre d'un thread
// Cette fonction sera appelée par Mastra quand un titre est généré
export async function updateThreadTitle(threadId: string, title: string) {
  for (const resourceId in threadsDB) {
    const thread = threadsDB[resourceId].find(t => t.threadId === threadId);
    if (thread) {
      thread.title = title;
      thread.updatedAt = new Date().toISOString();
      break;
    }
  }
}