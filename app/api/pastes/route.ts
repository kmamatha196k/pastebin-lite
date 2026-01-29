import { pool } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const { content } = body;

  if (!content) {
    return new Response(
      JSON.stringify({ error: "Content required" }),
      { status: 400 }
    );
  }

  const result = await pool.query(
    "INSERT INTO pastes (content) VALUES ($1) RETURNING id",
    [content]
  );

  return Response.json({ id: result.rows[0].id });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id || isNaN(Number(id))) {
    return new Response(
      JSON.stringify({ error: "Invalid paste id" }),
      { status: 400 }
    );
  }

  const result = await pool.query(
    "SELECT content FROM pastes WHERE id = $1",
    [Number(id)]
  );

  if (result.rows.length === 0) {
    return new Response(
      JSON.stringify({ error: "Paste not found" }),
      { status: 404 }
    );
  }

  return Response.json({
    content: result.rows[0].content,
  });
}