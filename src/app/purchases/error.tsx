'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Error: {error.message} occurred.</h2>
      <button onClick={() => reset()}>Please try again</button>
    </div>
  )
}