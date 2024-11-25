"use client";
import React from "react";
import { Button } from "@/shared/ui/button";
import { CardFooter } from "@/shared/ui/card";
import { Bell, Flag, MessageSquare, Share2, ThumbsUp } from "lucide-react";
import { useHandleShare } from "@/features/post/handle-share";
import { useToogleLike } from "@/features/post/use-toogle-like";
type footerTypes = {
  id: string;
  likes: number | undefined;
  comments: object[];
};
export function PostFooter({ ...props }: footerTypes) {
  const { likes = 0, comments, id } = props;
  const { toggleLike, isLiked, isLoading } = useToogleLike(id, likes);
  const { isClicked, handleShare } = useHandleShare();

  return (
    <CardFooter className="flex justify-between">
      <div className="flex space-x-4">
        <Button
          disabled={isLoading}
          onClick={() => toggleLike()}
          variant={isLiked ? "destructive" : "ghost"}
          size="sm"
          className={
            isLiked
              ? "text-black"
              : `text-gray-400 hover:text-blue-400 hover:bg-gray-800`
          }
        >
          <ThumbsUp className="mr-2 h-4 w-4" />
          Like ({likes})
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
          disabled={isClicked}
          onClick={handleShare}
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-blue-400 hover:bg-gray-800 "
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
  );
}
