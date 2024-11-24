import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";
import React, { useState } from "react";

export function PostCommentsForm() {
    const [newComment, setNewComment] = useState("");
    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // if (newComment.trim()) {
        //   const newCommentObj = {
        //     id: comments.length + 1,
        //     author: "Current User",
        //     content: newComment,
        //     timeStamp: "Just now",
        //     likes: 0,
        //   };
        //   setComments([...comments, newCommentObj]);
        //   setNewComment("");
        // }
      };
  return (
    <form onSubmit={handleCommentSubmit} className="mb-6">
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
