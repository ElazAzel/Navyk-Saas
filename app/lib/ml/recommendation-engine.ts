import { User } from '../types/user';

// Тип для рекомендации
export interface Recommendation {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'job' | 'event' | 'mentor';
  relevanceScore: number; // от 0 до 100
  skills: string[];
  image?: string;
  url?: string;
  provider?: string;
  date?: string;
  location?: string;
  price?: number;
  duration?: string;
  popularity?: number; // от 0 до 100
  difficulty?: number; // от 1 до 5
  prerequisites?: string[];
  tags?: string[];
  status?: 'new' | 'trending' | 'recommended' | 'popular';
}

// Пример данных курсов
const COURSES: Recommendation[] = [
  {
    id: 'course-1',
    title: 'Python для анализа данных',
    description: 'Полный курс по анализу данных с использованием Python, pandas, numpy и matplotlib',
    type: 'course',
    relevanceScore: 95,
    skills: ['Python', 'Data Analysis', 'pandas', 'numpy', 'matplotlib'],
    provider: 'KazNU',
    price: 0,
    duration: '8 недель',
    difficulty: 3,
    popularity: 89,
    tags: ['Data Science', 'Programming', 'Analytics'],
    status: 'recommended'
  },
  {
    id: 'course-2',
    title: 'Java Spring Boot для веб-разработки',
    description: 'Создайте современные веб-приложения с использованием Spring Boot и Spring Cloud',
    type: 'course',
    relevanceScore: 82,
    skills: ['Java', 'Spring Boot', 'REST API', 'Microservices'],
    provider: 'KBTU',
    price: 25000,
    duration: '12 недель',
    difficulty: 4,
    popularity: 78,
    tags: ['Backend', 'Programming', 'Enterprise'],
    status: 'trending'
  },
  {
    id: 'course-3',
    title: 'React и Redux для фронтенд-разработки',
    description: 'Изучите современный стек фронтенд-разработки с React, Redux и TypeScript',
    type: 'course',
    relevanceScore: 88,
    skills: ['JavaScript', 'React', 'Redux', 'TypeScript'],
    provider: 'Astana IT University',
    price: 30000,
    duration: '10 недель',
    difficulty: 3,
    popularity: 92,
    tags: ['Frontend', 'Programming', 'UI/UX'],
    status: 'popular'
  },
  {
    id: 'course-4',
    title: 'DevOps практики и инструменты',
    description: 'Автоматизация разработки и развертывания с Docker, Kubernetes и CI/CD',
    type: 'course',
    relevanceScore: 75,
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Git'],
    provider: 'DevOps Academy',
    price: 45000,
    duration: '8 недель',
    difficulty: 4,
    popularity: 72,
    tags: ['DevOps', 'Cloud', 'Automation']
  },
  {
    id: 'course-5',
    title: 'SQL и базы данных для аналитиков',
    description: 'Продвинутые техники работы с базами данных и оптимизация запросов',
    type: 'course',
    relevanceScore: 92,
    skills: ['SQL', 'PostgreSQL', 'Database Design', 'Query Optimization'],
    provider: 'Data School',
    price: 20000,
    duration: '6 недель',
    difficulty: 3,
    popularity: 85,
    tags: ['Database', 'Analytics', 'SQL'],
    status: 'recommended'
  },
];

// Пример данных вакансий
const JOBS: Recommendation[] = [
  {
    id: 'job-1',
    title: 'Junior Data Analyst',
    description: 'Анализ данных компании, создание отчетов и дашбордов для принятия решений',
    type: 'job',
    relevanceScore: 91,
    skills: ['SQL', 'Python', 'Data Visualization', 'Statistics'],
    provider: 'Kaspi Bank',
    location: 'Алматы',
    tags: ['Finance', 'Analytics', 'FinTech'],
    status: 'new'
  },
  {
    id: 'job-2',
    title: 'Frontend Developer (React)',
    description: 'Разработка пользовательских интерфейсов для web-приложений с использованием React',
    type: 'job',
    relevanceScore: 88,
    skills: ['JavaScript', 'React', 'TypeScript', 'HTML/CSS'],
    provider: 'Kolesa Group',
    location: 'Алматы',
    tags: ['IT', 'Frontend', 'Product'],
    status: 'recommended'
  },
  {
    id: 'job-3',
    title: 'Java Developer',
    description: 'Разработка back-end для корпоративных приложений с использованием Java и Spring',
    type: 'job',
    relevanceScore: 78,
    skills: ['Java', 'Spring', 'Hibernate', 'SQL'],
    provider: 'Beeline',
    location: 'Астана',
    tags: ['Telecom', 'Backend', 'Enterprise'],
    status: 'popular'
  },
  {
    id: 'job-4',
    title: 'DevOps Engineer',
    description: 'Настройка и поддержка CI/CD, управление инфраструктурой компании',
    type: 'job',
    relevanceScore: 72,
    skills: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    provider: 'Kcell',
    location: 'Алматы',
    tags: ['Telecom', 'Infrastructure', 'Cloud']
  },
  {
    id: 'job-5',
    title: 'Product Manager',
    description: 'Управление продуктовой линейкой компании, анализ рынка и потребностей пользователей',
    type: 'job',
    relevanceScore: 68,
    skills: ['Product Management', 'Agile', 'Market Analysis', 'UX Research'],
    provider: 'Chocofamily',
    location: 'Алматы',
    tags: ['E-commerce', 'Management', 'Product']
  },
];

// Пример данных мероприятий
const EVENTS: Recommendation[] = [
  {
    id: 'event-1',
    title: 'Хакатон по искусственному интеллекту',
    description: '48-часовой хакатон для разработки решений на основе ИИ',
    type: 'event',
    relevanceScore: 90,
    skills: ['Machine Learning', 'Python', 'Problem Solving', 'Teamwork'],
    provider: 'Digital Kazakhstan',
    location: 'Астана',
    date: '2023-12-15',
    tags: ['Hackathon', 'AI', 'Innovation'],
    status: 'trending'
  },
  {
    id: 'event-2',
    title: 'Мастер-класс по Data Science',
    description: 'Практический воркшоп по анализу данных и машинному обучению',
    type: 'event',
    relevanceScore: 95,
    skills: ['Python', 'Data Analysis', 'Machine Learning'],
    provider: 'Data Science Club',
    location: 'Алматы',
    date: '2023-11-25',
    tags: ['Workshop', 'Data Science', 'Practical'],
    status: 'recommended'
  },
  {
    id: 'event-3',
    title: 'IT-конференция TechTalks',
    description: 'Конференция по современным технологиям и трендам в IT-индустрии',
    type: 'event',
    relevanceScore: 82,
    skills: ['Networking', 'Technology Trends', 'Professional Development'],
    provider: 'IT Association of Kazakhstan',
    location: 'Алматы',
    date: '2023-12-05',
    tags: ['Conference', 'Networking', 'Technology'],
    status: 'popular'
  },
  {
    id: 'event-4',
    title: 'Воркшоп по блокчейн технологиям',
    description: 'Практический семинар по основам блокчейна и написанию смарт-контрактов',
    type: 'event',
    relevanceScore: 70,
    skills: ['Blockchain', 'Smart Contracts', 'Solidity'],
    provider: 'Blockchain Kazakhstan',
    location: 'Онлайн',
    date: '2023-11-30',
    tags: ['Blockchain', 'Workshop', 'Crypto']
  },
  {
    id: 'event-5',
    title: 'Карьерная ярмарка IT-специалистов',
    description: 'Встреча с ведущими работодателями IT-сектора Казахстана',
    type: 'event',
    relevanceScore: 88,
    skills: ['Networking', 'Career Development', 'Job Search'],
    provider: 'KazNU Career Center',
    location: 'Алматы',
    date: '2023-12-10',
    tags: ['Career Fair', 'Networking', 'Job'],
    status: 'new'
  },
];

// Все рекомендации
const ALL_RECOMMENDATIONS = [...COURSES, ...JOBS, ...EVENTS];

// Имитация весовых коэффициентов для алгоритма
const WEIGHTS = {
  skillMatch: 0.5,
  popularity: 0.2,
  recentActivity: 0.15,
  collaborative: 0.15
};

/**
 * Имитация работы ML-модели для рекомендаций
 * В реальной системе здесь был бы TensorFlow.js или вызов к ML-сервису
 */
export class RecommendationEngine {
  /**
   * Получение персонализированных рекомендаций для пользователя
   */
  static getRecommendations(
    user: User,
    type?: 'course' | 'job' | 'event' | 'all',
    limit: number = 10
  ): Recommendation[] {
    // В реальной системе здесь был бы сложный алгоритм на основе машинного обучения
    // Сейчас мы просто имитируем его работу
    
    // Выбираем рекомендации в зависимости от типа
    let recommendations = ALL_RECOMMENDATIONS;
    if (type && type !== 'all') {
      recommendations = ALL_RECOMMENDATIONS.filter(rec => rec.type === type);
    }
    
    // Получаем навыки пользователя
    const userSkills = user.student?.skills || [];
    
    // Рассчитываем релевантность для каждой рекомендации
    const scoredRecommendations = recommendations.map(recommendation => {
      // Считаем соответствие навыкам
      const skillMatchScore = this.calculateSkillMatch(recommendation.skills, userSkills);
      
      // Учитываем популярность
      const popularityScore = recommendation.popularity ? recommendation.popularity / 100 : 0.5;
      
      // Имитация недавней активности (случайное значение)
      const recentActivityScore = Math.random();
      
      // Имитация коллаборативной фильтрации (случайное значение)
      const collaborativeScore = Math.random();
      
      // Итоговый взвешенный скор
      const finalScore = 
        skillMatchScore * WEIGHTS.skillMatch +
        popularityScore * WEIGHTS.popularity +
        recentActivityScore * WEIGHTS.recentActivity +
        collaborativeScore * WEIGHTS.collaborative;
      
      // Обновляем скор и возвращаем рекомендацию
      return {
        ...recommendation,
        relevanceScore: Math.round(finalScore * 100)
      };
    });
    
    // Сортируем по релевантности и ограничиваем количество
    return scoredRecommendations
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit);
  }
  
  /**
   * Расчет соответствия навыков
   */
  private static calculateSkillMatch(recommendationSkills: string[], userSkills: string[]): number {
    if (!userSkills.length || !recommendationSkills.length) return 0.5;
    
    // Нормализация навыков
    const normalizedUserSkills = userSkills.map(s => s.toLowerCase());
    const normalizedRecSkills = recommendationSkills.map(s => s.toLowerCase());
    
    // Подсчет совпадений
    let matchCount = 0;
    for (const skill of normalizedRecSkills) {
      if (normalizedUserSkills.some(userSkill => userSkill.includes(skill) || skill.includes(userSkill))) {
        matchCount++;
      }
    }
    
    // Возвращаем процент совпадений
    return matchCount / normalizedRecSkills.length;
  }
  
  /**
   * Получение рекомендаций по интересам
   */
  static getInterestBasedRecommendations(
    interests: string[],
    type?: 'course' | 'job' | 'event' | 'all',
    limit: number = 10
  ): Recommendation[] {
    // Выбираем рекомендации в зависимости от типа
    let recommendations = ALL_RECOMMENDATIONS;
    if (type && type !== 'all') {
      recommendations = ALL_RECOMMENDATIONS.filter(rec => rec.type === type);
    }
    
    // Фильтруем по интересам (тегам)
    const filteredRecommendations = recommendations.filter(rec => {
      const recTags = rec.tags || [];
      // Проверяем, есть ли пересечение между интересами и тегами
      return interests.some(interest => 
        recTags.some(tag => tag.toLowerCase().includes(interest.toLowerCase()) || 
                          interest.toLowerCase().includes(tag.toLowerCase()))
      );
    });
    
    // Сортируем по релевантности и ограничиваем количество
    return filteredRecommendations
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit);
  }
  
  /**
   * Функция для мока автозаполнения навыков
   */
  static autoCompleteSkills(query: string): string[] {
    // Список всех возможных навыков для автозаполнения
    const allSkills = [
      'Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'C++', 'Go', 'Rust', 'Ruby', 'PHP',
      'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra', 
      'React', 'Angular', 'Vue.js', 'Next.js', 'Svelte', 'React Native',
      'Node.js', 'Express', 'Django', 'Flask', 'Spring Boot', 'Laravel', 'Ruby on Rails',
      'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'Ansible',
      'Git', 'CI/CD', 'Jenkins', 'GitHub Actions', 'GitLab CI',
      'Data Analysis', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP',
      'TensorFlow', 'PyTorch', 'scikit-learn', 'pandas', 'numpy',
      'Agile', 'Scrum', 'Kanban', 'Jira', 'Product Management', 'Project Management',
      'UI/UX Design', 'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'
    ];
    
    // Возвращаем отфильтрованный список
    return allSkills.filter(skill => 
      skill.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 10);
  }
} 