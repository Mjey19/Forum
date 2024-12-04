import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { CardHeader, CardTitle } from "@/shared/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
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
        <Popover >
          {/* <Button variant="ghost" size="icon"> */}
          <PopoverTrigger
            className=" hover:bg-accent hover:text-accent-foreground"
            variant="ghost"
            size="icon"
            
          >
            <MoreHorizontal className="h-5 w-5" />
          </PopoverTrigger>
          {/* </Button> */}
          <PopoverContent className="h-20 w-20 bg-secondary">
            <div className="flex flex-col gap-1">
              <Button variant="default" >
                Изменить
              </Button>
              <Button variant="default" >
                Удалить
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </CardHeader>
  );
}
