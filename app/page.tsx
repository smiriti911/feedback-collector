"use client"

import { useState } from "react"
import FeedbackForm from "@/components/feedback-form"
import AdminView from "@/components/admin-view"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false)

  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Feedback Collector</h1>
          <ModeToggle />
        </div>

        <div className="mb-8">
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {showAdmin ? "Submit Feedback" : "View Submitted Feedback"}
          </button>
        </div>

        {showAdmin ? <AdminView /> : <FeedbackForm />}
      </div>

      <footer className="py-4 px-4 border-t bg-muted/40">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Feedback Collector</p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">Created by Smiriti Kapoor - Candidate Submission</p>
        </div>
      </footer>
    </main>
  )
}
