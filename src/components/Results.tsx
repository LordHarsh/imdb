import React from "react";
import Card from "./Card";

export default function Results({ results }: { results: any }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto p-4">
      {results.map((result: any) => (
        <div key={result.id}>
          {/* <img src={result.poster_path} alt="poster" /> */}
          {/* <p>{result.original_name || result.original_title}</p> */}
          <Card key={result.id} result={result} />
        </div>
      ))}
    </div>
  );
}
