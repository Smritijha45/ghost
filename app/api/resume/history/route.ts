import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: history, error } = await supabase
    .from("Analysis")
    .select("*")
    .eq("user_id", user.id)
    .order("createdAt", { ascending: false });

  if (error) {
    console.error("Failed to fetch history:", error);
    return NextResponse.json({ error: "Could not fetch history" }, { status: 500 });
  }

  return NextResponse.json(history || []);
}