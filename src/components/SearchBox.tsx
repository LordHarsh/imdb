"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBox() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    }
  return (
    <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input
        type="text"
        placeholder="Search keyword..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" disabled={!search} className="text-amber-700 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
}
