type Props = {
  params: Promise<{ id: string }>;
};

export default async function PastePage({ params }: Props) {
  const { id } = await params; // 

  const res = await fetch(
    `http://localhost:3000/api/pastes?id=${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <h1>Paste not found</h1>;
  }

  const data = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Paste #{id}</h1>
      <pre>{data.content}</pre>
    </div>
  );
}