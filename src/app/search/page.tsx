"use client";

import SearchPage from "@/widgets/search/ui/search";
// import { useState } from "react";
// import { Search, Filter, X } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/shared/ui/card";
// import { Badge } from "@/shared/ui/badge";
// import { Input } from "@/shared/ui/input";
// import { Label } from "@/shared/ui/label";

// import { Separator } from "@/shared/ui/separator";
// import { Button } from "@/shared/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/shared/ui/select";
// import {
//   SearchAdditionals,
//   SearchBadge,
//   SearchRadioContainer,
// } from "@/entities/search";

// export default function SearchThreadsPage() {
//   const [tags, setTags] = useState<string[]>([]);
//   const [tagInput, setTagInput] = useState("");

//   const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "," || e.key === "Enter") {
//       e.preventDefault();
//       const newTag = tagInput.trim().toLowerCase();
//       if (newTag && !tags.includes(newTag)) {
//         setTags([...tags, newTag]);
//         setTagInput("");
//       }
//     }
//   };

//   const removeTag = (tagToRemove: string) => {
//     setTags(tags.filter((tag) => tag !== tagToRemove));
//   };
export default function Search() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-100">Search Forum</h1>
        <SearchPage />
        {/* <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center text-gray-100">
              <Filter className="mr-2 h-5 w-5" />
              Search Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <SearchRadioContainer />

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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <SelectItem value="general">
                        General Discussion
                      </SelectItem>
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

                <SearchBadge type="str" title="Comments" />
                <SearchBadge type="str" title="Views" />
              </div>

              <Separator className="bg-gray-800" />
              <SearchAdditionals />
             

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-gray-200">
                  Tags
                </Label>
                <div className="relative">
                  <Input
                    id="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagInput}
                    className="bg-gray-800 border-gray-700 text-gray-100 pl-2 pr-2 py-2"
                    placeholder="Enter tags, separate with comma..."
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="author" className="text-gray-200">
                  Author
                </Label>
                <Input
                  id="author"
                  className="bg-gray-800 border-gray-700 text-gray-100"
                  placeholder="Enter username"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Search
            </Button>
          </CardFooter>
        </Card> */}
      </main>
    </div>
  );
}
