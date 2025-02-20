import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
    const fileName = req.nextUrl.searchParams.get("file");

    if (!fileName || (fileName !== "timResume.pdf" && fileName !== "ericResume.pdf")) {
        return NextResponse.json({ error: "Invalid file request" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "public", fileName); // Absolute path

    // Check if file exists
    if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);

    // Define content type
    const contentType = "application/pdf";

    // Return file as response
    return new NextResponse(fileBuffer, {
        headers: {
            "Content-Type": contentType,
            "Content-Disposition": `attachment; filename="${fileName}"`,
        },
    });
}
