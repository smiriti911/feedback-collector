import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const body = await request.json()

    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Insert into database
    const { data, error } = await supabase.from("feedback").insert([{ name, email, message }]).select()

    if (error) {
      console.error("Error inserting feedback:", error)
      return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 })
    }

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    console.error("Error in submit-feedback route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
