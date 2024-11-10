import { Label } from "@/shared/ui/label";
// import { RadioGroupItem } from "@/shared/ui/radio-group";
import React from "react";

type RadioLinkTypes = {
  link: string;
  value: string;
  id: string;
  callback: (value: string) => void;
};

export default function SearchRadioLink({
  link,
  callback,
  value,
}: RadioLinkTypes) {
  return (
    <div className="flex items-center space-x-2">
      <Label
        onClick={() => callback(value)}
        htmlFor={value}
        className="text-gray-200 cursor-pointer"
        
      >
        {link}
      </Label>
    </div>
  );
}
