import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const history = await prisma.analysis.findMany({
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json(history);
}