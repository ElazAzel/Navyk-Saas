"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { CalendarIcon, ClockIcon, MapPinIcon, UserGroupIcon, AcademicCapIcon, BriefcaseIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { formatDate, pluralize } from "@/app/lib/utils";
import { motion } from "framer-motion";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  category: "вебинар" | "мастер-класс" | "конференция" | "воркшоп" | "стажировка" | "курс";
  organizerType: "университет" | "работодатель" | "ментор" | "компания";
  organizerName: string;
  organizerLogo?: string;
  attendees: number;
  maxAttendees?: number;
  points: number;
  registered: boolean;
  skills: string[];
}

interface EventCardProps {
  event: Event;
  onRegister?: (eventId: string) => void;
  onCancel?: (eventId: string) => void;
  displayMode?: "compact" | "full";
}

// Иконки для разных типов мероприятий
const categoryIcons = {
  "вебинар": <AcademicCapIcon className="h-5 w-5" />,
  "мастер-класс": <AcademicCapIcon className="h-5 w-5" />,
  "конференция": <UserGroupIcon className="h-5 w-5" />,
  "воркшоп": <AcademicCapIcon className="h-5 w-5" />,
  "стажировка": <BriefcaseIcon className="h-5 w-5" />,
  "курс": <AcademicCapIcon className="h-5 w-5" />
};

// Цвета фона для разных категорий
const categoryColors = {
  "вебинар": "bg-blue-100 text-blue-700",
  "мастер-класс": "bg-purple-100 text-purple-700",
  "конференция": "bg-green-100 text-green-700",
  "воркшоп": "bg-amber-100 text-amber-700",
  "стажировка": "bg-pink-100 text-pink-700",
  "курс": "bg-indigo-100 text-indigo-700"
};

// Иконки организаторов
const organizerIcons = {
  "университет": <BuildingLibraryIcon className="h-4 w-4" />,
  "работодатель": <BriefcaseIcon className="h-4 w-4" />,
  "ментор": <AcademicCapIcon className="h-4 w-4" />,
  "компания": <BriefcaseIcon className="h-4 w-4" />
};

const EventCard: React.FC<EventCardProps> = ({
  event,
  onRegister,
  onCancel,
  displayMode = "full"
}) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  
  const handleRegister = () => {
    if (!onRegister) return;
    
    setIsRegistering(true);
    // Имитация задержки сетевого запроса
    setTimeout(() => {
      onRegister(event.id);
      setIsRegistering(false);
    }, 600);
  };
  
  const handleCancel = () => {
    if (!onCancel) return;
    
    setIsCancelling(true);
    // Имитация задержки сетевого запроса
    setTimeout(() => {
      onCancel(event.id);
      setIsCancelling(false);
    }, 600);
  };

  const formattedDate = formatDate(event.date);
  const availabilityText = event.maxAttendees 
    ? `${event.attendees} из ${event.maxAttendees} ${pluralize(event.maxAttendees, "место", "места", "мест")}`
    : `${event.attendees} ${pluralize(event.attendees, "участник", "участника", "участников")}`;
  
  if (displayMode === "compact") {
    return (
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardHeader className="pb-2 pt-4">
          <div className="flex justify-between items-start">
            <div>
              <Badge variant="outline" className={`${categoryColors[event.category]} border-0 mb-1`}>
                {event.category}
              </Badge>
              <CardTitle className="text-base">{event.title}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
            <CalendarIcon className="h-3.5 w-3.5" />
            <span>{formattedDate}</span>
            <span>•</span>
            <ClockIcon className="h-3.5 w-3.5" />
            <span>{event.startTime}</span>
          </div>
        </CardContent>
        <CardFooter className="pt-0 pb-3">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-1 text-xs">
              <UserGroupIcon className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{availabilityText}</span>
            </div>
            <Badge variant={event.registered ? "default" : "outline"}>
              {event.registered ? "Вы записаны" : `+${event.points} баллов`}
            </Badge>
          </div>
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className={`${categoryColors[event.category]} border-0 mb-1`}>
              <span className="flex items-center gap-1">
                {categoryIcons[event.category]}
                {event.category}
              </span>
            </Badge>
            <CardTitle>{event.title}</CardTitle>
            <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
              {organizerIcons[event.organizerType]}
              <span>{event.organizerName}</span>
            </div>
          </div>
          
          <Badge variant="outline" className="text-sm py-1">
            +{event.points} баллов
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm mb-4">{event.description}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <ClockIcon className="h-4 w-4 text-muted-foreground" />
            <span>{event.startTime} - {event.endTime}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <MapPinIcon className="h-4 w-4 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <UserGroupIcon className="h-4 w-4 text-muted-foreground" />
            <span>{availabilityText}</span>
          </div>
        </div>
        
        {event.skills.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-muted-foreground mb-1">Связанные навыки:</p>
            <div className="flex flex-wrap gap-1">
              {event.skills.map(skill => (
                <Badge key={skill} variant="outline" className="text-xs py-0">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <div className="w-full">
          {event.registered ? (
            <Button
              onClick={handleCancel}
              disabled={isCancelling}
              variant="destructive"
              className="w-full flex items-center justify-center"
            >
              {isCancelling ? (
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>Отмена регистрации...</span>
                </div>
              ) : (
                <span>Отменить регистрацию</span>
              )}
            </Button>
          ) : (
            <Button
              onClick={handleRegister}
              disabled={isRegistering || (event.maxAttendees !== undefined && event.attendees >= event.maxAttendees)}
              className="w-full flex items-center justify-center"
            >
              {isRegistering ? (
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>Регистрация...</span>
                </div>
              ) : event.maxAttendees !== undefined && event.attendees >= event.maxAttendees ? (
                <span>Мест нет</span>
              ) : (
                <span>Зарегистрироваться</span>
              )}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard; 