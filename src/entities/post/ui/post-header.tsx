import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { CardHeader, CardTitle } from "@/shared/ui/card";
import { MoreHorizontal } from "lucide-react";
import React from "react";

type headerType = {
  title: string;
  username: string;
  cardTime: string;
};

export function PostHeader({ ...props }: headerType) {
  const { title, username, cardTime } = props;
  return (
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="@johndoe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl font-semibold text-gray-100">
              {title}
            </CardTitle>
            <p className="text-sm text-gray-400">
              Posted by {username} • {cardTime} day ago
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </CardHeader>
  );
}
