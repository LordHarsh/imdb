import Results from "@/components/Results";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: { searchParams: any }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? `movie/top_rated` : `trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 60 * 60 * 4 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch home page conent C");
  }

  const data = await res.json();
  const results = data.results;
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
