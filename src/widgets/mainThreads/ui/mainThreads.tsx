"use client";
import { ContentCard, FooterCard, HeaderCard } from "@/entities/card";
import { useThreadsList } from "@/features/threads/use-threads-list";
import { Card } from "@/shared/ui/card";
import { StandartCardInfo } from "@/shared/ui/card-info";
import {
  CatalogCard,
  CatalogCardDesc,
  CatalogCardTitle,
} from "@/shared/ui/CatalogCard";
import Link from "next/link";
import React from "react";

export function Threads() {
  const { filterData, isLoading } = useThreadsList();

  return (
    <Card className="bg-gray-900 border-gray-800">
      <HeaderCard titleClassName="text-xl font-semibold text-gray-100">
        Trending Topics
      </HeaderCard>
      <ContentCard classname="pt-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="space-y-4">
            {filterData?.map((item) => {
              return (
                <CatalogCard
                  key={item.id}
                  classname="border-b border-gray-800 pb-4 last:border-b-0 last:pb-0"
                >
                  <Link
                    href="#"
                    className="block  hover:bg-gray-800 rounded-lg p-3 transition-colors"
                  >
                    <CatalogCardTitle classname="font-semibold mb-1 text-gray-100">
                      {item.title}
                    </CatalogCardTitle>
                    <CatalogCardDesc classname="text-sm text-gray-400 mb-2 line-clamp-2">
                      {item.description}
                    </CatalogCardDesc>
                    <StandartCardInfo
                      comments={item.comments}
                      cardTime={item.cardTime}
                      username={item.username}
                    />
                  </Link>
                </CatalogCard>
              );
            })}
          </ul>
        )}
      </ContentCard>
      <FooterCard>View More Topics</FooterCard>
    </Card>
  );
}
