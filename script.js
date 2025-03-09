// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 语言切换功能
    const langToggle = document.getElementById('lang-toggle');
    const langToggleMobile = document.getElementById('lang-toggle-mobile');
    const currentLangElements = document.querySelectorAll('.current-lang');
    
    // 默认语言
    let currentLang = 'zh';
    
    // 检查用户之前选择的语言
    if (localStorage.getItem('language')) {
        currentLang = localStorage.getItem('language');
    } else {
        // 检查浏览器语言设置
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('en')) {
            currentLang = 'en';
        }
        // 存储默认语言
        localStorage.setItem('language', currentLang);
    }
    
    // 初始化页面语言
    updatePageLanguage(currentLang);
    
    // 更新按钮文本
    updateLanguageButton(currentLang);
    
    // 切换语言
    function toggleLanguage() {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('language', currentLang);
        updatePageLanguage(currentLang);
        updateLanguageButton(currentLang);
    }
    
    // 更新按钮文本
    function updateLanguageButton(lang) {
        currentLangElements.forEach(el => {
            el.textContent = languages[lang].lang[lang];
        });
    }
    
    // 更新页面所有带有data-i18n属性的元素
    function updatePageLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) {
                const keys = key.split('.');
                let text = languages[lang];
                
                // 根据嵌套键获取文本
                try {
                    for (const k of keys) {
                        text = text[k];
                    }
                    
                    // 如果是input, textarea或其他表单元素
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        if (el.getAttribute('placeholder') !== null) {
                            el.placeholder = text;
                        } else {
                            el.value = text;
                        }
                    } 
                    // 如果是具有value属性的元素
                    else if (el.value !== undefined && !(el instanceof HTMLElement)) {
                        el.value = text;
                    } 
                    // 其他元素
                    else {
                        el.textContent = text;
                    }
                } catch (e) {
                    console.warn(`Missing translation: ${key} for language: ${lang}`);
                }
            }
        });
        
        // 更新HTML语言属性
        document.documentElement.lang = lang;
        
        // 可能还需要更新title
        if (languages[lang].pageTitle) {
            document.title = languages[lang].pageTitle;
        }
    }
    
    // 添加事件监听
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    if (langToggleMobile) {
        langToggleMobile.addEventListener('click', toggleLanguage);
    }

    // 获取回到顶部按钮
    const backToTopBtn = document.getElementById('back-to-top');
    
    // 滚动时控制按钮显示/隐藏
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // 滚动超过300px时显示按钮
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        // 确定当前处于哪个区域，更新按钮位置
        const sections = document.querySelectorAll('section');
        let currentSection = null;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // 如果区域顶部在视口顶部以上且底部在视口底部以下，则视为当前区域
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section;
            }
        });
        
        // 如果找到当前区域，移动按钮位置
        if (currentSection) {
            // 保持在右下角
            backToTopBtn.style.bottom = '25px';
            backToTopBtn.style.right = '25px';
        }
    });
    
    // 点击按钮回到顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 暗色模式切换
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleBtnMobile = document.getElementById('theme-toggle-mobile');
    const modeTextElements = document.querySelectorAll('.mode-text');
    
    // 更新按钮文本
    function updateButtonText(isDark) {
        const textKey = isDark ? 'theme.light' : 'theme.dark';
        modeTextElements.forEach(el => {
            el.setAttribute('data-i18n', textKey);
            el.textContent = languages[currentLang][textKey.split('.')[0]][textKey.split('.')[1]];
        });
    }
    
    // 检查用户偏好
    function setInitialTheme() {
        let isDarkMode = false;
        
        if (localStorage.getItem('theme')) {
            isDarkMode = localStorage.getItem('theme') === 'dark';
        } else {
            // 检查系统偏好
            isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        }
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
        updateButtonText(isDarkMode);
    }
    
    // 切换主题
    function toggleTheme() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateButtonText(isDarkMode);
    }
    
    // 设置初始主题
    setInitialTheme();
    
    // 监听切换事件
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }
    
    if (toggleBtnMobile) {
        toggleBtnMobile.addEventListener('click', toggleTheme);
    }

    // 导航菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 导航链接点击后关闭移动菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // 滚动时导航栏样式变化
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 作品集筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的active类
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else if (item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 滚动动画
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('animated');
            }
        });
    };
    
    // 初始调用一次
    animateOnScroll();
    
    // 滚动时调用
    window.addEventListener('scroll', animateOnScroll);

    // 表单提交处理
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // 这里可以添加表单验证和提交逻辑
            // 以下是模拟提交成功的提示
            alert('消息已发送！谢谢您的联系。');
            contactForm.reset();
        });
    }

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 为技能卡片添加鼠标悬停效果
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });

    // 动态年份显示在页脚
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}); 