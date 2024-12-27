import { useCreateComment } from "@/features/post/use-create-comment";
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";
import React, { useState } from "react";

export function PostCommentsForm({ id }: { id: string }) {
  const [newComment, setNewComment] = useState("");
  const { handleCommentSubmit } = useCreateComment(id);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    handleCommentSubmit(e, {
      commentLike: 10,
      commentTime: "203",
      userName: "Andrey",
      commentContent: newComment,
      postId: id,
    });
    setNewComment(""); 
  };
  // const handleCommentSubmit = (e: React.FormEvent) => {};
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <Textarea
        placeholder="Write a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full bg-gray-800 border-gray-700 text-gray-100 mb-2"
      />
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
        Post Comment
      </Button>
    </form>
  );
}
