# Feedback Collector

A single-page application for collecting user feedback, built with Next.js and Supabase.

## Objective

This project was developed to demonstrate the ability to create a complete, working microapplication with attention to user experience, frontend precision, backend logic, and deployment readiness.

## Scope

The application allows users to submit their name, email address, and a short feedback message. This feedback is stored using Supabase, and a basic admin view within the application allows for retrieval and display of the collected data.

## Demo

[**[Netlify Deployment Link]**](https://feedback-collector-assignment.netlify.app/)

## Features

**Frontend:**

* Built with **Next.js** for server-side rendering and improved performance.
* Clean and responsive layout, optimized for various screen sizes.
* Modern, minimalistic, and visually intuitive design.
* Styled using **Tailwind CSS**.
* Footer watermark: **[Your Full Name]** - Candidate Task Submission
* Feedback Form:
    * **Full Name:** Text input.
    * **Email:** Text input with basic email validation.
    * **Feedback Message:** Text area.
    * **Submit Button:** Displays a loading state during submission.
* Admin View:
    * **Toggle Button:** "View Submitted Feedback"
    * Styled display of all collected feedback (list or card layout).

**Backend:**

* **Supabase** for data storage and API.
* `POST /submit-feedback`: Stores feedback in the Supabase database.
* `GET /feedbacks`: Retrieves feedback from the Supabase database.

**Bonus Features (Implemented):**

* ✅   Mobile responsiveness.
* ✅   Timestamp for each submission.
* ✅   Dark/light theme toggle.
* ✅   Thoughtful transitions and micro animations.
* ✅   Form-level validation with user-friendly messages.

## Tech Stack

* **Frontend:**
    * [Next.js](https://nextjs.org/)
    * [React](https://react.dev/)
    * [Tailwind CSS](https://tailwindcss.com/)
* **Backend:**
    * [Supabase](https://supabase.com/)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [YOUR_GITHUB_REPOSITORY_LINK_HERE]
    cd feedback-collector
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Supabase:**

    * Create a Supabase project at [https://supabase.com/](https://supabase.com/).
    * Create a table (e.g., `feedbacks`) with the following columns:
        * `id` (UUID, primary key, auto-generated)
        * `full_name` (text)
        * `email` (text)
        * `message` (text)
        * `created_at` (timestamp with time zone)
    * Obtain your Supabase URL and `anon` key from your project settings.

4.  **Configure environment variables:**

    * Create a `.env.local` file in the project root.
    * Add your Supabase credentials:

        ```
        NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
        NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
        ```

5.  **Run the application:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    The application will be available at `http://localhost:3000`.
