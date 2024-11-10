// 'use client'
import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";
import { Switch } from "@/shared/ui/switch";
import React from "react";

export function SearchAdditionals({ searchType }: { searchType: string }) {
  return (
    <div className="space-y-4">
      <Label className="text-gray-200">Additional Filters</Label>
      <div className="flex flex-wrap gap-8">
        <div className="flex items-center space-x-2">
          <Switch id="has-attachments" />
          <Label
            htmlFor="has-attachments"
            className="text-gray-200 cursor-pointer"
          >
            Has Attachments
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="from-admin" className="border-gray-600 text-blue-500" />
          <Label htmlFor="from-admin" className="text-gray-200 cursor-pointer">
            From Admin/Trusted User
          </Label>
        </div>
        {searchType === "posts" && (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="has-likes"
              className="border-gray-600 text-blue-500"
            />
            <Label htmlFor="has-likes" className="text-gray-200 cursor-pointer">
              Has Likes
            </Label>
          </div>
        )}
      </div>
    </div>
  );
}
