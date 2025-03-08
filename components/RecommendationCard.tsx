"use client";

import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface RecommendationCardProps {
  title: string
  type: 'course' | 'event' | 'job' | 'mentor'
  description: string
  skills: string[]
  matchPercentage: number
  actionLabel: string
  onAction: () => void
}

function RecommendationCard({
  title,
  type,
  description,
  skills,
  matchPercentage,
  actionLabel,
  onAction
}: RecommendationCardProps) {
  const getTypeColor = (type: RecommendationCardProps['type']) => {
    switch (type) {
      case 'course':
        return 'bg-blue-500'
      case 'event':
        return 'bg-purple-500'
      case 'job':
        return 'bg-green-500'
      case 'mentor':
        return 'bg-rose-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <Card className="p-6 relative">
      <div className={`absolute left-0 top-0 w-2 h-full ${getTypeColor(type)} rounded-l-lg`} />
      <div className="ml-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <Badge variant="secondary" className="mb-2">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
          </div>
          <Badge variant="outline" className="text-lg">
            {matchPercentage}% совпадение
          </Badge>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
        
        <Button onClick={onAction} className="w-full">
          {actionLabel}
        </Button>
      </div>
    </Card>
  )
}

export default RecommendationCard 