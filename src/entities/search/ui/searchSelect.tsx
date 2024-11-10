import { Label } from "@/shared/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import React from "react";
import { Input } from "@/shared/ui/input";

export function SearchSelect() {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="category" className="text-gray-200">
          Category
        </Label>
        <Select>
          <SelectTrigger
            id="category"
            className="bg-gray-800 border-gray-700 text-gray-100"
          >
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="general">General Discussion</SelectItem>
            <SelectItem value="tech">Technology</SelectItem>
            <SelectItem value="gaming">Gaming</SelectItem>
            <SelectItem value="offtopic">Off-Topic</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sort" className="text-gray-200">
          Sort By
        </Label>
        <Select>
          <SelectTrigger
            id="sort"
            className="bg-gray-800 border-gray-700 text-gray-100"
          >
            <SelectValue placeholder="Sort results" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="replies">Most Replies</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-gray-200">Date Range</Label>
        <div className="flex items-center space-x-2">
          <Input
            type="date"
            className="bg-gray-800 border-gray-700 text-gray-100"
          />
          <span>to</span>
          <Input
            type="date"
            className="bg-gray-800 border-gray-700 text-gray-100"
          />
        </div>
      </div>
    </>
  );
}
