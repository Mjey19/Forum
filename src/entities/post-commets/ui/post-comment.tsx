import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import React from "react";
import { Flag, ThumbsUp, User } from "lucide-react";
import { commentType } from "../../../shared/types/comment-type";

export function PostComments({ ...props }: commentType) {
  const { userName, commentContent, commentLike, commentTime } = props;
  return (
    <div className="group">
      <div className="flex space-x-4">
        <Avatar>
          <AvatarFallback>
            <User className="h-4 w-4" />
            {/* userLogo */}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-100">{userName}</h3>
            <span className="text-xs text-gray-400">{commentTime}</span>
          </div>
          <p className="mt-1 text-gray-300">{commentContent}</p>
          <div className="mt-2 flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
            >
              <ThumbsUp className="mr-1 h-3 w-3" />
              Like ({commentLike})
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
    </div>
  );
}
