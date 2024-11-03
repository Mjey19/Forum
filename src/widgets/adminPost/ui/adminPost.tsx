import { ContentCard, HeaderCard } from "@/entities/card";
import { Card } from "@/shared/ui/card";
import { StandartCardInfo } from "@/shared/ui/card-info";
import React from "react";

export function AdminPost() {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <HeaderCard
        headerClassName="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        titleClassName="text-2xl font-bold"
      >
        Latest News
      </HeaderCard>
      <ContentCard classname="pt-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">
          Forum Update: New Features Released!
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Were excited to announce the release of several new features that will
          enhance your forum experience. From improved search capabilities to a
          redesigned user interface, these updates are designed to make your
          time on our platform more enjoyable and productive.
        </p>
        <StandartCardInfo cardTime="2 hours ago" username="Posted by Admin" />
      </ContentCard>
    </Card>
  );
}
