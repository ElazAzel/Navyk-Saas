"use client";

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export interface RoadmapStep {
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'upcoming'
  skills: string[]
}

interface CareerRoadmapProps {
  steps: readonly RoadmapStep[] | RoadmapStep[]
  targetRole?: string
  progress?: number
}

const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ 
  steps, 
  targetRole = "Full-stack разработчик", 
  progress = 40 
}) => {
  
  // Функция для определения цвета в зависимости от статуса
  const getStatusColor = (status: RoadmapStep['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'in-progress':
        return 'bg-blue-500'
      case 'upcoming':
        return 'bg-gray-300'
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Прогресс к роли: {targetRole}</h3>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="space-y-4 relative">
        {/* Вертикальная линия для соединения шагов */}
        <div className="absolute left-3 top-5 bottom-5 w-0.5 bg-border" />

        {steps.map((step, index) => (
          <div key={index} className="relative flex gap-4">
            {/* Маркер статуса */}
            <div className={`h-6 w-6 rounded-full flex-shrink-0 ${getStatusColor(step.status)} z-10`} />

            <Card className="flex-grow">
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-medium">{step.title}</h4>
                  <Badge variant={
                    step.status === 'completed' ? 'default' : 
                    step.status === 'in-progress' ? 'secondary' : 'outline'
                  }>
                    {step.status === 'completed' ? 'Выполнено' : 
                     step.status === 'in-progress' ? 'В процессе' : 'Предстоит'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                <div className="flex flex-wrap gap-1">
                  {step.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CareerRoadmap 