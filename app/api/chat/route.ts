import { mastra } from "@/mastra";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  // Extract threadId and resourceId from headers or generate them
  const threadId = req.headers.get('x-thread-id') || generateThreadId();
  const resourceId = req.headers.get('x-resource-id') || getDefaultResourceId();

  // Get the chefAgent instance from Mastra
  const agent = mastra.getAgent("chefAgent");
  
  // Convert messages to Mastra format (they should already be in the correct format from AI SDK)
  const mastraMessages = messages.map((msg: { role: string; content: string }) => ({
    role: msg.role,
    content: msg.content
  }));
  
  // Stream the response using the agent with memory context using new syntax
  const result = await agent.stream(mastraMessages, {
    memory: {
      thread: threadId,
      resource: resourceId,
    },
  });
  
  // Return the result as a data stream response with custom headers
  const response = result.toDataStreamResponse();
  
  // Ajouter les headers pour que le frontend puisse récupérer les IDs
  response.headers.set('x-thread-id', threadId);
  response.headers.set('x-resource-id', resourceId);
  
  return response;
}

function getDefaultResourceId(): string {
  // Générer un ID utilisateur par défaut
  return `user_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}

function generateThreadId(): string {
  return `thread_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}
