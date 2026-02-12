(function () {
  var STORAGE_KEY = 'birga-lang';

  var translations = {
    en: {
      nav: { about: 'About', integrations: 'Integrations', partners: 'Partners', faq: 'FAQ', contacts: 'Contacts' },
      cta: { getStarted: 'Try for free' },
      hero: {
        titleLine1: 'One gateway.',
        titleLine2: 'Every POS.',
        lead: 'Birga is the single integration gateway that connects your business to multiple point-of-sale systems. One API, one dashboard, no vendor lock-in.',
        requestDemo: 'Request a demo',
        learnMore: 'Learn more',
        statPartners: 'Partners',
        statPos: 'POS systems',
        statReliability: 'Reliability'
      },
      about: {
        title: 'About us',
        whatWeDo: 'What we do',
        whatWeDoDesc: 'Birga provides a unified integration layer so your applications can talk to R-Keeper, Poster, and other POS systems through a single, consistent interface. We handle protocols, retries, and mapping so you can focus on your product.',
        whyMatters: 'Why it matters',
        whyMattersDesc: 'Multiple POS integrations mean duplicated logic, different APIs, and maintenance overhead. Birga centralizes connectivity, reduces integration time, and makes it easy to add new POS providers as you grow.',
        builtForScale: 'Built for scale',
        builtForScaleDesc: 'Our gateway is designed for reliability and observability. We support modern auth, retries, and health checks out of the box.'
      },
      integrations: {
        title: 'Integrations',
        lead: 'We integrate with leading point-of-sale and delivery platforms. Connect once and reach many.',
        rkeeperDesc: 'Orders, menu, and reference data',
        posterDesc: 'Full POS and order lifecycle',
        iikoDesc: 'Restaurant and delivery management',
        moreComing: 'More coming',
        moreComingDesc: 'New POS adapters on the roadmap'
      },
      partners: {
        title: 'Partners',
        lead: 'Trusted by leading brands that run their operations on Birga.',
        costaCoffee: 'Costa Coffee',
        hoopla: 'Hoopla',
        inntouch: 'Inntouch'
      },
      faq: {
        title: 'FAQ',
        q1: 'What is Birga?',
        a1: 'Birga is a single integration gateway (SaaS) that lets your systems communicate with multiple POS providers through one API. Instead of integrating with each POS separately, you integrate once with Birga.',
        q2: 'Which POS systems are supported?',
        a2: 'We currently support R-Keeper and Poster, with more adapters in development. Contact us if you need a specific POS or delivery platform.',
        q3: 'Can I use Birga on-premise?',
        a3: 'We offer only cloud (SaaS) option for now. Our gateway is designed to be fully managed and scalable.',
        q4: 'How do I get started?',
        a4: 'Reach out via the contacts section below. We\'ll set up a demo, discuss your use case, and provide access or deployment guidance.'
      },
      contacts: {
        title: 'Contacts',
        lead: 'Get in touch for demos, pricing, or technical questions.',
        email: 'Email',
        support: 'Support',
        documentation: 'Documentation',
        requestDemo: 'Request a demo',
        name: 'Name',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'you@company.com',
        message: 'Message',
        messagePlaceholder: 'Tell us about your project',
        sendMessage: 'Send message',
        docsLink: 'Docs & API'
      },
      footer: {
        tagline: 'Single integration gateway for your business.',
        copy: 'Birga. All rights reserved.'
      },
      meta: {
        title: 'Birga — Single Integration Gateway for Multiple POS Systems',
        description: 'Birga unifies your point-of-sale systems into one integration gateway. Connect multiple POS providers, streamline orders, and scale your operations.'
      },
      aria: { openMenu: 'Open menu', closeMenu: 'Close menu' }
    },
    ru: {
      nav: { about: 'О нас', integrations: 'Интеграции', partners: 'Партнёры', faq: 'Вопросы', contacts: 'Контакты' },
      cta: { getStarted: 'Начать' },
      hero: {
        titleLine1: 'Один шлюз.',
        titleLine2: 'Любая POS.',
        lead: 'Birga — единый шлюз интеграции, который подключает ваш бизнес к нескольким платёжным и кассовым системам. Один API, одна панель, без привязки к вендору.',
        requestDemo: 'Запросить демо',
        learnMore: 'Подробнее',
        statPartners: 'Партнёров',
        statPos: 'POS-систем',
        statReliability: 'Надёжность'
      },
      about: {
        title: 'О нас',
        whatWeDo: 'Что мы делаем',
        whatWeDoDesc: 'Birga предоставляет единый слой интеграции, чтобы ваши приложения могли работать с R-Keeper, Poster и другими POS через один интерфейс. Мы берём на себя протоколы, повторы и маппинг — вы занимаетесь продуктом.',
        whyMatters: 'Зачем это нужно',
        whyMattersDesc: 'Несколько POS-интеграций означают дублирование логики, разные API и лишние затраты на поддержку. Birga централизует подключения, ускоряет интеграцию и упрощает добавление новых систем по мере роста.',
        builtForScale: 'Масштабируемость',
        builtForScaleDesc: 'Наш шлюз рассчитан на надёжность и наблюдаемость. Поддерживаются современная аутентификация, повторы и проверки состояния из коробки.'
      },
      integrations: {
        title: 'Интеграции',
        lead: 'Мы интегрируемся с ведущими кассовыми и доставческими платформами. Подключитесь один раз — работайте со всеми.',
        rkeeperDesc: 'Заказы, меню и справочники',
        posterDesc: 'Полный цикл POS и заказов',
        iikoDesc: 'Управление рестораном и доставкой',
        moreComing: 'Скоро ещё',
        moreComingDesc: 'Новые адаптеры POS в разработке'
      },
      partners: {
        title: 'Партнёры',
        lead: 'Нам доверяют ведущие бренды, которые ведут операции на Birga.',
        costaCoffee: 'Costa Coffee',
        hoopla: 'Hoopla',
        inntouch: 'Inntouch'
      },
      faq: {
        title: 'Частые вопросы',
        q1: 'Что такое Birga?',
        a1: 'Birga — единый шлюз интеграции (SaaS), через который ваши системы работают с несколькими POS по одному API. Вместо отдельных интеграций с каждой кассой вы подключаетесь один раз к Birga.',
        q2: 'Какие POS поддерживаются?',
        a2: 'Сейчас поддерживаются R-Keeper и Poster, в разработке другие адаптеры. Напишите нам, если нужна конкретная POS или платформа доставки.',
        q3: 'Можно ли использовать Birga on-premise?',
        a3: 'Пока доступен только облачный (SaaS) вариант. Шлюз рассчитан на полностью управляемую и масштабируемую работу.',
        q4: 'Как начать?',
        a4: 'Напишите нам в разделе контактов. Мы проведём демо, обсудим задачу и поможем с доступом или внедрением.'
      },
      contacts: {
        title: 'Контакты',
        lead: 'Свяжитесь с нами по демо, ценам или техническим вопросам.',
        email: 'Email',
        support: 'Поддержка',
        documentation: 'Документация',
        requestDemo: 'Запросить демо',
        name: 'Имя',
        namePlaceholder: 'Ваше имя',
        emailPlaceholder: 'email@company.com',
        message: 'Сообщение',
        messagePlaceholder: 'Расскажите о вашем проекте',
        sendMessage: 'Отправить',
        docsLink: 'Документация и API'
      },
      footer: {
        tagline: 'Единый шлюз интеграции для вашего бизнеса.',
        copy: 'Birga. Все права защищены.'
      },
      meta: {
        title: 'Birga — Единый шлюз интеграции для любых POS',
        description: 'Birga объединяет ваши кассовые системы в одном шлюзе. Один API, одна панель, без привязки к вендору.'
      },
      aria: { openMenu: 'Открыть меню', closeMenu: 'Закрыть меню' }
    },
    uz: {
      nav: { about: 'Biz haqimizda', integrations: 'Integratsiyalar', partners: 'Hamkorlar', faq: 'Savollar', contacts: 'Aloqa' },
      cta: { getStarted: "Boshlash" },
      hero: {
        titleLine1: 'Bitta shlyuz.',
        titleLine2: 'Har qanday POS.',
        lead: 'Birga — sizning biznesingizni bir nechta kassa va to\'lov tizimlariga ulaydigan yagona integratsiya shlyuzi. Bitta API, bitta boshqaruv paneli, provayderga bog\'liq emas.',
        requestDemo: 'Demo so\'rash',
        learnMore: 'Batafsil',
        statPartners: 'Hamkor',
        statPos: 'POS tizimlari',
        statReliability: 'Ishonchlilik'
      },
      about: {
        title: 'Biz haqimizda',
        whatWeDo: 'Nima qilamiz',
        whatWeDoDesc: 'Birga ilovangiz R-Keeper, Poster va boshqa POS tizimlari bilan bitta interfeys orqali ishlashi uchun yagona integratsiya qatlamini taqdim etadi. Protokollar, qayta urinishlar va xaritalashni biz o\'zimiz qilamiz — siz mahsulotga e\'tibor qaratasiz.',
        whyMatters: 'Nima uchun kerak',
        whyMattersDesc: 'Bir nechta POS integratsiyalari takroriy mantiq, turli API va qo\'shimcha qo\'llab-quvvatlash xarajatlarini anglatadi. Birga ulanishlarni markazlashtiradi, integratsiyani tezlashtiradi va o\'sish bilan yangi tizimlarni qo\'shishni osonlashtiradi.',
        builtForScale: 'Masshtablanuvchanlik',
        builtForScaleDesc: 'Bizning shlyuzimiz ishonchlilik va kuzatuvchanlik uchun mo\'ljallangan. Zamonaviy autentifikatsiya, qayta urinishlar va holat tekshiruvlari qutidan qo\'llab-quvvatlanadi.'
      },
      integrations: {
        title: 'Integratsiyalar',
        lead: 'Biz etakchi kassa va yetkazib berish platformalari bilan integratsiyalasamiz. Bir marta ulaning — hammasi bilan ishlang.',
        rkeeperDesc: 'Buyurtmalar, menyu va ma\'lumotnomalar',
        posterDesc: 'POS va buyurtmalarning to\'liq tsikli',
        iikoDesc: 'Restoran va yetkazib berishni boshqarish',
        moreComing: 'Tez orada yana',
        moreComingDesc: 'Yangi POS adapterlari ishlab chiqilmoqda'
      },
      partners: {
        title: 'Hamkorlar',
        lead: 'Birga da operatsiyalarini olib boradigan etakchi brendlar bizga ishonadi.',
        costaCoffee: 'Costa Coffee',
        hoopla: 'Hoopla',
        inntouch: 'Inntouch'
      },
      faq: {
        title: 'Tez-tez so\'raladigan savollar',
        q1: 'Birga nima?',
        a1: 'Birga — tizimlaringiz bir nechta POS bilan bitta API orqali muloqot qiladigan yagona integratsiya shlyuzi (SaaS). Har bir kassa bilan alohida integratsiya o\'rniga siz Birga ga bir marta ulanasiz.',
        q2: 'Qaysi POS tizimlari qo\'llab-quvvatlanadi?',
        a2: 'Hozir R-Keeper va Poster qo\'llab-quvvatlanadi, boshqa adapterlar ishlab chiqilmoqda. Ma\'lum bir POS yoki yetkazib berish platformasi kerak bo\'lsa, bizga yozing.',
        q3: 'Birga ni on-premise ishlatish mumkinmi?',
        a3: 'Hozircha faqat bulutli (SaaS) variant mavjud. Shlyuz to\'liq boshqariladigan va masshtablanuvchan ishlash uchun mo\'ljallangan.',
        q4: 'Qanday boshlash mumkin?',
        a4: 'Aloqa bo\'limida bizga yozing. Demo o\'tkazamiz, vazifani muhokama qilamiz va kirish yoki joriy etishda yordam beramiz.'
      },
      contacts: {
        title: 'Aloqa',
        lead: 'Demo, narxlar yoki texnik savollar bo\'yicha biz bilan bog\'laning.',
        email: 'Email',
        support: 'Qo\'llab-quvvatlash',
        documentation: 'Hujjatlar',
        requestDemo: 'Demo so\'rash',
        name: 'Ism',
        namePlaceholder: 'Ismingiz',
        emailPlaceholder: 'email@company.com',
        message: 'Xabar',
        messagePlaceholder: 'Loyihangiz haqida yozing',
        sendMessage: 'Yuborish',
        docsLink: 'Hujjatlar va API'
      },
      footer: {
        tagline: 'Biznesingiz uchun yagona integratsiya shlyuzi.',
        copy: 'Birga. Barcha huquqlar himoyalangan.'
      },
      meta: {
        title: 'Birga — Har qanday POS uchun yagona integratsiya shlyuzi',
        description: 'Birga kassa tizimlaringizni bitta shlyuzda birlashtiradi. Bitta API, bitta panel, provayderga bog\'liq emas.'
      },
      aria: { openMenu: 'Menyuni ochish', closeMenu: 'Menyuni yopish' }
    }
  };

  function getNested(obj, key) {
    var parts = key.split('.');
    for (var i = 0; i < parts.length; i++) {
      if (obj == null) return undefined;
      obj = obj[parts[i]];
    }
    return obj;
  }

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ru' || stored === 'uz') return stored;
    return 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    if (document && document.body) {
      document.body.classList.add('lang-updating');
    }
    applyTranslations(lang);
    updateLangSwitcher(lang);
    updateMeta(lang);
    if (document && document.body) {
      setTimeout(function () {
        document.body.classList.remove('lang-updating');
      }, 200);
    }
  }

  function applyTranslations(lang) {
    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = getNested(t, key);
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var value = getNested(t, key);
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var value = getNested(t, key);
      if (value != null) el.placeholder = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var attr = el.getAttribute('data-i18n-attr');
      var key = el.getAttribute('data-i18n');
      if (!key || !attr) return;
      var value = getNested(t, key);
      if (value != null) el.setAttribute(attr, value);
    });
  }

  function updateMeta(lang) {
    var t = translations[lang];
    if (!t || !t.meta) return;
    document.title = t.meta.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc && t.meta.description) desc.setAttribute('content', t.meta.description);
  }

  function updateLangSwitcher(lang) {
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    var toggle = document.querySelector('.menu-toggle');
    if (toggle && translations[lang] && translations[lang].aria) {
      toggle.setAttribute('aria-label', translations[lang].aria.openMenu);
    }
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang-switcher .lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (lang && translations[lang]) setLang(lang);
      });
    });
  }

  window.birgaI18n = {
    setLang: setLang,
    getLang: getLang,
    translations: translations
  };

  function init() {
    var lang = getLang();
    document.documentElement.lang = lang;
    applyTranslations(lang);
    updateLangSwitcher(lang);
    updateMeta(lang);
    initLangSwitcher();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
