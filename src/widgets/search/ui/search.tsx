"use client";
import { useState } from "react";
import { Filter } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

import { Separator } from "@/shared/ui/separator";
import { Button } from "@/shared/ui/button";
import {
  SearchAdditionals,
  SearchBadge,
  SearchInput,
  SearchRadioContainer,
  SearchSelect,
  SearchTagInput,
} from "@/entities/search";

export default function SearchPage() {
  const [searchType, setSearchType] = useState("threads");

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center text-gray-100">
          <Filter className="mr-2 h-5 w-5" />
          Search Filters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <SearchRadioContainer setSearchType={setSearchType} />

          <SearchInput />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SearchSelect />
            <SearchBadge type="str" title="Comments" />
            <SearchBadge type="str" title="Views" />
            {searchType === "posts" && (
              <SearchBadge type="num" title="Rating" />
            )}
          </div>
          <Separator className="bg-gray-800" />
          <SearchAdditionals searchType={searchType} />

          <div className="space-y-2">
            <Label htmlFor="tags" className="text-gray-200">
              Tags
            </Label>
            <SearchTagInput />
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
    </Card>
  );
}
