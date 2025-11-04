import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const visitsFile = path.join(process.cwd(), "data", "visits.json");

export async function GET() {
  try {
    const data = fs.readFileSync(visitsFile, "utf-8");
    const visits = JSON.parse(data);
    return NextResponse.json(visits);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read visits" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userAgent, page } = await req.json();

    // جلب الـ IP من headers
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() || 
      req.headers.get("x-real-ip") || 
      "unknown";

    const data = fs.readFileSync(visitsFile, "utf-8");
    const visits = JSON.parse(data);

    const newVisit = {
      id: Date.now(),
      ip,
      userAgent,
      page,
      timestamp: new Date().toISOString()
    };

    visits.push(newVisit);
    fs.writeFileSync(visitsFile, JSON.stringify(visits, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to record visit" }, { status: 500 });
  }
}

