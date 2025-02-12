import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Extract filename from the request URL
  const filename = req.nextUrl.pathname.split("/").pop();

  if (!filename) {
    return new NextResponse("Filename is required", { status: 400 });
  }

  const URL = `https://timanderic-storage-a587c09210046-staging.s3.amazonaws.com/protected/Resumes/${filename}`;

  const response = await fetch(URL);

  if (!response.ok) {
    return new NextResponse("File not found", { status: 404 });
  }

  return new NextResponse(response.body, {
    headers: {
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Type": response.headers.get("Content-Type") || "application/octet-stream",
    },
  });
}
