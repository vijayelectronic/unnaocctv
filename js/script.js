document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });

    // Language Toggle
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'en';
    
    const translations = {
        en: {
            home: "Home",
            products: "Products",
            services: "Services",
            contact: "Contact",
            slider1_title: "Advanced CCTV Solutions",
            slider1_desc: "Secure your home and business with top-notch surveillance.",
            explore_products: "Explore Products",
            slider2_title: "Expert Repair Services",
            slider2_desc: "Fast and reliable repair for LED TVs, Laptops, and Desktops.",
            our_services: "Our Services",
            slider3_title: "Professional Installation",
            slider3_desc: "Hassle-free installation and configuration by experts.",
            contact_us: "Contact Us",
            welcome_title: "Welcome to Vijay Electronics",
            welcome_subtitle: "Your trusted partner for security solutions and electronic repairs in Unnao.",
            cctv_sales: "CCTV Sales",
            cctv_sales_desc: "Wide range of CP Plus, Hikvision, and Dahua cameras.",
            repair_services: "Repair Services",
            repair_services_desc: "Expert repair for LED TVs, Laptops, and Desktops.",
            support: "24/7 Support",
            support_desc: "Reliable after-sales support and annual maintenance.",
            about_us: "About Us",
            footer_about: "Vijay Electronics is a leading provider of CCTV security systems and electronic repair services in Unnao.",
            quick_links: "Quick Links",
            contact_info: "Contact Info",
            our_products: "Our Products",
            prod_cctv_title: "CCTV Cameras",
            prod_cctv_desc: "High-definition Dome, Bullet, and PTZ cameras for complete security.",
            prod_wireless_title: "Wireless CCTV Kit",
            prod_wireless_desc: "Easy to install wireless security systems with remote viewing capabilities.",
            prod_accessories_title: "CCTV Accessories",
            prod_accessories_desc: "DVRs, NVRs, Cables, Power Supplies, and Connectors.",
            enquire_now: "Enquire Now",
            serv_cctv_title: "CCTV Installation & Repair",
            serv_cctv_desc: "Complete installation of CP Plus, Hikvision, and Dahua cameras. We also provide troubleshooting and repair services.",
            serv_tv_title: "LED TV Repair",
            serv_tv_desc: "Expert repair for all brands of LED, LCD, and Smart TVs. Screen replacement, motherboard repair, and more.",
            serv_laptop_title: "Laptop & Desktop Repair",
            serv_laptop_desc: "Chip-level repairing, software installation, virus removal, and hardware upgrades for laptops and desktops.",
            serv_amc_title: "Annual Maintenance Contract (AMC)",
            serv_amc_desc: "Get peace of mind with our AMC plans for your CCTV systems and office electronics.",
            get_in_touch: "Get In Touch",
            contact_desc: "We are here to help you with all your electronic security and repair needs.",
            address: "Address",
            phone: "Phone",
            email: "Email",
            send_message: "Send us a Message",
            label_name: "Name",
            label_email: "Email",
            label_phone: "Phone",
            label_message: "Message",
            submit_btn: "Send Message"
        },
        hi: {
            home: "होम",
            products: "उत्पाद",
            services: "सेवाएं",
            contact: "संपर्क",
            slider1_title: "उन्नत सीसीटीवी समाधान",
            slider1_desc: "सर्वोत्तम निगरानी के साथ अपने घर और व्यवसाय को सुरक्षित करें।",
            explore_products: "उत्पाद देखें",
            slider2_title: "विशेषज्ञ मरम्मत सेवाएं",
            slider2_desc: "एलईडी टीवी, लैपटॉप और डेस्कटॉप की तेज और विश्वसनीय मरम्मत।",
            our_services: "हमारी सेवाएं",
            slider3_title: "पेशेवर इंस्टॉलेशन",
            slider3_desc: "विशेषज्ञों द्वारा परेशानी मुक्त इंस्टॉलेशन और कॉन्फ़िगरेशन।",
            contact_us: "संपर्क करें",
            welcome_title: "विजय इलेक्ट्रॉनिक्स में आपका स्वागत है",
            welcome_subtitle: "उन्नाव में सुरक्षा समाधान और इलेक्ट्रॉनिक मरम्मत के लिए आपका विश्वसनीय साथी।",
            cctv_sales: "सीसीटीवी बिक्री",
            cctv_sales_desc: "सीपी प्लस, हिकविजन और दहुआ कैमरों की विस्तृत श्रृंखला।",
            repair_services: "मरम्मत सेवाएं",
            repair_services_desc: "एलईडी टीवी, लैपटॉप और डेस्कटॉप की विशेषज्ञ मरम्मत।",
            support: "24/7 सहायता",
            support_desc: "विश्वसनीय बिक्री के बाद सहायता और वार्षिक रखरखाव।",
            about_us: "हमारे बारे में",
            footer_about: "विजय इलेक्ट्रॉनिक्स उन्नाव में सीसीटीवी सुरक्षा प्रणालियों और इलेक्ट्रॉनिक मरम्मत सेवाओं का एक अग्रणी प्रदाता है।",
            quick_links: "त्वरित लिंक",
            contact_info: "संपर्क जानकारी",
            our_products: "हमारे उत्पाद",
            prod_cctv_title: "सीसीटीवी कैमरे",
            prod_cctv_desc: "पूर्ण सुरक्षा के लिए हाई-डेफिनिशन डोम, बुलेट और पीटीजेड कैमरे।",
            prod_wireless_title: "वायरलेस सीसीटीवी किट",
            prod_wireless_desc: "रिमोट व्यूइंग क्षमताओं के साथ आसान इंस्टॉलेशन वाले वायरलेस सुरक्षा सिस्टम।",
            prod_accessories_title: "सीसीटीवी एक्सेसरीज",
            prod_accessories_desc: "डीवीआर, एनवीआर, केबल, बिजली की आपूर्ति और कनेक्टर।",
            enquire_now: "अभी पूछताछ करें",
            serv_cctv_title: "सीसीटीवी इंस्टॉलेशन और मरम्मत",
            serv_cctv_desc: "सीपी प्लस, हिकविजन और दहुआ कैमरों का पूर्ण इंस्टॉलेशन। हम समस्या निवारण और मरम्मत सेवाएं भी प्रदान करते हैं।",
            serv_tv_title: "एलईडी टीवी मरम्मत",
            serv_tv_desc: "एलईडी, एलसीडी और स्मार्ट टीवी के सभी ब्रांडों के लिए विशेषज्ञ मरम्मत। स्क्रीन रिप्लेसमेंट, मदरबोर्ड मरम्मत, और बहुत कुछ।",
            serv_laptop_title: "लैपटॉप और डेस्कटॉप मरम्मत",
            serv_laptop_desc: "लैपटॉप और डेस्कटॉप के लिए चिप-लेवल रिपेयरिंग, सॉफ्टवेयर इंस्टॉलेशन, वायरस हटाना और हार्डवेयर अपग्रेड।",
            serv_amc_title: "वार्षिक रखरखाव अनुबंध (एएमसी)",
            serv_amc_desc: "अपने सीसीटीवी सिस्टम और कार्यालय इलेक्ट्रॉनिक्स के लिए हमारी एएमसी योजनाओं के साथ मानसिक शांति प्राप्त करें।",
            get_in_touch: "संपर्क में रहें",
            contact_desc: "हम आपकी सभी इलेक्ट्रॉनिक सुरक्षा और मरम्मत आवश्यकताओं में मदद करने के लिए यहां हैं।",
            address: "पता",
            phone: "फ़ोन",
            email: "ईमेल",
            send_message: "हमें संदेश भेजें",
            label_name: "नाम",
            label_email: "ईमेल",
            label_phone: "फ़ोन",
            label_message: "संदेश",
            submit_btn: "संदेश भेजें"
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        langToggle.textContent = lang === 'en' ? 'हिंदी' : 'English';
        localStorage.setItem('lang', lang);
    }

    // Initialize language
    updateLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'hi' : 'en';
        updateLanguage(currentLang);
    });

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Auto Slider (Only on Home Page)
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const intervalTime = 5000;
        let slideInterval;

        const nextSlide = () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        };

        const prevSlide = () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        };

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        function startInterval() {
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        startInterval();
    }
});
