import { ContentCard, HeaderCard } from "@/entities/card";
import { Card } from "@/shared/ui/card";
import { StandartCardInfo } from "@/shared/ui/card-info";
import {
  CatalogCard,
  CatalogCardDesc,
  CatalogCardTitle,
} from "@/shared/ui/CatalogCard";
import Link from "next/link";
import React from "react";

export function Catalog() {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <HeaderCard titleClassName="text-xl font-semibold text-gray-100">
        Search Results
      </HeaderCard>
      <ContentCard>
        <ul className="space-y-4">
          {[1, 2, 3, 4, 5].map((id) => (
            <CatalogCard
              key={id}
              classname="border-b border-gray-800 pb-4 last:border-b-0 last:pb-0"
            >
              <Link
                href={`/catalog/${id}`}
                className="block  hover:bg-gray-800 rounded-lg p-3 transition-colors"
              >
                <CatalogCardTitle classname="font-semibold mb-1 text-gray-100">
                  Thread Title {id}
                </CatalogCardTitle>
                <CatalogCardDesc classname="text-sm text-gray-400 mb-2 line-clamp-2">
                  This is a brief excerpt or description of the thread content.
                  It provides a quick overview of what the discussion is about.
                </CatalogCardDesc>
                <StandartCardInfo
                  comments={id * 7}
                  cardTime="23"
                  username={`User ${id}`}
                />
              </Link>
            </CatalogCard>
            // <li
            //   key={i}
            //   className="border-b border-gray-800 pb-4 last:border-b-0 last:pb-0"
            // >
            //   <Link
            //     href="#"
            //     className="block hover:bg-gray-800 rounded-lg p-3 transition-colors"
            //   >
            //     <h3 className="font-semibold mb-1 text-gray-100">
            //       Thread Title {i}
            //     </h3>
            //     <p className="text-sm text-gray-400 mb-2 line-clamp-2">
            //       This is a brief excerpt or description of the thread content.
            //       It provides a quick overview of what the discussion is about.
            //     </p>
            //     <div className="flex items-center text-xs text-gray-500 space-x-4">
            //       <span className="flex items-center">
            //         <User className="mr-1 h-3 w-3" />
            //         User{i}
            //       </span>
            //       <span className="flex items-center">
            //         <Calendar className="mr-1 h-3 w-3" />
            //         {i} day{i !== 1 ? "s" : ""} ago
            //       </span>
            //       <span className="flex items-center">
            //         <MessageSquare className="mr-1 h-3 w-3" />
            //         {i * 7} replies
            //       </span>
            //       <span className="flex items-center">
            //         <Eye className="mr-1 h-3 w-3" />
            //         {i * 100} views
            //       </span>
            //       <span className="flex items-center">
            //         <ThumbsUp className="mr-1 h-3 w-3" />
            //         {i * 5} likes
            //       </span>
            //     </div>
            //   </Link>
            // </li>
          ))}
        </ul>
      </ContentCard>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <div className="text-sm text-gray-400">Page 1 of 10</div>
        <Button variant="outline">Next</Button>
      </CardFooter> */}
    </Card>
  );
}
