"use client";
import { ContentCard, FooterCard, HeaderCard } from "@/entities/card";
import { useHotPostList } from "@/features/hotPosts/use-hotPost-list";
import { Card } from "@/shared/ui/card";
import { MinCardInfo } from "@/shared/ui/card-info";
import { CatalogCard, CatalogCardTitle } from "@/shared/ui/сatalog-сard";
import { Flame } from "lucide-react";
import Link from "next/link";
import React from "react";

export function HotPosts() {
  const { hotPosts, isLoading } = useHotPostList();

  if (isLoading) return <div>Loading...</div>;
  return (
    <Card className="bg-gray-900 border-gray-800">
      <HeaderCard titleClassName="text-xl font-semibold text-gray-100 flex items-center">
        <Flame className="mr-2 h-5 w-5 text-orange-500" />
        Hot Posts
      </HeaderCard>
      <ContentCard classname="pt-4">
        <ul className="space-y-4">
          {hotPosts?.map((post, index) => (
            <CatalogCard key={post.id}>
              <Link
                href="#"
                className="flex items-center space-x-3 hover:bg-gray-800 rounded-lg p-2 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <CatalogCardTitle classname="font-medium text-gray-200 line-clamp-1">
                    Hot Topic Title Goes Here
                  </CatalogCardTitle>
                  <MinCardInfo comments={post.comments} likes={12 * post.id} />
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
