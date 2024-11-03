"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Textarea } from "@/shared/ui/textarea";
import { Separator } from "@/shared/ui/separator";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  Flag,
  MoreHorizontal,
  User,
  Bell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ForumPostPage() {
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

  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="bg-gray-900 border-gray-800 mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="@johndoe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl font-semibold text-gray-100">
                  How to optimize your React application for better performance
                </CardTitle>
                <p className="text-sm text-gray-400">
                  Posted by John Doe • 1 day ago
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-invert max-w-none">
            <p>
              React is a powerful library for building user interfaces, but as
              your application grows, you might notice some performance issues.
              Here are some tips to optimize your React app:
            </p>
            <ol>
              <li>Use React.memo for component memoization</li>
              <li>Implement useCallback and useMemo hooks</li>
              <li>Virtualize long lists with react-window</li>
              <li>Optimize images and use lazy loading</li>
              <li>Minimize unnecessary re-renders</li>
            </ol>
            <p>
              By implementing these techniques, you can significantly improve
              the performance of your React application, resulting in a smoother
              user experience and faster load times.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              Like (42)
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Comment ({comments.length})
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
            >
              <Bell className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-red-400 hover:bg-gray-800"
          >
            <Flag className="mr-2 h-4 w-4" />
            Report
          </Button>
        </CardFooter>
      </Card>

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
              variant="outline"
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
              variant="outline"
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
    </main>
  );
}
