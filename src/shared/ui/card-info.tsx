import { User, MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";

const MinCardInfo = ({
  comments,
  likes,
}: {
  comments?: number;
  likes?: number;
}) => {
  return (
    <div className="flex items-center text-sm text-gray-400 mt-1">
      <ThumbsUp className="h-3 w-3 mr-1" />
      <span className="mr-2">{likes}</span>
      <MessageCircle className="h-3 w-3 mr-1" />
      <span>{comments}</span>
    </div>
  );
};
const StandartCardInfo = ({
  username,
  cardTime,
  comments,
  likes,
}: {
  username?: string;
  cardTime?: string;
  comments?: number;
  likes?: number;
}) => {
  return (
    <div className="flex items-center text-xs text-gray-500">
      <User className="mr-1 h-3 w-3" />
      <span>{username}</span>
      <span className="mx-1">•</span>
      <span>{cardTime} ago</span>
      {comments ? (
        <>
          <span className="mx-1">•</span>
          <MessageCircle className="mr-1 h-3 w-3" />
          <span>{comments} replies</span>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export { StandartCardInfo, MinCardInfo };
