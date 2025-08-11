import { getUser } from "@/action/user";

export async function GET() {
  try {
    const user = await getUser();
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch user" }), {
      status: 500,
    });
  }
}
