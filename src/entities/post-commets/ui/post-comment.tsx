import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import React from "react";
import { Flag, ThumbsUp, User } from "lucide-react";
import { Separator } from "@/shared/ui/separator";
import { commentType } from "../types/post-type";

export function PostComments({ ...props }: commentType) {
  const { author, content, index, likes, timeStemp, len } = props;
  return (
    <div className="group">
      <div className="flex space-x-4">
        <Avatar>
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-100">{author}</h3>
            <span className="text-xs text-gray-400">{timeStemp}</span>
          </div>
          <p className="mt-1 text-gray-300">{content}</p>
          <div className="mt-2 flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-blue-400 hover:bg-gray-800"
            >
              <ThumbsUp className="mr-1 h-3 w-3" />
              Like ({likes})
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
      {index < len - 1 && <Separator className="h-[1px] my-4 bg-gray-800" />}
    </div>
  );
}
