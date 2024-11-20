import { useGetPost } from "@/features/posts/use-get-post";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Textarea } from "@/shared/ui/textarea";
import { Separator } from "@radix-ui/react-select";
import { ChevronLeft, ChevronRight, Flag, ThumbsUp, User } from "lucide-react";
import React, { useState } from "react";

export function Comments({ id }: { id: string }) {
  const { post, isLoading } = useGetPost(id);

  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Alice",
      content: "Great post! I learned a lot from this.",
      timestamp: "2 hours ago",
      likes: 5,
    },
    {
      id: 2,
      author: "Bob",
      content:
        "I have a question about the third point. Can you elaborate more on that?",
      timestamp: "1 hour ago",
      likes: 2,
    },
    {
      id: 3,
      author: "Charlie",
      content: "Thanks for sharing this information. It's very helpful.",
      timestamp: "30 minutes ago",
      likes: 1,
    },
    // Adding more comments for pagination demonstration
    {
      id: 4,
      author: "David",
      content: "I've been using these techniques and they really work!",
      timestamp: "15 minutes ago",
      likes: 3,
    },
    {
      id: 5,
      author: "Eve",
      content:
        "Could you recommend any resources for further reading on this topic?",
      timestamp: "5 minutes ago",
      likes: 0,
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        author: "Current User",
        content: newComment,
        timestamp: "Just now",
        likes: 0,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

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
  const { username, cardTime, likes } = post[0];
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-100">
          Comments ({comments.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
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
        <div className="space-y-6">
          {currentComments.map((comment, index) => (
            <div key={comment.id} className="group">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-100">
                      {comment.author}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-300">{comment.content}</p>
                  <div className="mt-2 flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
                    >
                      <ThumbsUp className="mr-1 h-3 w-3" />
                      Like ({comment.likes})
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
                    >
                      Reply
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-red-400 hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Flag className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
              {index < currentComments.length - 1 && (
                <Separator className="my-4 bg-gray-800" />
              )}
            </div>
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
