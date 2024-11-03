
import { ContentCard, FooterCard, HeaderCard } from "@/entities/card";
import { Card } from "@/shared/ui/card";
import { MinCardInfo } from "@/shared/ui/card-info";
import { CatalogCard, CatalogCardTitle } from "@/shared/ui/CatalogCard";
import { Flame } from "lucide-react";
import Link from "next/link";
import React from "react";

export function HotPosts() {
  
  return (
    <Card className="bg-gray-900 border-gray-800">
      <HeaderCard titleClassName="text-xl font-semibold text-gray-100 flex items-center">
        <Flame className="mr-2 h-5 w-5 text-orange-500" />
        Hot Posts
      </HeaderCard>
      <ContentCard classname="pt-4">
        <ul className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <CatalogCard key={i}>
              <Link
                href="#"
                className="flex items-center space-x-3 hover:bg-gray-800 rounded-lg p-2 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                  {i}
                </div>
                <div className="flex-grow">
                  <CatalogCardTitle classname="font-medium text-gray-200 line-clamp-1">
                    Hot Topic Title Goes Here
                  </CatalogCardTitle>
                  <MinCardInfo comments={13 * i + 1} likes={12 * i} />
                </div>
              </Link>
            </CatalogCard>
          ))}
        </ul>
      </ContentCard>
      <FooterCard> View All Hot Posts</FooterCard>
    </Card>
  );
}
