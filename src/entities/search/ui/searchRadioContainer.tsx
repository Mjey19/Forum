import { Label } from "@/shared/ui/label";
import { RadioGroup } from "@/shared/ui/radio-group";
import SearchRadioLink from "@/shared/ui/search-radio-link";
import React from "react";

export function SearchRadioContainer({
  setSearchType,
}: {
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex items-center space-x-4">
      <Label htmlFor="search-type" className="text-gray-200">
        Search in:
      </Label>
      <RadioGroup
        id="search-type"
        defaultValue="threads"
        className="flex space-x-4"
      >
        <SearchRadioLink
          id="threads"
          value="threads"
          link="Threads"
          callback={setSearchType}
        />
        <SearchRadioLink
          id="posts"
          value="posts"
          link="Posts"
          callback={setSearchType}
        />
      </RadioGroup>
    </div>
  );
}
