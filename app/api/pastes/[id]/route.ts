import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; 

  console.log("ID:", id);

  const numericId = Number(id);

  if (!numericId) {
    return NextResponse.json(
      { error: "Invalid id" },
      { status: 400 }
    );
  }

  const result = await pool.query(
    "SELECT id, content FROM pastes WHERE id = $1",
    [numericId]
  );

  if (result.rows.length === 0) {
    return NextResponse.json(
      { error: "Paste not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(result.rows[0]);
}