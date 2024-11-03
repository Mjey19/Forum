import { Button } from "@/shared/ui/button";
import {
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/shared/ui/card";
import React, { ReactNode } from "react";

function HeaderCard({
  children,
  titleClassName,
  headerClassName,
}: {
  children: ReactNode;
  titleClassName: string;
  headerClassName?: string;
}) {
  return (
    <CardHeader
      className={headerClassName ? headerClassName : "border-b border-gray-800"}
    >
      <CardTitle className={titleClassName}>{children}</CardTitle>
    </CardHeader>
  );
}

function FooterCard({ children }: { children: ReactNode }) {
  return (
    <CardFooter>
      <Button
        variant="default"
        className="w-full bg-gray-800 hover:bg-gray-700 text-gray-200"
      >
        {children}
      </Button>
    </CardFooter>
  );
}
function ContentCard({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) {
  return <CardContent className={classname}>{children}</CardContent>;
}

export { ContentCard, HeaderCard, FooterCard };
