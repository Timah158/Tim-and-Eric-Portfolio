import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { filename: string } }) {
  const { filename } = params; // Extract filename

  const URL = `https://timanderic-storage-a587c09210046-staging.s3.amazonaws.com/protected/Resumes/${filename}`;

  const response = await fetch(URL);

  if (!response.ok) {
    return new Response("File not found", { status: 404 });
  }

  return new Response(response.body, {
    headers: {
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Type": response.headers.get("Content-Type") || "application/octet-stream",
    },
  });
}
