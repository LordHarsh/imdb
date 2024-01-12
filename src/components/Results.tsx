import React from "react";

export default function Results({ results }: { results: any }) {
  return <div>
    {results.map((result: any) => (
        <div key={result.id}>
            {/* <img src={result.poster_path} alt="poster" /> */}
            <p>{result.original_name || result.original_title}</p>
        </div>
    ))}
  </div>;
}
