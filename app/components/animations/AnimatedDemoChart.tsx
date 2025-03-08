"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function AnimatedDemoChart() {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });
  
  return (
    <div ref={chartRef} className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-4 sm:p-6">
      <div className="absolute top-4 left-6 flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      
      <div className="pt-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Активность студентов по направлениям</h3>
          <Badge variant="outline" className="ml-2">Последние 30 дней</Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Области интересов</h4>
            <div className="space-y-4">
              {[
                { label: "Разработка", value: 38 },
                { label: "Дизайн", value: 22 },
                { label: "Маркетинг", value: 18 },
                { label: "Аналитика", value: 15 },
                { label: "Менеджмент", value: 7 },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.label}</span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.value}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Активность по типам</h4>
            <div className="relative h-60">
              <div className="absolute inset-0 flex items-end justify-around">
                {[65, 48, 72, 53, 41].map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-8 bg-gradient-to-t from-indigo-600 to-blue-400 rounded-t-lg"
                    style={{ height: `${height}%` }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={isInView ? { height: `${height}%`, opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                  />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-around">
                {["Вакансии", "Курсы", "События", "Навыки", "Тесты"].map((label, i) => (
                  <div key={i} className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Рост навыков по неделям</h4>
          <div className="relative h-32">
            <svg className="w-full h-full">
              <motion.path
                d="M0,100 Q50,80 100,75 T200,60 T300,40 T400,30 T500,20 T600,25"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Неделя 1</span>
              <span>Неделя 2</span>
              <span>Неделя 3</span>
              <span>Неделя 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 