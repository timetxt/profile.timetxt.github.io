// 语言配置文件
const languages = {
    zh: {
        // 导航
        nav: {
            home: "首页",
            about: "关于我",
            skills: "技能",
            portfolio: "作品集",
            experience: "经验",
            contact: "联系我"
        },
        // 主题切换
        theme: {
            dark: "暗色",
            light: "亮色"
        },
        // 语言切换
        lang: {
            zh: "中文",
            en: "English"
        },
        // 首页
        home: {
            greeting: "您好, 我是",
            name: "您的名字",
            title: "全栈开发工程师 | UI/UX设计师 | 创意专家",
            description: "我专注于创建美观且功能强大的数字体验，将设计与技术完美结合。",
            contact: "联系我",
            viewWorks: "查看作品"
        },
        // 关于我
        about: {
            title: "关于我",
            bioTitle: "个人简介",
            bio1: "我是一名充满激情的全栈开发工程师，拥有丰富的Web和iOS应用开发经验。我喜欢解决复杂问题，并创造出既美观又实用的数字产品。",
            bio2: "我擅长Swift、SwiftUI、JavaScript、Node.js和Python，对新技术抱有浓厚的兴趣，并不断学习以保持竞争力。",
            bio3: "在工作之外，我喜欢[您的爱好或兴趣]，这些活动帮助我保持创造力和对设计的敏锐度。",
            detailsTitle: "个人详情",
            name: "姓名:",
            nameValue: "您的名字",
            dob: "出生日期:",
            dobValue: "YYYY-MM-DD",
            nationality: "国籍:",
            nationalityValue: "您的国籍",
            languages: "语言:",
            languagesValue: "中文, 英语",
            address: "地址:",
            addressValue: "您的城市，国家",
            email: "邮箱:",
            emailValue: "your.email@example.com",
            phone: "电话:",
            phoneValue: "+XX XXXXXXXXXX",
            freelance: "自由职业:",
            freelanceValue: "可接受",
            downloadCV: "下载简历"
        },
        // 技能
        skills: {
            title: "我的技能",
            ios: {
                title: "iOS开发",
                description: "精通Swift和SwiftUI，能够开发现代化、高性能的iOS应用程序，支持iPhone和iPad设备。",
                skill1: "Swift",
                skill2: "SwiftUI"
            },
            frontend: {
                title: "Web前端",
                description: "熟练使用现代前端技术栈，创建响应式、交互性强的用户界面，注重用户体验和性能优化。",
                skill1: "HTML/CSS",
                skill2: "JavaScript"
            },
            backend: {
                title: "后端开发",
                description: "掌握多种后端开发技术，能够构建安全、高效的API和服务，支持现代Web应用和移动应用。",
                skill1: "Node.js",
                skill2: "Python"
            }
        },
        // 作品集
        portfolio: {
            title: "我的作品",
            all: "全部",
            web: "网站",
            app: "应用",
            design: "设计",
            project1: {
                title: "企业网站重设计",
                description: "为客户重新设计并开发了现代响应式企业网站，提升了用户体验和转化率。",
                tech: ["HTML5", "CSS3", "JavaScript"],
                viewDetails: "查看详情"
            },
            project2: {
                title: "健身追踪应用",
                description: "开发了一个功能全面的iOS健身追踪应用，帮助用户监控锻炼和健康指标。",
                tech: ["Swift", "SwiftUI", "HealthKit"],
                viewDetails: "查看详情"
            },
            project3: {
                title: "品牌标识设计",
                description: "为初创公司设计了现代简约的品牌标识和视觉识别系统，帮助其建立品牌形象。",
                tech: ["Logo设计", "品牌识别", "排版"],
                viewDetails: "查看详情"
            }
        },
        // 经验
        experience: {
            title: "工作经验",
            job1: {
                period: "2021 - 至今",
                title: "高级全栈开发工程师",
                company: "科技公司名称",
                description: "作为团队的核心成员，负责开发和维护公司的旗舰产品。主导了多个关键项目，优化了前端性能和后端架构，并指导初级开发人员。",
                skills: ["Web开发", "iOS开发", "团队管理", "技术架构"]
            },
            job2: {
                period: "2018 - 2021",
                title: "前端开发工程师",
                company: "公司名称",
                description: "负责开发和优化公司网站和Web应用的用户界面。实现了响应式设计，提高了网站性能和用户体验，参与了多个关键项目的开发周期。",
                skills: ["HTML/CSS", "JavaScript", "UI/UX", "React"]
            },
            job3: {
                period: "2016 - 2018",
                title: "iOS开发实习生",
                company: "初创公司名称",
                description: "协助开发公司的iOS应用，学习并实践Swift编程。参与了应用设计、开发和测试的全过程，为多个功能模块的实现做出了贡献。",
                skills: ["Swift", "iOS开发", "UI设计", "版本控制"]
            }
        },
        // 联系
        contact: {
            title: "联系我",
            infoTitle: "联系信息",
            address: "您的城市，国家",
            email: "your.email@example.com",
            phone: "+XX XXXXXXXXXX",
            social: "在社交媒体上关注我",
            formTitle: "给我发送消息",
            nameLabel: "您的姓名",
            emailLabel: "您的邮箱",
            subjectLabel: "主题",
            messageLabel: "您的消息",
            send: "发送消息"
        },
        // 页脚
        footer: {
            copyright: "保留所有权利。"
        },
        // 其他
        other: {
            backToTop: "回到顶部"
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            portfolio: "Portfolio",
            experience: "Experience",
            contact: "Contact"
        },
        // Theme toggle
        theme: {
            dark: "Dark",
            light: "Light"
        },
        // Language toggle
        lang: {
            zh: "中文",
            en: "English"
        },
        // Home
        home: {
            greeting: "Hello, I'm",
            name: "Your Name",
            title: "Full Stack Developer | UI/UX Designer | Creative Expert",
            description: "I focus on creating beautiful and powerful digital experiences, perfectly combining design and technology.",
            contact: "Contact Me",
            viewWorks: "View Works"
        },
        // About
        about: {
            title: "About Me",
            bioTitle: "Personal Bio",
            bio1: "I am a passionate full-stack developer with extensive experience in Web and iOS application development. I enjoy solving complex problems and creating digital products that are both aesthetic and practical.",
            bio2: "I'm proficient in Swift, SwiftUI, JavaScript, Node.js, and Python, with a strong interest in new technologies and continuous learning to stay competitive.",
            bio3: "Outside of work, I enjoy [Your Hobbies or Interests], which help me maintain creativity and a keen sense of design.",
            detailsTitle: "Personal Details",
            name: "Name:",
            nameValue: "Your Name",
            dob: "Date of Birth:",
            dobValue: "YYYY-MM-DD",
            nationality: "Nationality:",
            nationalityValue: "Your Nationality",
            languages: "Languages:",
            languagesValue: "Chinese, English",
            address: "Address:",
            addressValue: "Your City, Country",
            email: "Email:",
            emailValue: "your.email@example.com",
            phone: "Phone:",
            phoneValue: "+XX XXXXXXXXXX",
            freelance: "Freelance:",
            freelanceValue: "Available",
            downloadCV: "Download CV"
        },
        // Skills
        skills: {
            title: "My Skills",
            ios: {
                title: "iOS Development",
                description: "Proficient in Swift and SwiftUI, capable of developing modern, high-performance iOS applications supporting iPhone and iPad devices.",
                skill1: "Swift",
                skill2: "SwiftUI"
            },
            frontend: {
                title: "Frontend Development",
                description: "Skilled in modern frontend technology stack, creating responsive and interactive user interfaces with a focus on user experience and performance optimization.",
                skill1: "HTML/CSS",
                skill2: "JavaScript"
            },
            backend: {
                title: "Backend Development",
                description: "Mastery of various backend development technologies, building secure and efficient APIs and services supporting modern web and mobile applications.",
                skill1: "Node.js",
                skill2: "Python"
            }
        },
        // Portfolio
        portfolio: {
            title: "My Works",
            all: "All",
            web: "Web",
            app: "App",
            design: "Design",
            project1: {
                title: "Corporate Website Redesign",
                description: "Redesigned and developed a modern responsive corporate website for clients, improving user experience and conversion rates.",
                tech: ["HTML5", "CSS3", "JavaScript"],
                viewDetails: "View Details"
            },
            project2: {
                title: "Fitness Tracking App",
                description: "Developed a comprehensive iOS fitness tracking app to help users monitor workouts and health metrics.",
                tech: ["Swift", "SwiftUI", "HealthKit"],
                viewDetails: "View Details"
            },
            project3: {
                title: "Brand Identity Design",
                description: "Designed modern minimalist brand identity and visual recognition systems for startups, helping them establish brand image.",
                tech: ["Logo Design", "Brand Identity", "Typography"],
                viewDetails: "View Details"
            }
        },
        // Experience
        experience: {
            title: "Work Experience",
            job1: {
                period: "2021 - Present",
                title: "Senior Full Stack Developer",
                company: "Tech Company Name",
                description: "As a core team member, responsible for developing and maintaining the company's flagship products. Led multiple key projects, optimized frontend performance and backend architecture, and mentored junior developers.",
                skills: ["Web Development", "iOS Development", "Team Management", "Technical Architecture"]
            },
            job2: {
                period: "2018 - 2021",
                title: "Frontend Developer",
                company: "Company Name",
                description: "Responsible for developing and optimizing user interfaces for company websites and web applications. Implemented responsive design, improved website performance and user experience, and participated in multiple key project development cycles.",
                skills: ["HTML/CSS", "JavaScript", "UI/UX", "React"]
            },
            job3: {
                period: "2016 - 2018",
                title: "iOS Development Intern",
                company: "Startup Company Name",
                description: "Assisted in developing the company's iOS applications, learning and practicing Swift programming. Participated in the entire process of application design, development, and testing, contributing to multiple feature module implementations.",
                skills: ["Swift", "iOS Development", "UI Design", "Version Control"]
            }
        },
        // Contact
        contact: {
            title: "Contact Me",
            infoTitle: "Contact Information",
            address: "Your City, Country",
            email: "your.email@example.com",
            phone: "+XX XXXXXXXXXX",
            social: "Follow Me on Social Media",
            formTitle: "Send Me a Message",
            nameLabel: "Your Name",
            emailLabel: "Your Email",
            subjectLabel: "Subject",
            messageLabel: "Your Message",
            send: "Send Message"
        },
        // Footer
        footer: {
            copyright: "All rights reserved."
        },
        // Other
        other: {
            backToTop: "Back to Top"
        }
    }
}; 