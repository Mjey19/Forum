import React from "react";

export default async function page({ params }: { params: { id: number } }) {
  const { id } = await params;
  return <div>page {id}</div>;
}
