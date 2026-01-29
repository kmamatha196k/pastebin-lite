"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [content, setContent] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/pastes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    const data = await res.json();
    router.push(`/paste/${data.id}`);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Create Paste</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          rows={6}
          cols={50}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your paste text"
        />
        <br /><br />
        <button type="submit">Create Paste</button>
      </form>
    </main>
  );
}