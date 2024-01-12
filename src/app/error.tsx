"use client";

import React from "react";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: any; reset: any}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl">Something went wrong!</h1>
      <button className="hover:bg-amber-600 p-2 m-4 rounded-xl text-lg border-2 border-amber-600" onClick={() => reset()}>Try Again</button>
    </div>
  );
}
