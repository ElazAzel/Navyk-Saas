import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы | NAVYK",
  description: "Ответы на часто задаваемые вопросы о платформе NAVYK для развития навыков и карьеры",
};

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Часто задаваемые вопросы</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          Здесь вы найдете ответы на наиболее часто задаваемые вопросы о платформе NAVYK. 
          Если вы не нашли ответ на свой вопрос, пожалуйста, 
          <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline mx-1">
            свяжитесь с нами
          </Link>
          для получения дополнительной информации.
        </p>
      </div>

      <div className="space-y-4">
        <details className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Что такое NAVYK?</h3>
            <span className="text-indigo-600 dark:text-indigo-400 transform group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="p-6 pt-0 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              NAVYK — это инновационная образовательная и карьерная платформа, которая соединяет студентов, работодателей и университеты. 
              Наша цель — помочь студентам развивать навыки, необходимые для успешной карьеры, предоставить работодателям доступ 
              к талантливым кандидатам, а университетам — аналитику об активности своих студентов.
            </p>
            <p>
              Платформа предлагает рекомендации по курсам и мероприятиям, отслеживание прогресса обучения, 
              доступ к вакансиям и построение индивидуальной карьерной дорожной карты.
            </p>
          </div>
        </details>

        <details className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Как зарегистрироваться на платформе?</h3>
            <span className="text-indigo-600 dark:text-indigo-400 transform group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="p-6 pt-0 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              Важно отметить, что NAVYK доступен только для студентов университетов, ставших нашими официальными партнерами (заключивших договор и оплативших корпоративную подписку).
            </p>
            <p className="mb-4">
              Если ваш университет уже является партнером NAVYK, процесс регистрации выглядит так:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Получите приглашение или код доступа от представителя вашего университета</li>
              <li>Перейдите на страницу регистрации через кнопку &quot;Регистрация&quot; в правом верхнем углу главной страницы</li>
              <li>Выберите тип учетной записи &quot;Студент&quot; и укажите ваш университет из списка партнеров</li>
              <li>Введите ваш университетский email и код доступа (если требуется)</li>
              <li>Заполните необходимую информацию в форме регистрации</li>
              <li>Подтвердите email по ссылке, которую мы отправим на указанный адрес</li>
              <li>Завершите настройку своего профиля, добавив информацию о специальности, курсе обучения и образовательных интересах</li>
            </ol>
            <p className="mb-4">
              После завершения регистрации вы получите доступ ко всем функциям платформы, доступным для студентов вашего университета.
            </p>
            <p className="mb-4">
              <span className="font-medium">Для работодателей и университетов</span>, желающих стать партнерами NAVYK, процесс регистрации отличается. Пожалуйста, свяжитесь с нашим отделом продаж для получения информации о партнерских программах и корпоративных подписках.
            </p>
          </div>
        </details>

        <details className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Какие преимущества NAVYK для студентов?</h3>
            <span className="text-indigo-600 dark:text-indigo-400 transform group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="p-6 pt-0 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              Студенты получают множество преимуществ от использования платформы NAVYK:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Персонализированные рекомендации курсов и мероприятий на основе ваших интересов и целей</li>
              <li>Доступ к релевантным вакансиям от ведущих работодателей</li>
              <li>Построение индивидуальной карьерной дорожной карты</li>
              <li>Отслеживание прогресса в развитии навыков</li>
              <li>Система достижений и геймификация процесса обучения</li>
              <li>Возможность создать портфолио для демонстрации работодателям</li>
              <li>Аналитика вашей активности и рекомендации по улучшению карьерных перспектив</li>
            </ul>
            <p>
              Платформа NAVYK помогает студентам планировать и развивать свою карьеру с самого начала обучения.
            </p>
          </div>
        </details>

        <details className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Как работодатели могут использовать NAVYK?</h3>
            <span className="text-indigo-600 dark:text-indigo-400 transform group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="p-6 pt-0 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              Работодатели получают доступ к набору инструментов для привлечения талантливых кандидатов:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Публикация вакансий с четкими требованиями к навыкам</li>
              <li>Доступ к пулу кандидатов с верифицированными навыками</li>
              <li>Аналитика популярности вакансий и взаимодействия с кандидатами</li>
              <li>Организация корпоративных мероприятий и курсов для студентов</li>
              <li>Брендинг работодателя среди студенческой аудитории</li>
              <li>Интеграция с корпоративными системами HR</li>
            </ul>
            <p>
              NAVYK помогает работодателям находить не просто кандидатов с подходящим резюме, 
              а талантливых студентов с подтвержденными навыками и мотивацией к развитию.
            </p>
          </div>
        </details>

        <details className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Что получают университеты от сотрудничества с NAVYK?</h3>
            <span className="text-indigo-600 dark:text-indigo-400 transform group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="p-6 pt-0 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              Университеты могут использовать NAVYK для повышения качества образовательного процесса:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Детальная аналитика активности студентов и их карьерных предпочтений</li>
              <li>Возможность публиковать и продвигать внутренние курсы и мероприятия</li>
              <li>Отслеживание трудоустройства выпускников</li>
              <li>Прямая связь с работодателями для создания совместных образовательных программ</li>
              <li>Инструменты для модернизации учебных планов на основе актуальных требований рынка</li>
              <li>Платформа для межвузовского взаимодействия и обмена опытом</li>
            </ul>
            <p>
              Интеграция с NAVYK позволяет университетам адаптировать образовательные программы под реальные потребности 
              рынка труда и повышать конкурентоспособность своих выпускников.
            </p>
          </div>
        </details>

        <details className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Как формируются рекомендации курсов и вакансий?</h3>
            <span className="text-indigo-600 dark:text-indigo-400 transform group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="p-6 pt-0 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              Система рекомендаций NAVYK использует сложные алгоритмы машинного обучения, которые анализируют несколько факторов:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Ваши указанные интересы и карьерные цели</li>
              <li>История вашей активности на платформе</li>
              <li>Ваш текущий набор навыков и уровень их развития</li>
              <li>Тренды рынка труда и популярные направления</li>
              <li>Отзывы и рейтинги других пользователей</li>
              <li>Требования работодателей к конкретным позициям</li>
            </ul>
            <p>
              Со временем система становится &quot;умнее&quot; и предлагает все более точные рекомендации, 
              основанные на вашем прогрессе и изменении предпочтений.
            </p>
          </div>
        </details>

        <details className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Является ли использование NAVYK бесплатным?</h3>
            <span className="text-indigo-600 dark:text-indigo-400 transform group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="p-6 pt-0 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              NAVYK предлагает несколько моделей использования:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><span className="font-medium">Для студентов:</span> доступ к платформе предоставляется бесплатно, но только в том случае, если ваш университет заключил договор партнерства с NAVYK и оплатил корпоративную подписку. Все функции платформы доступны студентам университетов-партнеров без дополнительной оплаты.</li>
              <li><span className="font-medium">Для работодателей:</span> доступны тарифные планы, зависящие от размера компании и объема использования платформы. Базовая публикация вакансий включена в минимальный тариф.</li>
              <li><span className="font-medium">Для университетов:</span> предлагаются корпоративные подписки с интеграцией в существующие информационные системы и доступом к расширенной аналитике. Стоимость зависит от количества студентов, которым будет предоставлен доступ, и набора выбранных функций.</li>
            </ul>
            <p>
              Подробную информацию о ценовой политике можно получить в разделе &quot;Тарифы&quot; или связавшись с нашим отделом продаж.
            </p>
          </div>
        </details>

        <details className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Как обеспечивается безопасность данных на платформе?</h3>
            <span className="text-indigo-600 dark:text-indigo-400 transform group-open:rotate-180 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="p-6 pt-0 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              Безопасность данных — наш приоритет. Мы применяем комплекс мер для защиты информации:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Шифрование данных при передаче и хранении</li>
              <li>Многофакторная аутентификация для защиты учетных записей</li>
              <li>Регулярные аудиты безопасности и тестирование на проникновение</li>
              <li>Строгий контроль доступа к данным на уровне ролей и разрешений</li>
              <li>Соответствие международным стандартам безопасности данных</li>
              <li>Регулярное обновление систем безопасности</li>
            </ul>
            <p className="mb-4">
              Мы обрабатываем данные в соответствии с нашей 
              <Link href="/policy" className="text-indigo-600 dark:text-indigo-400 hover:underline mx-1">
                Политикой конфиденциальности
              </Link>
              и применимым законодательством о защите данных.
            </p>
            <p>
              При возникновении вопросов о безопасности ваших данных, пожалуйста, свяжитесь с нашей службой поддержки.
            </p>
          </div>
        </details>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Остались вопросы?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Если вы не нашли ответ на свой вопрос, пожалуйста, свяжитесь с нами. 
          Мы будем рады помочь!
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Связаться с нами
        </Link>
      </div>

      <div className="text-center mt-8">
        <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
} 