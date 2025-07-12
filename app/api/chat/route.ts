import { mastra } from "@/mastra";


export const maxDuration = 30;


export async function POST(req: Request) {
  const { messages } = await req.json();


  // Get the chefAgent instance from Mastra
  const agent = mastra.getAgent("chefAgent");
  // Stream the response using the agent
  const result = await agent.stream(messages);
  // Return the result as a data stream response
  return result.toDataStreamResponse();
}
