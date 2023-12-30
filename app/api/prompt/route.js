import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate('creator');

    const response = new Response(JSON.stringify(prompts), { status: 200 });
    return response;
  } catch (error) {
      return new Response("Failed to fetch all prompts", { status: 500 })
  }
};