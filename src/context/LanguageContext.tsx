import React, { createContext, useContext, useState } from "react"

export type Language = "ru" | "kk"

export const translations = {
  ru: {
    // Header
    navServices: "Услуги",
    navHow: "Как работаем",
    navPortfolio: "Результаты",
    navContacts: "Контакты",
    writeWhatsapp: "Написать в WhatsApp",

    // Hero
    heroBadge: "Независимая автоэкспертиза",
    heroTitle1: "Профессиональный подбор и ",
    heroTitleAccent: "независимая",
    heroTitle2: " экспертиза авто",
    heroSubtitle: "Защитим от покупки восстановленного хлама, скрученного пробега и юридических проблем. Сэкономим ваше время и деньги.",
    heroStat1Value: "500+",
    heroStat1Label: "Подборов выполнено",
    heroStat2Value: "97%",
    heroStat2Label: "Довольных клиентов",
    heroStat3Value: "от 100 000 ₸",
    heroStat3Label: "Средняя экономия",
    heroCtaConsult: "Получить консультацию",
    heroCtaCalc: "Рассчитать стоимость",
    heroScroll: "Scroll",

    // Services
    servicesTag: "Наши услуги",
    servicesHeading: "Тарифы и цены",
    servicesSubheading: "Выберите подходящий формат. Каждая услуга включает честный отчет о реальном состоянии автомобиля.",
    servicesBadgeChoice: "Выбор клиентов",
    
    serviceSingleTitle: "Разовый осмотр",
    serviceSinglePrice: "20 000 – 30 000 ₸",
    serviceSingleDesc: "Для тех, кто уже нашел конкретное объявление и хочет проверить машину перед покупкой.",
    serviceSingleF1: "Выезд к авто",
    serviceSingleF2: "Проверка кузова толщиномером",
    serviceSingleF3: "Компьютерная диагностика всех блоков",
    serviceSingleF4: "Проверка документов",
    serviceSingleF5: "Подробный фото/видео отчет",
    serviceSingleCta: "Заказать осмотр",

    serviceDayTitle: "Эксперт на день",
    serviceDayPrice: "80 000 ₸",
    serviceDayDesc: "Для тех, кто выбрал несколько вариантов и хочет успеть проверить их все за 1 день.",
    serviceDayF1: "Неограниченное число проверок за день",
    serviceDayF2: "Передвижение на авто эксперта",
    serviceDayF3: "Аргументированный торг с продавцами",
    serviceDayF4: "Помощь в выборе лучшего варианта",
    serviceDayCta: "Нанять эксперта",

    serviceFullTitle: "Подбор под ключ",
    serviceFullPrice: "200 000 ₸",
    serviceFullDesc: "Полное делегирование поиска. Вы просто получаете идеальную машину под ваши критерии.",
    serviceFullF1: "Поиск по заданным параметрам и бюджету",
    serviceFullF2: "Неограниченное число выездов",
    serviceFullF3: "Торг в пользу клиента",
    serviceFullF4: "Юридическое сопровождение сделки",
    serviceFullCta: "Заказать подбор",

    // WhatWeCheck
    checkTag: "Что входит в проверку",
    checkHeading: "Что именно мы проверяем",
    checkSubheading: "Полная проверка по 4 ключевым направлениям. Скрыть от нас ничего не получится.",
    check1Title: "Кузов и силовая структура",
    check1Desc: "Проверка толщиномером, поиск шпаклевки, проверка геометрии, следов съема деталей и подушек безопасности.",
    check2Title: "Компьютерная диагностика",
    check2Desc: "Сканирование всех электронных блоков на скрытые ошибки и поиск реального пробега в дублирующих блоках.",
    check3Title: "Техническая часть",
    check3Desc: "Оценка состояния двигателя, КПП, подвески, тормозной системы, поиск течей технических жидкостей.",
    check4Title: "Юридическая чистота",
    check4Desc: "Проверка базы залогов, арестов, штрафов, совпадения VIN-кодов и документов.",

    // MarketingTrigger
    marketingHeading1: "В 90% случаев наши услуги ",
    marketingHeadingAccent: "обходятся вам бесплатно",
    marketingSub1: "Находя скрытые дефекты, мы аргументированно сбиваем цену у продавца. В среднем наш торг экономит клиенту от ",
    marketingSubHighlight: "100 000 до 500 000 ₸",
    marketingSub2: ".",
    marketingStat1Label: "Случаев со скидкой на авто",
    marketingStat2Label: "Средняя экономия клиента",
    marketingStat3Label: "Опыт работы на рынке Казахстана",
    marketingStat3Value: "7 лет",
    marketingCta: "Сэкономить на покупке авто",

    // Portfolio
    portfolioTag: "Наши результаты",
    portfolioHeading: "Выполненные кейсы",
    portfolioSubheading: "Реальные истории подборов с цифрами сэкономленных денег.",
    portfolioBadgeSaved: "Сторговали",
    portfolioTaskLabel: "Задача:",
    portfolioResultLabel: "Результат:",

    portfolioCase1Task: "Найти авто до 13 500 000 ₸ с пробегом до 60 тыс. км.",
    portfolioCase1Result: "Нашли за 4 дня.",

    portfolioCase2Task: "Проверить конкретный автомобиль перед сделкой.",
    portfolioCase2Result: "Выявлены следы кузовного ремонта.",

    portfolioCase3Task: "Подбор премиального кроссовера до 22 000 000 ₸.",
    portfolioCase3Result: "Нашли идеальный вариант за 5 дней.",

    // Footer
    footerDesc: "Профессиональный подбор и независимая экспертиза автомобилей. Работаем честно — платите только за результат.",
    footerContacts: "Контакты",
    footerLocation: "Алматы, Казахстан",
    footerSchedule: "Пн–Вс: 09:00 – 21:00",
    footerCtaHeader: "Связаться сейчас",
    footerCtaDesc: "Бесплатная консультация по подбору или проверке авто. Ответим в течение 15 минут.",
    footerOpenInstagram: "Перейти в Instagram",
    footerCopyright: "© 2024 SAQ Auto Podbor. Все права защищены.",
  },
  kk: {
    // Header
    navServices: "Қызметтер",
    navHow: "Жұмыс барысы",
    navPortfolio: "Нәтижелер",
    navContacts: "Байланыс",
    writeWhatsapp: "WhatsApp-қа жазу",

    // Hero
    heroBadge: "Тәуелсіз автосараптама",
    heroTitle1: "Көлікті кәсіби таңдау және ",
    heroTitleAccent: "тәуелсіз",
    heroTitle2: " сараптамасы",
    heroSubtitle: "Қалпына келтірілген тозығы жеткен көліктен, азайтылған жүрістен және заңды мәселелерден қорғаймыз. Уақытыңыз бен ақшаңызды үнемдейміз.",
    heroStat1Value: "500+",
    heroStat1Label: "Таңдалған көліктер",
    heroStat2Value: "97%",
    heroStat2Label: "Риза клиенттер",
    heroStat3Value: "100 000 ₸ бастап",
    heroStat3Label: "Орташа үнемдеу",
    heroCtaConsult: "Кеңес алу",
    heroCtaCalc: "Бағасын есептеу",
    heroScroll: "Scroll",

    // Services
    servicesTag: "Біздің қызметтер",
    servicesHeading: "Тарифтер мен бағалар",
    servicesSubheading: "Ыңғайлы форматты таңдаңыз. Әрбір қызмет көліктің шынайы жағдайы туралы адал есепті қамтиды.",
    servicesBadgeChoice: "Клиенттер таңдауы",
    
    serviceSingleTitle: "Бір реттік тексеру",
    serviceSinglePrice: "20 000 – 30 000 ₸",
    serviceSingleDesc: "Нақты хабарландыруды тауып, сатып алмас бұрын көлікті тексергісі келетіндер үшін.",
    serviceSingleF1: "Көлікке барып тексеру",
    serviceSingleF2: "Шанақты (кузов) қалыңдық өлшегішпен тексеру",
    serviceSingleF3: "Барлық блоктарды компьютерлік диагностикалау",
    serviceSingleF4: "Құжаттарды тексеру",
    serviceSingleF5: "Толық фото/бейне есеп",
    serviceSingleCta: "Тексеруге тапсырыс беру",

    serviceDayTitle: "Бір күндік сарапшы",
    serviceDayPrice: "80 000 ₸",
    serviceDayDesc: "Бірнеше нұсқаны таңдап, 1 күнде бәрін тексеріп үлгергісі келетіндер үшін.",
    serviceDayF1: "Күн бойы шектеусіз тексеру саны",
    serviceDayF2: "Сарапшының көлігімен жүріп-тұру",
    serviceDayF3: "Сатушылармен дәлелді саудаласу",
    serviceDayF4: "Ең жақсы нұсқаны таңдауға көмектесу",
    serviceDayCta: "Сарапшыны жалдау",

    serviceFullTitle: "Толық кілтпен таңдау",
    serviceFullPrice: "200 000 ₸",
    serviceFullDesc: "Іздеуді толығымен бізге тапсыру. Сіз жай ғына талаптарыңызға сай мінсіз көлікті аласыз.",
    serviceFullF1: "Берілген параметрлер мен бюджет бойынша іздеу",
    serviceFullF2: "Шектеусіз сапарлар саны",
    serviceFullF3: "Клиент пайдасына саудаласу",
    serviceFullF4: "Келісімді заңды түрде сүйемелдеу",
    serviceFullCta: "Таңдауға тапсырыс беру",

    // WhatWeCheck
    checkTag: "Тексеруге не кіреді",
    checkHeading: "Біз неден тексереміз",
    checkSubheading: "4 негізгі бағыт бойынша толық тексеру. Бізден ештеңе жасыра алмайсыз.",
    check1Title: "Шанақ және күштік құрылым",
    check1Desc: "Қалыңдық өлшегішпен тексеру, шпаклевкіні іздеу, геометрияны, бөлшектер мен қауіпсіздік жастықтарының шешілу іздерін тексеру.",
    check2Title: "Компьютерлік диагностика",
    check2Desc: "Барлық электронды блоктарды жасырын қателіктерге сканерлеу және қосымша блоктардан шынайы жүрісті іздеу.",
    check3Title: "Техникалық бөлім",
    check3Desc: "Қозғалтқыштың, беріліс қорабының, аспаның, тежегіш жүйесінің жағдайын бағалау, техникалық сұйықтықтардың ағуын іздеу.",
    check4Title: "Заңды тазалығы",
    check4Desc: "Кепілдер, тыйымдар, айыппұлдар базасын, VIN-кодтар мен құжаттардың сәйкестігін тексеру.",

    // MarketingTrigger
    marketingHeading1: "90% жағдайда біздің қызметтер ",
    marketingHeadingAccent: "сіз үшін тегінге түседі",
    marketingSub1: "Жасырын кемшіліктерді таба отырып, біз сатушының бағасын дәлелді түрде түсіреміз. Орташа алғанда біздің саудаласу клиентке ",
    marketingSubHighlight: "100 000 – 500 000 ₸",
    marketingSub2: " үнемдейді.",
    marketingStat1Label: "Көлікке жеңілдік жасалған жағдайлар",
    marketingStat2Label: "Клиенттің орташа үнемдеуі",
    marketingStat3Label: "Қазақстан нарығындағы жұмыс тәжірибесі",
    marketingStat3Value: "7 жыл",
    marketingCta: "Көлік сатып алуда үнемдеу",

    // Portfolio
    portfolioTag: "Біздің нәтижелер",
    portfolioHeading: "Орындалған кейстер",
    portfolioSubheading: "Үнемделген ақша көрсеткіштері бар шынайы таңдау тарихы.",
    portfolioBadgeSaved: "Саудаластық",
    portfolioTaskLabel: "Тапсырма:",
    portfolioResultLabel: "Нәтижесі:",

    portfolioCase1Task: "60 мың км-ге дейін жүрісі бар 13 500 000 ₸ дейін көлік табу.",
    portfolioCase1Result: "4 күнде таптық.",

    portfolioCase2Task: "Мәміле алдында нақты көлікті тексеру.",
    portfolioCase2Result: "Шанақ жөндеу іздері анықталды.",

    portfolioCase3Task: "22 000 000 ₸ дейін премиум кроссовер таңдау.",
    portfolioCase3Result: "5 күнде мінсіз нұсқа таптық.",

    // Footer
    footerDesc: "Көлікті кәсіби таңдау және тәуелсіз автосараптама. Адал жұмыс істейміз — тек нәтиже үшін төлейсіз.",
    footerContacts: "Байланыс",
    footerLocation: "Алматы, Қазақстан",
    footerSchedule: "Дүйсенбі–Жексенбі: 09:00 – 21:00",
    footerCtaHeader: "Қазір хабарласу",
    footerCtaDesc: "Көлікті таңдау немесе тексеру бойынша тегін кеңес. 15 минут ішінде жауап береміз.",
    footerOpenInstagram: "Instagram-ға өту",
    footerCopyright: "© 2024 SAQ Auto Podbor. Барлық құқықтар қорғалған.",
  },
} as const

export type TranslationKey = keyof typeof translations.ru

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("saq_lang") as Language
    return saved === "kk" ? "kk" : "ru"
  })

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem("saq_lang", newLang)
  }

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || translations.ru[key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
