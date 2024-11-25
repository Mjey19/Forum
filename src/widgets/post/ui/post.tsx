"use client";
import { PostHeader, PostContent, PostFooter } from "@/entities/post";

import { useGetPost } from "@/features/posts/use-get-post";
import { Card } from "@/shared/ui/card";
import { title } from "process";
import React from "react";

export function Post({ id }: { id: string }) {
  const { post, isLoading } = useGetPost(id);
  if (isLoading && post !== undefined) {
    return <div>Loading...</div>;
  }

  const { username, cardTime, likes } = post;

  console.log(post);
  return (
    <Card className="bg-gray-900 border-gray-800 mb-8">
      <PostHeader username={username} cardTime={cardTime} title={title} />
      <PostContent />
      <PostFooter id={id} comments={[{}, {}]} likes={likes} />
    </Card>
  );
}
