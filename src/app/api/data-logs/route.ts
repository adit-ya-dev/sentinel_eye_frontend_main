import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    total: 0,
    logs: [],
    note: "Data Logs uses LocalStorage on client side for hackathon mode.",
  });
}
