import { PostComments } from "@/entities/post-commets";
import { PostCommentsForm } from "@/entities/post-commets";
import { useGetPost } from "@/features/posts/use-get-post";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export function Comments({ id }: { id: string }) {
  const { post, isLoading } = useGetPost(id);

  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Alice",
      content: "Great post! I learned a lot from this.",
      timeStamp: "2 hours ago",
      likes: 5,
    },
    {
      id: 2,
      author: "Bob",
      content:
        "I have a question about the third point. Can you elaborate more on that?",
      timeStamp: "1 hour ago",
      likes: 2,
    },
    {
      id: 3,
      author: "Charlie",
      content: "Thanks for sharing this information. It's very helpful.",
      timeStamp: "30 minutes ago",
      likes: 1,
    },
    {
      id: 4,
      author: "David",
      content: "I've been using these techniques and they really work!",
      timeStamp: "15 minutes ago",
      likes: 3,
    },
    {
      id: 5,
      author: "Eve",
      content:
        "Could you recommend any resources for further reading on this topic?",
      timeStamp: "5 minutes ago",
      likes: 0,
    },
  ]);

  // const [newComment, setNewComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;

  // const handleCommentSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (newComment.trim()) {
  //     const newCommentObj = {
  //       id: comments.length + 1,
  //       author: "Current User",
  //       content: newComment,
  //       timeStamp: "Just now",
  //       likes: 0,
  //     };
  //     setComments([...comments, newCommentObj]);
  //     setNewComment("");
  //   }
  // };

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // const { username, cardTime, likes } = post;

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-100">
          Comments ({comments.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* <form onSubmit={handleCommentSubmit} className="mb-6">
          <Textarea
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full bg-gray-800 border-gray-700 text-gray-100 mb-2"
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Post Comment
          </Button>
        </form> */}
        <PostCommentsForm />
        <div className="space-y-6">
          {currentComments.map((comment, index) => (
            <PostComments
              key={comment.id}
              index={index}
              len={comments.length}
              timeStemp={comment.timeStamp}
              author={comment.author}
              content={comment.content}
              likes={comment.likes}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex items-center justify-between">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="hover:bg-gray-800"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <span className="text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="hover:bg-gray-800"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
