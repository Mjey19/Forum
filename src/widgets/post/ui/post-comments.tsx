import { PostComments } from "@/entities/post-commets";
import { PostCommentsForm } from "@/entities/post-commets";
import { commentType } from "@/shared/types/comment-type";
import { useGetComments } from "@/features/post/use-get-comments";
// import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export function Comments({ id }: { id: string }) {
  const { comments, isLoading } = useGetComments(id);
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = comments.length;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("comments", comments);

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-100">
          Comments ({})
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
        <PostCommentsForm id={id} />
        <div className="space-y-6">
          {comments.map((comment: commentType, index) => (
            <PostComments
              postId={comment.postId}
              key={index}
              commentTime={comment.commentTime}
              userName={comment.userName}
              commentContent={comment.commentContent}
              commentLike={comment.commentLike}
            />
          ))}
        </div>
      </CardContent>
      {/* <CardFooter>
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
      </CardFooter> */}
    </Card>
  );
}
