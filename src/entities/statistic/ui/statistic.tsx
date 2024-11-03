import { StatisticLi } from "@/shared/ui/statistic";
import { Activity, FileText, MessageSquare, Users } from "lucide-react";
import React from "react";

export function Statistic() {
  return (
    <ul className="space-y-3">
      <StatisticLi
        image={<Users className="h-4 w-4 mr-2 text-blue-400" />}
        statistic={10542}
        title="Total Members:"
      />
      <StatisticLi
        image={<FileText className=" h-4 w-4 mr-2 text-green-400" />}
        statistic={25678}
        title="Total Threads:"
      />
      <StatisticLi
        image={<MessageSquare className=" h-4 w-4 mr-2 text-yellow-400" />}
        statistic={132456}
        title="Total Posts:"
      />
      <StatisticLi
        image={<Activity className="h-4 w-4 mr-2 text-purple-400" />}
        statistic={342}
        title="Online Members:"
      />
    </ul>
  );
}
