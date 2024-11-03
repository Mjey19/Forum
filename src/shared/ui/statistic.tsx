import React, { ReactNode } from "react";
type statisticType = {
  image: ReactNode;
  statistic: number;
  title: string;
};
export function StatisticLi({ image, title, statistic }: statisticType) {
  return (
    <li className="flex justify-between items-center">
      <span className="text-gray-400 flex items-center">
        {image}

        {title}
      </span>
      <span className="font-semibold text-gray-200">{statistic}</span>
    </li>
  );
}
