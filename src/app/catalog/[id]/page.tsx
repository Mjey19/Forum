"use client";

import { Comments, Post } from "@/widgets/post";
import { use } from "react";
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  return (
    <main className="container mx-auto px-4 py-8">
      <Post id={id} />
      <Comments id={id} />
    </main>
  );
}
