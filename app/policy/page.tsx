import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | NAVYK",
  description: "Политика конфиденциальности платформы NAVYK для студентов, работодателей и университетов",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Политика конфиденциальности</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Введение</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Добро пожаловать на платформу NAVYK. Мы ценим ваше доверие и стремимся защитить вашу личную информацию. 
          Настоящая Политика конфиденциальности объясняет, как мы собираем, используем и защищаем ваши данные.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Используя нашу платформу, вы соглашаетесь с практиками, описанными в этой политике.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Какую информацию мы собираем</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Личная информация</h3>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Имя, фамилия, электронная почта и контактная информация</li>
            <li>Информация об образовании и профессиональном опыте</li>
            <li>Учетные данные университета или компании</li>
            <li>Фотографии профиля и личные биографии</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Данные об использовании</h3>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Информация о курсах, мероприятиях и вакансиях, которыми вы интересуетесь</li>
            <li>Данные о взаимодействии с платформой</li>
            <li>Информация о устройстве и браузере</li>
            <li>IP-адреса и данные о местоположении</li>
          </ul>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Как мы используем информацию</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Предоставление и улучшение наших услуг</li>
          <li>Настройка рекомендаций по курсам, вакансиям и мероприятиям</li>
          <li>Связь с вами по вопросам обслуживания, обновлений и маркетинговых сообщений</li>
          <li>Аналитика использования для улучшения платформы</li>
          <li>Обеспечение безопасности и предотвращение мошенничества</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Передача информации третьим лицам</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Мы не продаем вашу личную информацию третьим лицам. Однако, мы можем передавать информацию в следующих случаях:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Университетам и работодателям, с которыми вы взаимодействуете через платформу</li>
          <li>Поставщикам услуг, которые помогают нам в обслуживании платформы</li>
          <li>При необходимости соблюдения законодательства</li>
          <li>С вашего явного согласия</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Защита данных</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Мы применяем комплексные меры безопасности для защиты ваших данных, включая:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Шифрование данных при передаче и хранении</li>
          <li>Регулярные аудиты безопасности</li>
          <li>Строгие протоколы доступа к данным</li>
          <li>Обучение сотрудников по вопросам безопасности данных</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Ваши права</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          В зависимости от вашего региона, вы можете иметь следующие права:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Доступ к вашим персональным данным</li>
          <li>Исправление неточной информации</li>
          <li>Удаление ваших данных</li>
          <li>Ограничение обработки данных</li>
          <li>Возражение против обработки данных</li>
          <li>Перенос данных к другому поставщику услуг</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Для реализации этих прав, пожалуйста, свяжитесь с нами по адресу: privacy@navyk.ru
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">7. Изменения в политике конфиденциальности</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Мы можем обновлять эту политику конфиденциальности время от времени. Последнее обновление было сделано 
          {" "}{new Date().toLocaleDateString("ru-RU")}.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          При существенных изменениях мы уведомим вас по электронной почте или через уведомление на платформе.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Контактная информация</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Если у вас есть вопросы о нашей политике конфиденциальности, пожалуйста, свяжитесь с нами:
        </p>
        <div className="text-gray-700 dark:text-gray-300">
          <p>Email: privacy@navyk.ru</p>
          <p>Телефон: +7 (XXX) XXX-XX-XX</p>
          <p>Адрес: г. Москва, ул. Технологическая, д. 1</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
} 