import React from 'react'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface AnalyticsDashboardProps {
  data: {
    totalApplications: number
    totalViews: number
    conversionRate: number
    activeVacancies: number
    metrics: {
      label: string
      value: number
      change: number
    }[]
  }
}

function AnalyticsDashboard({ data }: AnalyticsDashboardProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6">
        <h3 className="text-lg font-medium">Всего заявок</h3>
        <div className="mt-2 text-3xl font-bold">{data.totalApplications}</div>
        <Progress value={75} className="mt-4" />
      </Card>
      
      <Card className="p-6">
        <h3 className="text-lg font-medium">Просмотры</h3>
        <div className="mt-2 text-3xl font-bold">{data.totalViews}</div>
        <Progress value={60} className="mt-4" />
      </Card>
      
      <Card className="p-6">
        <h3 className="text-lg font-medium">Конверсия</h3>
        <div className="mt-2 text-3xl font-bold">{data.conversionRate}%</div>
        <Progress value={data.conversionRate} className="mt-4" />
      </Card>
      
      <Card className="p-6">
        <h3 className="text-lg font-medium">Активные вакансии</h3>
        <div className="mt-2 text-3xl font-bold">{data.activeVacancies}</div>
        <Progress value={40} className="mt-4" />
      </Card>
      
      {data.metrics.map((metric, index) => (
        <Card key={index} className="p-6">
          <h3 className="text-lg font-medium">{metric.label}</h3>
          <div className="mt-2 text-3xl font-bold">{metric.value}</div>
          <div className={`mt-2 text-sm ${metric.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {metric.change > 0 ? '+' : ''}{metric.change}%
          </div>
        </Card>
      ))}
    </div>
  )
}

export default AnalyticsDashboard 