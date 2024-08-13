document.addEventListener('DOMContentLoaded', (event) => {
    const languageOptions = document.querySelectorAll('.lang-option');

    // Function to change the language
    function changeLanguage(language) {
        if (language === 'en') {
            translateToEnglish();
        } else if (language === 'ru') {
            translateToRussian();
        }
    }

    // Translate content to English
    function translateToEnglish() {
        // Navbar
        document.querySelector('.navbar-brand img').alt = 'ImagineAnalytics';
        document.querySelectorAll('.nav-link')[0].textContent = 'Home';
        document.querySelectorAll('.nav-link')[1].textContent = 'About';
        document.querySelectorAll('.nav-link')[2].textContent = 'Services';
        // document.querySelectorAll('.nav-link')[3].textContent = 'Portfolio';
        document.querySelectorAll('.nav-link')[3].textContent = 'Contact';
        document.querySelectorAll('.dropdown-item.lang-option')[0].textContent = 'Russian';
        document.querySelectorAll('.dropdown-item.lang-option')[1].textContent = 'English';

        // Hero
        document.querySelector('#hero2 h1').textContent = 'Artificial Intelligence for Your Business';
        document.querySelector('#hero2 p').textContent = 'Data analytics is a powerful tool for businesses and individuals to derive insights, make informed decisions, and drive success. It involves collecting, processing, and analyzing data to uncover patterns, trends, and correlations that can inform strategic actions. By harnessing data analytics, organizations can optimize operations, improve efficiency, and stay ahead of the competition in a data-driven world.';

        // About
        document.querySelector('#about .section-title h1').textContent = 'About ImagineAnalytics';
        document.querySelector('#about .section-title p').textContent = 'ImagineAnalytics is a growing international company of people and institutions working in the field of data analytics and artificial intelligence. We believe that data analytics has the potential to drive positive change and create a better world by enabling organizations and decision-makers to make informed decisions based on data-driven insights. By harnessing the power of data, we can address complex global challenges such as climate change, poverty, healthcare disparities, and inequality. Through data analytics, we can uncover trends, patterns, and correlations that can lead to more effective solutions and improve the well-being of individuals and communities around the world.';
        document.querySelectorAll('#about .iconbox + div h5')[0].textContent = 'Predictive Analytics';
        document.querySelectorAll('#about .iconbox + div p')[0].textContent = 'Forecast future trends, behaviors, and outcomes with precision using advanced statistical algorithms and machine learning techniques.';
        document.querySelectorAll('#about .iconbox + div h5')[1].textContent = 'Descriptive Analytics';
        document.querySelectorAll('#about .iconbox + div p')[1].textContent = 'Uncover meaningful insights from historical data to understand past performance and trends, enabling informed decision-making.';
        document.querySelectorAll('#about .iconbox + div h5')[2].textContent = 'Prescriptive Analytics';
        document.querySelectorAll('#about .iconbox + div p')[2].textContent = 'Receive actionable recommendations and strategic insights based on advanced analytics to guide effective decision-making and drive operational efficiency.';
        document.querySelectorAll('#about .iconbox + div h5')[3].textContent = 'Data Visualization and Reporting';
        document.querySelectorAll('#about .iconbox + div p')[3].textContent = 'Transform complex data into visually engaging dashboards and reports that facilitate data-driven decision-making and enhance communication across your organization.';
        document.querySelectorAll('#about .iconbox + div h5')[4].textContent = 'Machine Learning Deployment';
        document.querySelectorAll('#about .iconbox + div p')[4].textContent = 'Implement cutting-edge machine learning models to automate processes, improve accuracy, and unlock the full potential of your data resources.';
        document.querySelectorAll('#about .iconbox + div h5')[5].textContent = 'Big Data Analytics Solutions';
        document.querySelectorAll('#about .iconbox + div p')[5].textContent = 'Extract meaningful insights from large and diverse datasets to drive informed decision-making, discover hidden patterns, and fuel business growth.';
        document.querySelectorAll('#about .iconbox + div h5')[6].textContent = 'Business Intelligence Tools';
        document.querySelectorAll('#about .iconbox + div p')[6].textContent = 'Empower your team with intuitive reporting tools and self-service analytics capabilities to access real-time insights and drive strategic initiatives with confidence.';
        document.querySelectorAll('#about .iconbox + div h5')[7].textContent = 'Data Mining Services';
        document.querySelectorAll('#about .iconbox + div p')[7].textContent = 'Uncover actionable intelligence and extract valuable business insights from raw data through sophisticated data mining techniques and methodologies.';
        document.querySelectorAll('#about .iconbox + div h5')[8].textContent = 'Text Analytics Solutions';
        document.querySelectorAll('#about .iconbox + div p')[8].textContent = 'Utilize advanced text analytics to extract key information from unstructured text data, gain deeper customer insights.';

        // Contact
        document.querySelector('#contact .section-title h1').textContent = 'Get in touch';
        document.querySelector('#contact .section-title p').textContent = 'Whether you\'re looking to kickstart a new project, explore partnership opportunities, or simply have a question for our team, we\'re here to help. Reach out to us today to start a conversation about how ImagineAnalytics can support your data analytics and AI needs. Our experts are eager to collaborate with you and drive impactful results for your organization. Let\'s connect and embark on a journey towards data-driven success together.';
        document.querySelectorAll('#contact .form-control')[0].placeholder = 'Enter first name';
        document.querySelectorAll('#contact .form-control')[1].placeholder = 'Enter last name';
        document.querySelectorAll('#contact .form-control')[2].placeholder = 'Enter Email address';
        document.querySelectorAll('#contact .form-control')[3].placeholder = 'Enter subject';
        document.querySelectorAll('#contact .form-control')[4].placeholder = 'Enter Message';
        document.querySelector('#contact .btn-brand').textContent = 'Send Message';

        // Footer
        document.querySelector('.footer-logo img').alt = 'ImagineAnalytics';
        document.querySelector('.footer-text p').textContent = 'At ImagineAnalytics, we offer a comprehensive suite of services designed to empower businesses with the latest in data analytics and artificial intelligence.';
        document.querySelectorAll('.footer-widget-heading h3')[0].textContent = 'Useful Links';
        document.querySelectorAll('.footer-widget ul li a')[0].textContent = 'Home';
        document.querySelectorAll('.footer-widget ul li a')[1].textContent = 'About';
        document.querySelectorAll('.footer-widget ul li a')[2].textContent = 'Services';
        document.querySelectorAll('.footer-widget ul li a')[3].textContent = 'Portfolio';
        document.querySelectorAll('.footer-widget ul li a')[4].textContent = 'Contact';
        document.querySelectorAll('.footer-widget ul li a')[5].textContent = 'About us';
        document.querySelectorAll('.footer-widget ul li a')[6].textContent = 'Our Services';
        document.querySelectorAll('.footer-widget ul li a')[7].textContent = 'Contact us';
        document.querySelectorAll('.footer-widget-heading h3')[1].textContent = 'Subscribe';
        document.querySelector('.footer-text.mb-25 p').textContent = 'Don’t miss to subscribe to our new feeds, kindly fill the form below.';
        document.querySelector('.subscribe-form input').placeholder = 'Email Address';
        document.querySelector('.copyright-text p').innerHTML = '© Copyright <span style="color: orange;">ImagineAnalytics</span>. All Rights Reserved. A Member of <a href="https://imaginecommons.com/" style="color: orange;">ImagineCommons</a>';
        document.querySelectorAll('.footer-menu ul li a')[0].textContent = 'Home';
        document.querySelectorAll('.footer-menu ul li a')[1].textContent = 'Terms';
        document.querySelectorAll('.footer-menu ul li a')[2].textContent = 'Privacy';
        document.querySelectorAll('.footer-menu ul li a')[3].textContent = 'Policy';
        document.querySelectorAll('.footer-menu ul li a')[4].textContent = 'Contact';
        // Footer - Find us
        document.querySelector('.single-cta .cta-text h4').textContent = 'Find us';
        document.querySelectorAll('.single-cta .cta-text span')[0].textContent = '24 Maverick Street, Boston MA 02128';
        // Footer - Call us
        document.querySelectorAll('.single-cta .cta-text h4')[1].textContent = 'Call us';
        document.querySelectorAll('.single-cta .cta-text span')[1].textContent = '+1 617 939 9034';
        // Footer - Mail us
        document.querySelectorAll('.single-cta .cta-text h4')[2].textContent = 'Mail us';
        document.querySelectorAll('.single-cta .cta-text span')[2].textContent = 'info@imagineanalytics.com';

        // Services - Section title
        document.querySelector('#services .section-title h1').textContent = 'Our Excellent AI Solutions for Your Business';
        document.querySelector('#services .section-title p').textContent = 'At ImagineAnalytics, we offer a comprehensive suite of services designed to empower businesses with the latest in data analytics and artificial intelligence. Our solutions are tailored to meet the unique needs of each client, ensuring maximum impact and value.';
        
        // Services - Individual service titles and descriptions
        const serviceTitles = [
            'Predictive Analytics',
            'Descriptive Analytics',
            'Prescriptive Analytics',
            'Data Visualization and Reporting',
            'Machine Learning Deployment',
            'Big Data Analytics Solutions',
            'Business Intelligence Tools',
            'Data Mining Services',
            'Text Analytics Solutions'
        ];

        const serviceDescriptions = [
            'Forecast future trends, behaviors, and outcomes with precision using advanced statistical algorithms and machine learning techniques.',
            'Uncover meaningful insights from historical data to understand past performance and trends, enabling informed decision-making.',
            'Receive actionable recommendations and strategic insights based on advanced analytics to guide effective decision-making.',
            'Transform complex data into visually engaging dashboards and reports that facilitate data-driven decision-making and enhance communication.',
            'Implement cutting-edge machine learning models to automate processes, improve accuracy, and unlock the full potential of your data resources.',
            'Extract meaningful insights from large and diverse datasets to drive informed decision-making, discover hidden patterns, and fuel business growth.',
            'Empower your team with intuitive reporting tools and self-service analytics capabilities to access real-time insights.',
            'Uncover actionable intelligence and extract valuable business insights from raw data.',
            'Utilize advanced text analytics to extract key information from unstructured text data, gain deeper customer insights.'
        ];

        document.querySelectorAll('.service h5').forEach((element, index) => {
            element.textContent = serviceTitles[index];
        });

        document.querySelectorAll('.service p').forEach((element, index) => {
            element.textContent = serviceDescriptions[index];
        });

    }

    // Translate content to Russian
    function translateToRussian() {
        // Navbar
        document.querySelector('.navbar-brand img').alt = 'ImagineAnalytics';
        document.querySelectorAll('.nav-link')[0].textContent = 'Главная';
        document.querySelectorAll('.nav-link')[1].textContent = 'О нас';
        document.querySelectorAll('.nav-link')[2].textContent = 'Услуги';
        // document.querySelectorAll('.nav-link')[3].textContent = 'Портфолио';
        document.querySelectorAll('.nav-link')[3].textContent = 'Контакты';
        document.querySelectorAll('.dropdown-item.lang-option')[0].textContent = 'Русский';
        document.querySelectorAll('.dropdown-item.lang-option')[1].textContent = 'Английский';

        // Hero
        document.querySelector('#hero2 h1').textContent = 'Искусственный интеллект для вашего бизнеса';
        document.querySelector('#hero2 p').textContent = 'Аналитика данных — это мощный инструмент для бизнеса и частных лиц, позволяющий получать инсайты, принимать обоснованные решения и достигать успеха. Это включает сбор, обработку и анализ данных для выявления закономерностей, тенденций и корреляций, которые могут информировать стратегические действия. Используя аналитика данных, организации могут оптимизировать операции, повышать эффективность и опережать конкурентов в мире, основанном на данных.';

        // About
        document.querySelector('#about .section-title h1').textContent = 'О ImagineAnalytics';
        document.querySelector('#about .section-title p').textContent = 'ImagineAnalytics — это растущая международная компания, объединяющая людей и учреждения, работающие в области анализа данных и искусственного интеллекта. Мы считаем, что аналитика данных обладает потенциалом для позитивных изменений и создания лучшего мира, позволяя организациям и лицам, принимающим решения, принимать обоснованные решения на основе анализа данных. Используя силу данных, мы можем решать сложные глобальные проблемы, такие как изменение климата, бедность, неравенство в здравоохранении и неравенство. С помощью анализа данных мы можем выявлять тенденции, закономерности и корреляции, которые могут привести к более эффективным решениям и улучшить благосостояние людей и сообществ по всему миру.';
        document.querySelectorAll('#about .iconbox + div h5')[0].textContent = 'Предиктивная аналитика';
        document.querySelectorAll('#about .iconbox + div p')[0].textContent = 'Прогнозируйте будущие тенденции, поведение и результаты с точностью, используя продвинутые статистические алгоритмы и методы машинного обучения.';
        document.querySelectorAll('#about .iconbox + div h5')[1].textContent = 'Дескриптивная аналитика';
        document.querySelectorAll('#about .iconbox + div p')[1].textContent = 'Получайте значимые инсайты из исторических данных для понимания прошлых показателей и тенденций, что позволяет принимать обоснованные решения.';
        document.querySelectorAll('#about .iconbox + div h5')[2].textContent = 'Прескриптивная аналитика';
        document.querySelectorAll('#about .iconbox + div p')[2].textContent = 'Получайте действенные рекомендации и стратегические инсайты на основе продвинутой аналитики для эффективного принятия решений и повышения операционной эффективности.';
        document.querySelectorAll('#about .iconbox + div h5')[3].textContent = 'Визуализация данных и отчетность';
        document.querySelectorAll('#about .iconbox + div p')[3].textContent = 'Преобразуйте сложные данные в визуально привлекательные панели управления и отчеты, которые способствуют принятию решений на основе данных и улучшают коммуникацию в вашей организации.';
        document.querySelectorAll('#about .iconbox + div h5')[4].textContent = 'Внедрение машинного обучения';
        document.querySelectorAll('#about .iconbox + div p')[4].textContent = 'Внедряйте передовые модели машинного обучения для автоматизации процессов, повышения точности и раскрытия полного потенциала ваших данных.';
        document.querySelectorAll('#about .iconbox + div h5')[5].textContent = 'Решения для анализа больших данных';
        document.querySelectorAll('#about .iconbox + div p')[5].textContent = 'Извлекайте значимые инсайты из больших и разнообразных наборов данных для принятия обоснованных решений, выявления скрытых закономерностей и роста бизнеса.';
        document.querySelectorAll('#about .iconbox + div h5')[6].textContent = 'Инструменты бизнес-аналитики';
        document.querySelectorAll('#about .iconbox + div p')[6].textContent = 'Предоставьте вашей команде интуитивные инструменты отчетности и возможности самообслуживания в аналитике для доступа к инсайтам в реальном времени и уверенного выполнения стратегических инициатив.';
        document.querySelectorAll('#about .iconbox + div h5')[7].textContent = 'Услуги по добыче данных';
        document.querySelectorAll('#about .iconbox + div p')[7].textContent = 'Извлекайте значимые бизнес-инсайты из сырых данных с помощью сложных методов и методик добычи данных.';
        document.querySelectorAll('#about .iconbox + div h5')[8].textContent = 'Решения для анализа текста';
        document.querySelectorAll('#about .iconbox + div p')[8].textContent = 'Используйте передовые методы анализа текста для извлечения ключевой информации из неструктурированных текстовых данных и получения более глубоких инсайтов о клиентах.';

        // Contact
        document.querySelector('#contact .section-title h1').textContent = 'Свяжитесь с нами';
        document.querySelector('#contact .section-title p').textContent = 'Хотите ли вы запустить новый проект, изучить возможности партнерства или просто задать вопрос нашей команде, мы всегда готовы помочь. Свяжитесь с нами сегодня, чтобы начать разговор о том, как ImagineAnalytics может помочь вам в анализе данных и ИИ. Наши эксперты готовы сотрудничать с вами и добиваться впечатляющих результатов для вашей организации. Давайте объединимся и вместе отправимся в путь к успеху, основанному на данных.';
        document.querySelectorAll('#contact .form-control')[0].placeholder = 'Введите имя';
        document.querySelectorAll('#contact .form-control')[1].placeholder = 'Введите фамилию';
        document.querySelectorAll('#contact .form-control')[2].placeholder = 'Введите адрес электронной почты';
        document.querySelectorAll('#contact .form-control')[3].placeholder = 'Введите тему';
        document.querySelectorAll('#contact .form-control')[4].placeholder = 'Введите сообщение';
        document.querySelector('#contact .btn-brand').textContent = 'Отправить сообщение';

        // Footer
        document.querySelector('.footer-logo img').alt = 'ImagineAnalytics';
        document.querySelector('.footer-text p').textContent = 'В ImagineAnalytics мы предлагаем комплексный набор услуг, предназначенных для усиления бизнеса с помощью последних достижений в области анализа данных и искусственного интеллекта.';
        document.querySelectorAll('.footer-widget-heading h3')[0].textContent = 'Полезные ссылки';
        document.querySelectorAll('.footer-widget ul li a')[0].textContent = 'Главная';
        document.querySelectorAll('.footer-widget ul li a')[1].textContent = 'О нас';
        document.querySelectorAll('.footer-widget ul li a')[2].textContent = 'Услуги';
        document.querySelectorAll('.footer-widget ul li a')[3].textContent = 'Портфолио';
        document.querySelectorAll('.footer-widget ul li a')[4].textContent = 'Контакты';
        document.querySelectorAll('.footer-widget ul li a')[5].textContent = 'О нас';
        document.querySelectorAll('.footer-widget ul li a')[6].textContent = 'Наши услуги';
        document.querySelectorAll('.footer-widget ul li a')[7].textContent = 'Связаться с нами';
        document.querySelectorAll('.footer-widget-heading h3')[1].textContent = 'Подписаться';
        document.querySelector('.footer-text.mb-25 p').textContent = 'Не забудьте подписаться на наши новые рассылки, заполните форму ниже.';
        document.querySelector('.subscribe-form input').placeholder = 'Адрес электронной почты';
        document.querySelector('.copyright-text p').innerHTML = '© Copyright <span style="color: orange;">ImagineAnalytics</span>. Все права защищены. Участник <a href="https://imaginecommons.com/" style="color: orange;">ImagineCommons</a>';
        document.querySelectorAll('.footer-menu ul li a')[0].textContent = 'Главная';
        document.querySelectorAll('.footer-menu ul li a')[1].textContent = 'Условия';
        document.querySelectorAll('.footer-menu ul li a')[2].textContent = 'Конфиденциальность';
        document.querySelectorAll('.footer-menu ul li a')[3].textContent = 'Политика';
        document.querySelectorAll('.footer-menu ul li a')[4].textContent = 'Контакты';
        // Footer - Найдите нас
        document.querySelector('.single-cta .cta-text h4').textContent = 'Найдите нас';
        document.querySelectorAll('.single-cta .cta-text span')[0].textContent = '24 Maverick Street, Boston MA 02128';
        // Footer - Позвоните нам
        document.querySelectorAll('.single-cta .cta-text h4')[1].textContent = 'Позвоните нам';
        document.querySelectorAll('.single-cta .cta-text span')[1].textContent = '+1 617 939 9034';
        // Footer - Напишите нам
        document.querySelectorAll('.single-cta .cta-text h4')[2].textContent = 'Напишите нам';
        document.querySelectorAll('.single-cta .cta-text span')[2].textContent = 'info@imagineanalytics.com';

        // Services - Section title
        document.querySelector('#services .section-title h1').textContent = 'Наши отличные AI решения для вашего бизнеса';
        document.querySelector('#services .section-title p').textContent = 'В ImagineAnalytics мы предлагаем комплексный набор услуг, предназначенных для усиления бизнеса с помощью последних достижений в области анализа данных и искусственного интеллекта. Наши решения адаптированы под уникальные потребности каждого клиента, обеспечивая максимальный эффект и ценность.';
        
        // Services - Individual service titles and descriptions
        const serviceTitles = [
            'Предиктивная аналитика',
            'Дескриптивная аналитика',
            'Прескриптивная аналитика',
            'Визуализация данных и отчетность',
            'Внедрение машинного обучения',
            'Решения для анализа больших данных',
            'Инструменты бизнес-аналитики',
            'Услуги по добыче данных',
            'Решения для анализа текста'
        ];

        const serviceDescriptions = [
            'Прогнозируйте будущие тенденции, поведение и результаты с точностью, используя продвинутые статистические алгоритмы и методы машинного обучения.',
            'Получайте значимые инсайты из исторических данных для понимания прошлых показателей и тенденций, что позволяет принимать обоснованные решения.',
            'Получайте действенные рекомендации и стратегические инсайты на основе продвинутой аналитики для эффективного принятия решений.',
            'Преобразуйте сложные данные в визуально привлекательные панели управления и отчеты, которые способствуют принятию решений на основе данных.',
            'Внедряйте передовые модели машинного обучения для автоматизации процессов, повышения точности и раскрытия полного потенциала ваших данных.',
            'Извлекайте значимые инсайты из больших и разнообразных наборов данных для принятия обоснованных решений, выявления скрытых закономерностей и роста бизнеса.',
            'Предоставьте вашей команде интуитивные инструменты отчетности и возможности самообслуживания в аналитике для доступа к инсайтам в реальном времени.',
            'Извлекайте значимые бизнес-инсайты из сырых данных. Которые способствуют принятию решений на основе данных и улучшают ваш бизнес а также повышают доход. И делает людей счастливее.',
            'Используйте передовые методы анализа текста для извлечения ключевой информации из неструктурированных текстовых данных, получайте более глубокие инсайты о клиентах.'
        ];

        document.querySelectorAll('.service h5').forEach((element, index) => {
            element.textContent = serviceTitles[index];
        });

        document.querySelectorAll('.service p').forEach((element, index) => {
            element.textContent = serviceDescriptions[index];
        });

    }

    // Event listener for language change
    languageOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault();
            const language = option.getAttribute('data-lang');
            changeLanguage(language);
        });
    });

    // Set default language on page load
    changeLanguage('en');
});
