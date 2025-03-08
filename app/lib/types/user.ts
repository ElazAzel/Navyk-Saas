import { Role } from '../auth/permissions';

export interface User {
  id: string;
  email: string;
  username: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
  
  // Дополнительные поля в зависимости от роли
  universityId?: string;
  employerId?: string;
  mentorId?: string;
  
  // Профиль пользователя
  profile?: {
    firstName?: string;
    lastName?: string;
    avatar?: string;
    bio?: string;
    location?: string;
    phone?: string;
  };
  
  // Настройки
  settings?: {
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
    privacy: {
      showProfile: boolean;
      showActivity: boolean;
      showContact: boolean;
    };
    theme: 'light' | 'dark' | 'system';
    language: string;
  };
  
  // Метрики и статистика пользователя
  metrics?: {
    completedCourses: number;
    attendedEvents: number;
    appliedJobs: number;
    mentoringSessions: number;
    activityScore: number;
    lastActiveAt: string;
  };
  
  // Дополнительная информация о студенте
  student?: {
    university?: {
      id: string;
      name: string;
      faculty?: string;
      department?: string;
    };
    graduation?: string;
    degree?: 'bachelor' | 'master' | 'phd' | 'other';
    skills?: string[];
    courses?: Array<{
      id: string;
      title: string;
      status: 'completed' | 'in-progress' | 'planned';
      completionDate?: string;
      grade?: number;
    }>;
    certificates?: Array<{
      id: string;
      title: string;
      issuer: string;
      issueDate: string;
      expiryDate?: string;
      credentialUrl?: string;
    }>;
    projects?: Array<{
      id: string;
      title: string;
      description?: string;
      url?: string;
      technologies?: string[];
      startDate?: string;
      endDate?: string;
    }>;
  };
  
  // Дополнительная информация о работодателе
  employer?: {
    company: {
      id: string;
      name: string;
      industry: string;
      size?: string;
      description?: string;
      website?: string;
      logo?: string;
      location?: string;
    };
    position?: string;
    department?: string;
    jobPostings?: number;
  };
  
  // Дополнительная информация о менторе
  mentor?: {
    expertise: string[];
    experience: number;
    rating?: number;
    sessionPrice?: number;
    availability?: Array<{
      day: string;
      startTime: string;
      endTime: string;
    }>;
    totalSessions?: number;
    bio?: string;
  };
  
  // Для администраторов
  admin?: {
    department?: string;
    permissions?: string[];
    lastLogin?: string;
  };
} 