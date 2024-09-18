'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  reset,
}
) {
  return (
    // global-error must include html and body tags
    
      <div className="mt-6">
        <h2> There Something went wrong fetching post!</h2>
        <button onClick={() => reset()}>Try again</button>
      </div>
   
  )
}