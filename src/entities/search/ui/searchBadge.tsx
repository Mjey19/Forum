"use client";
import { Badge } from "@/shared/ui/badge";
import React, { useState } from "react";
import { Label } from "@/shared/ui/label";
export function SearchBadge({
  title,
  type,
}: {
  title: string;
  type: "num" | "str";
}) {
  const badgeArr = {
    str: ["0", "10", "100", "1k", "10k"],
    num: ["0", "1", "2", "3", "4", "5"],
  };
  const [minValue, setMinValue] = useState("0");
  const toggleBadge = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    current: string
  ) => {
    setter(current === value ? "0" : value);
  };
  return (
    <div className="space-y-2">
      <Label className="text-gray-200">Minimum {title}</Label>
      <div className="flex flex-wrap gap-2">
        {badgeArr[type].map((value) => (
          <Badge
            key={value}
            variant={minValue === value ? "default" : "outline"}
            className={`cursor-pointer ${
              minValue === value
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "text-gray-200 hover:bg-gray-800"
            } transition-colors`}
            onClick={() => toggleBadge(value, setMinValue, minValue)}
          >
            {value}
          </Badge>
        ))}
      </div>
    </div>
  );
}
