import { HeaderCard } from '@/entities/card'
import { Statistic } from '@/entities/statistic'
import { Card, CardContent } from '@/shared/ui/card'
import { TrendingUp } from 'lucide-react'
import React from 'react'

export  function ForumStat() {
  return (
    <Card className="bg-gray-900 border-gray-800">
    <HeaderCard
      headerClassName="border-b border-gray-800"
      titleClassName="text-xl font-semibold text-gray-100 flex items-center"
    >
      <TrendingUp className="mr-2 h-5 w-5 text-blue-400" />
      Forum Stats
    </HeaderCard>
    <CardContent className="pt-4">
      <Statistic />
    </CardContent>
  </Card>
  )
}
