"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { formatDistanceToNow } from "date-fns"

interface Feedback {
  id: number
  name: string
  email: string
  message: string
  created_at: string
}

export default function AdminView() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("/api/feedbacks")
        if (!response.ok) {
          throw new Error("Failed to fetch feedbacks")
        }
        const data = await response.json()
        setFeedbacks(data)
      } catch (error) {
        setError("Failed to load feedback data. Please try again later.")
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeedbacks()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Submitted Feedback</h2>
        {[1, 2, 3].map((i) => (
          <Card key={i} className="mb-4">
            <CardHeader className="pb-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px] mt-2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-4 w-2/3 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive">{error}</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Submitted Feedback</h2>
      {feedbacks.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">No feedback submissions yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedback) => (
            <Card key={feedback.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{feedback.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{feedback.email}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(feedback.created_at), {
                    addSuffix: true,
                  })}
                </p>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{feedback.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
