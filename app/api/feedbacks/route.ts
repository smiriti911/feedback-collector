import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = createClient()

    const { data, error } = await supabase.from("feedback").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching feedbacks:", error)
      return NextResponse.json({ error: "Failed to fetch feedbacks" }, { status: 500 })
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error("Error in feedbacks route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
