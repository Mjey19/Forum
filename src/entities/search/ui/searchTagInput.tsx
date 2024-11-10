import { Badge } from "@/shared/ui/badge";
import { Input } from "@/shared/ui/input";
import { X } from "lucide-react";
import React, { useState } from "react";

export function SearchTagInput() {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      const newTag = tagInput.trim().toLowerCase();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="relative">
      <Input
        id="tags"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={handleTagInput}
        className="bg-gray-800 border-gray-700 text-gray-100 pl-2 pr-2 py-2"
        placeholder={tags.length ? "" : "Enter tags, separate with comma..."}
      />
      <div className="absolute top-1.5 left-2 right-2 flex flex-wrap gap-1 pointer-events-none">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 pl-2.5 pr-1.5"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="ml-1 hover:text-red-800 pointer-events-auto"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
}
