import { User } from '../types/user';

// Типы ролей
export type Role = 
  | 'student'
  | 'employer'
  | 'university_admin'
  | 'mentor'
  | 'admin'
  | 'super_admin';

// Типы ресурсов
export type Resource = 
  | 'analytics'
  | 'students'
  | 'courses'
  | 'jobs'
  | 'events'
  | 'mentorship'
  | 'universities'
  | 'employers'
  | 'system_settings';

// Типы действий
export type Action = 
  | 'view'
  | 'create'
  | 'edit'
  | 'delete'
  | 'manage'
  | 'export';

// Интерфейс для правила доступа
export interface AccessRule {
  resource: Resource;
  actions: Action[];
  // Опциональная функция для тонкой настройки доступа
  condition?: (user: User, resourceId?: string) => boolean;
}

// Типизированная карта доступов с ролями и правилами
export type RolePermissionMap = Record<Role, AccessRule[]>;

// Определение разрешений для каждой роли
export const rolePermissions: RolePermissionMap = {
  student: [
    {
      resource: 'analytics',
      actions: ['view'],
      // Студент может видеть только свою аналитику
      condition: (user, resourceId) => resourceId === user.id
    },
    {
      resource: 'courses',
      actions: ['view']
    },
    {
      resource: 'jobs',
      actions: ['view']
    },
    {
      resource: 'events',
      actions: ['view']
    },
    {
      resource: 'mentorship',
      actions: ['view']
    }
  ],
  
  employer: [
    {
      resource: 'analytics',
      actions: ['view'],
      // Работодатель может видеть только аналитику по своим вакансиям
      condition: (user, resourceId) => {
        // В реальном приложении здесь была бы проверка привязки resourceId к вакансиям работодателя
        return user.employerId !== undefined;
      }
    },
    {
      resource: 'jobs',
      actions: ['view', 'create', 'edit', 'delete'],
      // Работодатель может управлять только своими вакансиями
      condition: (user, resourceId) => {
        // В реальном приложении здесь была бы проверка принадлежности вакансии
        return user.employerId !== undefined;
      }
    },
    {
      resource: 'students',
      actions: ['view'],
      // Работодатель может видеть студентов, которые откликнулись на его вакансии
      condition: (user) => user.employerId !== undefined
    },
    {
      resource: 'events',
      actions: ['view', 'create', 'edit', 'delete'],
      // Работодатель может управлять только своими мероприятиями
      condition: (user, resourceId) => {
        // В реальном приложении здесь была бы проверка принадлежности мероприятия
        return user.employerId !== undefined;
      }
    }
  ],
  
  university_admin: [
    {
      resource: 'analytics',
      actions: ['view', 'export'],
      // Администратор университета может видеть аналитику по студентам своего университета
      condition: (user) => user.universityId !== undefined
    },
    {
      resource: 'students',
      actions: ['view', 'edit'],
      // Администратор университета может видеть и редактировать студентов своего университета
      condition: (user, resourceId) => {
        // В реальном приложении здесь была бы проверка принадлежности студента к университету
        return user.universityId !== undefined;
      }
    },
    {
      resource: 'courses',
      actions: ['view', 'create', 'edit', 'delete'],
      // Администратор университета может управлять курсами своего университета
      condition: (user, resourceId) => {
        // В реальном приложении здесь была бы проверка принадлежности курса
        return user.universityId !== undefined;
      }
    },
    {
      resource: 'events',
      actions: ['view', 'create', 'edit', 'delete'],
      // Администратор университета может управлять мероприятиями своего университета
      condition: (user, resourceId) => {
        // В реальном приложении здесь была бы проверка принадлежности мероприятия
        return user.universityId !== undefined;
      }
    }
  ],
  
  mentor: [
    {
      resource: 'analytics',
      actions: ['view'],
      // Ментор может видеть аналитику своих студентов
      condition: (user, resourceId) => {
        // В реальном приложении здесь была бы проверка привязки студента к ментору
        return user.mentorId !== undefined;
      }
    },
    {
      resource: 'students',
      actions: ['view'],
      // Ментор может видеть только своих студентов
      condition: (user, resourceId) => {
        // В реальном приложении здесь была бы проверка привязки студента к ментору
        return user.mentorId !== undefined;
      }
    },
    {
      resource: 'mentorship',
      actions: ['view', 'create', 'edit'],
      // Ментор может управлять менторскими сессиями
      condition: (user, resourceId) => {
        // В реальном приложении здесь была бы проверка принадлежности сессии
        return user.mentorId !== undefined;
      }
    }
  ],
  
  admin: [
    {
      resource: 'analytics',
      actions: ['view', 'export', 'manage']
    },
    {
      resource: 'students',
      actions: ['view', 'edit', 'delete', 'manage']
    },
    {
      resource: 'courses',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'jobs',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'events',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'mentorship',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'universities',
      actions: ['view', 'edit', 'manage']
    },
    {
      resource: 'employers',
      actions: ['view', 'edit', 'manage']
    },
    // Администратор не может менять системные настройки
    {
      resource: 'system_settings',
      actions: ['view']
    }
  ],
  
  super_admin: [
    {
      resource: 'analytics',
      actions: ['view', 'create', 'edit', 'delete', 'manage', 'export']
    },
    {
      resource: 'students',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'courses',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'jobs',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'events',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'mentorship',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'universities',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'employers',
      actions: ['view', 'create', 'edit', 'delete', 'manage']
    },
    {
      resource: 'system_settings',
      actions: ['view', 'edit', 'manage']
    }
  ]
};

/**
 * Проверяет, имеет ли пользователь разрешение на выполнение действия с ресурсом
 * @param user Пользователь
 * @param resource Ресурс
 * @param action Действие
 * @param resourceId Идентификатор ресурса (опционально)
 * @returns Имеет ли пользователь разрешение
 */
export function hasPermission(
  user: User,
  resource: Resource,
  action: Action,
  resourceId?: string
): boolean {
  // Проверка существования пользователя
  if (!user || !user.role) {
    return false;
  }
  
  // Получение правил для роли пользователя
  const roleRules = rolePermissions[user.role as Role];
  
  // Если роль не определена, доступ запрещен
  if (!roleRules) {
    return false;
  }
  
  // Поиск правила для указанного ресурса
  const rule = roleRules.find(r => r.resource === resource);
  
  // Если правило для ресурса не найдено, доступ запрещен
  if (!rule) {
    return false;
  }
  
  // Проверка наличия действия в списке разрешенных
  const hasAction = rule.actions.includes(action);
  
  // Если действие не разрешено, доступ запрещен
  if (!hasAction) {
    return false;
  }
  
  // Если есть дополнительное условие, проверяем его
  if (rule.condition) {
    return rule.condition(user, resourceId);
  }
  
  // Если все проверки пройдены, доступ разрешен
  return true;
}

/**
 * Получает все ресурсы, доступные пользователю
 * @param user Пользователь
 * @returns Список доступных ресурсов с разрешенными действиями
 */
export function getUserAccessibleResources(user: User): Record<Resource, Action[]> {
  const result: Partial<Record<Resource, Action[]>> = {};
  
  if (!user || !user.role) {
    return {} as Record<Resource, Action[]>;
  }
  
  const roleRules = rolePermissions[user.role as Role];
  
  if (!roleRules) {
    return {} as Record<Resource, Action[]>;
  }
  
  // Для каждого правила роли
  roleRules.forEach(rule => {
    // Если условие не указано или оно выполняется
    if (!rule.condition || rule.condition(user)) {
      result[rule.resource] = rule.actions;
    }
  });
  
  return result as Record<Resource, Action[]>;
}

// Hook для проверки разрешений в React-компонентах
export function usePermission(user: User) {
  return {
    /**
     * Проверяет разрешение для указанного ресурса и действия
     */
    check: (resource: Resource, action: Action, resourceId?: string) => {
      return hasPermission(user, resource, action, resourceId);
    },
    
    /**
     * Получает все доступные ресурсы и действия
     */
    getAccessibleResources: () => {
      return getUserAccessibleResources(user);
    },
    
    /**
     * Фильтрует список элементов, оставляя только те, к которым у пользователя есть доступ
     */
    filterAccessible: <T extends { id: string; resourceType: Resource }>(
      items: T[],
      action: Action
    ) => {
      return items.filter(item => hasPermission(user, item.resourceType, action, item.id));
    }
  };
}

// Вспомогательная функция для проверки доступа
export function withPermission(user: User, resource: Resource, action: Action): boolean {
  return hasPermission(user, resource, action);
} 