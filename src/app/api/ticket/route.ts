import { NextResponse } from "next/server";
import { myTickets } from "@/data/myTickets";

export async function GET() {
  return NextResponse.json(myTickets);
}

export async function POST() {}
