// 'use client'
import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";
import { Switch } from "@/shared/ui/switch";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export function SearchAdditionals({ searchType }: { searchType: string }) {
  const { control } = useFormContext();
  return (
    <div className="space-y-4">
      <Label className="text-gray-200">Additional Filters</Label>
      <div className="flex flex-wrap gap-8">
        <div className="flex items-center space-x-2">
          <Controller
            name="has-attachments"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <Switch checked={value} onCheckedChange={onChange} />
            )}
          />
          <Label
            htmlFor="has-attachments"
            className="text-gray-200 cursor-pointer"
          >
            Has Attachments
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Controller
            name="from-admin"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                checked={value}
                onCheckedChange={onChange}
                className="border-gray-600 text-blue-500"
              />
            )}
          />
          <Label htmlFor="from-admin" className="text-gray-200 cursor-pointer">
            From Admin/Trusted User
          </Label>
        </div>
        {searchType === "posts" && (
          <div className="flex items-center space-x-2">
            <Controller
              name="has-likes"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  checked={value}
                  onCheckedChange={onChange}
                  className="border-gray-600 text-blue-500"
                />
              )}
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
