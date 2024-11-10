import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Search } from "lucide-react";
import React from "react";

export function SearchInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="search" className="text-gray-200">
        Keyword Search
      </Label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          id="search"
          className="pl-10 bg-gray-800 border-gray-700 text-gray-100"
          placeholder={`Search threads...`}
        />
      </div>
    </div>
  );
}
