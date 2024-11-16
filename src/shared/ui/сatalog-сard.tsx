import React, { ReactNode } from "react";

export function CatalogCardTitle({
  children,
  classname,
}: {
  children: ReactNode;
  classname: string;
}) {
  return <h3 className={classname}>{children}</h3>;
}
export function CatalogCardDesc({
  children,
  classname,
}: {
  children: ReactNode;
  classname: string;
}) {
  return <p className={classname}>{children}</p>;
}
export function CatalogCard({
  classname,
  children,
}: {
  children: ReactNode;
  classname?: string;
}) {
  return <li className={classname}>{children}</li>;
}
