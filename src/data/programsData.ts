export interface Program {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  curriculum: {
    module: string;
    lessons: string[];
  }[];
  tools: {
    name: string;
    iconUrl: string;
  }[];
  projects: {
    title: string;
    desc: string;
  }[];
  mentors: {
    name: string;
    role: string;
    photoUrl: string;
    linkedin: string;
  }[];
  pricing: {
    cost: string;
    duration: string;
    batch: string;
    originalPrice?: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
  features: string[];
  icon: string;
  gradient: string;
}

export const programsData: Program[] = [
  {
    slug: "business-analyst",
    title: "Business Analyst Internship Program",
    subtitle: "Gain practical business analysis skills by working on real projects",
    description: "Learn to bridge the gap between business needs and technical solutions through hands-on projects and industry mentorship. Master market research, business intelligence, and financial analysis.",
    highlights: [
      "Live Projects",
      "Job Assistance",
      "Industry Certification",
      "Expert Mentorship",
      "Real-world Case Studies",
      "Business Strategy Insights"
    ],
    curriculum: [
      {
        module: "Module 1: Business Analysis Fundamentals",
        lessons: [
          "Introduction to Business Analysis",
          "Requirements Gathering Techniques",
          "Stakeholder Management",
          "Business Process Modeling"
        ]
      },
      {
        module: "Module 2: Market Research & Analysis",
        lessons: [
          "Market Research Methodologies",
          "Competitive Analysis",
          "SWOT Analysis",
          "Market Segmentation"
        ]
      },
      {
        module: "Module 3: Business Intelligence",
        lessons: [
          "Data Analysis Fundamentals",
          "KPI Development",
          "Dashboard Creation",
          "Business Metrics"
        ]
      },
      {
        module: "Module 4: Financial Analysis",
        lessons: [
          "Financial Statement Analysis",
          "Budget Planning",
          "Cost-Benefit Analysis",
          "ROI Calculations"
        ]
      }
    ],
    tools: [
      { name: "Excel", iconUrl: "/tools/excel.svg" },
      { name: "Power BI", iconUrl: "/tools/powerbi.svg" },
      { name: "Tableau", iconUrl: "/tools/tableau.svg" },
      { name: "SQL", iconUrl: "/tools/sql.svg" },
      { name: "JIRA", iconUrl: "/tools/jira.svg" },
      { name: "Confluence", iconUrl: "/tools/confluence.svg" }
    ],
    projects: [
      {
        title: "Market Entry Strategy Analysis",
        desc: "Analyze market opportunities and develop comprehensive entry strategies for new products/services."
      },
      {
        title: "Business Process Optimization",
        desc: "Identify inefficiencies and redesign business processes to improve operational efficiency."
      },
      {
        title: "Financial Performance Dashboard",
        desc: "Create comprehensive dashboards to track and analyze financial performance metrics."
      }
    ],
    mentors: [
      {
        name: "Rahul Sharma",
        role: "Senior Business Analyst",
        photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/rahul-sharma"
      },
      {
        name: "Priya Patel",
        role: "Business Intelligence Lead",
        photoUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/priya-patel"
      }
    ],
    pricing: {
      cost: "₹49,999",
      duration: "8 weeks",
      batch: "July 2024",
      originalPrice: "₹59,999"
    },
    faq: [
      {
        question: "Do I need prior business experience?",
        answer: "No, beginners are welcome! We start from fundamentals and build practical skills through real projects."
      },
      {
        question: "What tools will I learn?",
        answer: "Excel, Power BI, Tableau, SQL, JIRA, and other industry-standard business analysis tools."
      },
      {
        question: "Will I work on real projects?",
        answer: "Yes, you'll work on live projects that mirror real business challenges and scenarios."
      },
      {
        question: "What career opportunities are available?",
        answer: "Business Analyst, Product Manager, Strategy Consultant, Data Analyst, and Project Manager roles."
      }
    ],
    features: ["Live Projects", "Job Assistance", "Industry Certification"],
    icon: "📊",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    slug: "frontend",
    title: "Front-End Development Internship",
    subtitle: "Kickstart your journey into web development",
    description: "Master modern frontend technologies and build responsive, interactive web applications. Learn HTML, CSS, JavaScript, React, and modern development practices.",
    highlights: [
      "Real Projects",
      "Portfolio Building",
      "Modern Tech Stack",
      "Responsive Design",
      "UI/UX Principles",
      "Performance Optimization"
    ],
    curriculum: [
      {
        module: "Module 1: Web Fundamentals",
        lessons: [
          "HTML5 & Semantic Markup",
          "CSS3 & Flexbox/Grid",
          "JavaScript ES6+",
          "Responsive Design"
        ]
      },
      {
        module: "Module 2: Modern JavaScript",
        lessons: [
          "DOM Manipulation",
          "Async Programming",
          "ES6+ Features",
          "Modern JavaScript Patterns"
        ]
      },
      {
        module: "Module 3: React Development",
        lessons: [
          "React Fundamentals",
          "Hooks & Context",
          "State Management",
          "Component Architecture"
        ]
      },
      {
        module: "Module 4: Advanced Frontend",
        lessons: [
          "TypeScript",
          "Next.js Framework",
          "Performance Optimization",
          "Testing & Deployment"
        ]
      }
    ],
    tools: [
      { name: "HTML5", iconUrl: "/tools/html5.svg" },
      { name: "CSS3", iconUrl: "/tools/css3.svg" },
      { name: "JavaScript", iconUrl: "/tools/javascript.svg" },
      { name: "React", iconUrl: "/tools/react.svg" },
      { name: "TypeScript", iconUrl: "/tools/typescript.svg" },
      { name: "Git", iconUrl: "/tools/git.svg" }
    ],
    projects: [
      {
        title: "E-commerce Website",
        desc: "Build a responsive e-commerce site with product catalog, shopping cart, and user authentication."
      },
      {
        title: "Portfolio Website",
        desc: "Create a professional portfolio showcasing your skills and projects with modern design."
      },
      {
        title: "Task Management App",
        desc: "Develop a React-based task management application with drag-and-drop functionality."
      }
    ],
    mentors: [
      {
        name: "Amit Kumar",
        role: "Senior Frontend Developer",
        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/amit-kumar"
      },
      {
        name: "Neha Singh",
        role: "UI/UX Specialist",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/neha-singh"
      }
    ],
    pricing: {
      cost: "₹54,999",
      duration: "10 weeks",
      batch: "August 2024",
      originalPrice: "₹64,999"
    },
    faq: [
      {
        question: "Do I need programming experience?",
        answer: "No, we start from the basics and gradually build up to advanced concepts."
      },
      {
        question: "What will I build?",
        answer: "You'll create 3-4 real projects including an e-commerce site, portfolio, and task management app."
      },
      {
        question: "Will I learn modern frameworks?",
        answer: "Yes, you'll master React, TypeScript, and modern development practices."
      },
      {
        question: "What career opportunities are available?",
        answer: "Frontend Developer, UI Developer, React Developer, and Web Developer roles."
      }
    ],
    features: ["Real Projects", "Portfolio Building", "Modern Tech Stack"],
    icon: "🌐",
    gradient: "from-green-500 to-blue-500"
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking with Kali Linux",
    subtitle: "Gain practical skills in cybersecurity and ethical hacking",
    description: "Learn offensive and defensive security techniques using industry-standard tools and methodologies. Master penetration testing, vulnerability assessment, and security auditing.",
    highlights: [
      "Live Projects",
      "Certification",
      "Expert Mentorship",
      "Real-world Scenarios",
      "Industry Tools",
      "Security Best Practices"
    ],
    curriculum: [
      {
        module: "Module 1: Cybersecurity Fundamentals",
        lessons: [
          "Introduction to Cybersecurity",
          "Threats & Vulnerabilities",
          "Ethical Hacking Basics",
          "Kali Linux Setup"
        ]
      },
      {
        module: "Module 2: Network Security",
        lessons: [
          "Network Scanning",
          "Port Scanning",
          "Network Enumeration",
          "Wireless Security"
        ]
      },
      {
        module: "Module 3: Web Application Security",
        lessons: [
          "OWASP Top 10",
          "SQL Injection",
          "XSS & CSRF Attacks",
          "Web App Penetration Testing"
        ]
      },
      {
        module: "Module 4: Advanced Security",
        lessons: [
          "Social Engineering",
          "Malware Analysis",
          "Incident Response",
          "Security Reporting"
        ]
      }
    ],
    tools: [
      { name: "Kali Linux", iconUrl: "/tools/kali.svg" },
      { name: "Burp Suite", iconUrl: "/tools/burp.svg" },
      { name: "Wireshark", iconUrl: "/tools/wireshark.svg" },
      { name: "Metasploit", iconUrl: "/tools/metasploit.svg" },
      { name: "Nmap", iconUrl: "/tools/nmap.svg" },
      { name: "John the Ripper", iconUrl: "/tools/john.svg" }
    ],
    projects: [
      {
        title: "Network Security Assessment",
        desc: "Conduct comprehensive security assessment of network infrastructure and identify vulnerabilities."
      },
      {
        title: "Web Application Penetration Test",
        desc: "Perform ethical hacking on web applications to identify security weaknesses."
      },
      {
        title: "Security Audit Report",
        desc: "Create detailed security audit reports with findings and remediation recommendations."
      }
    ],
    mentors: [
      {
        name: "Vikram Singh",
        role: "Lead Security Expert",
        photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/vikram-singh"
      },
      {
        name: "Anita Desai",
        role: "Penetration Tester",
        photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/anita-desai"
      }
    ],
    pricing: {
      cost: "₹59,999",
      duration: "12 weeks",
      batch: "September 2024",
      originalPrice: "₹69,999"
    },
    faq: [
      {
        question: "Is this program legal and ethical?",
        answer: "Yes, we teach ethical hacking techniques for defensive purposes and security testing only."
      },
      {
        question: "What certifications will I receive?",
        answer: "You'll receive our industry-recognized certification and guidance for CEH, CompTIA Security+."
      },
      {
        question: "Will I work with real tools?",
        answer: "Yes, you'll use industry-standard penetration testing tools in controlled environments."
      },
      {
        question: "What career opportunities are available?",
        answer: "Security Analyst, Penetration Tester, Security Consultant, and Cybersecurity Specialist roles."
      }
    ],
    features: ["Live Projects", "Certification", "Expert Mentorship"],
    icon: "🔐",
    gradient: "from-red-500 to-orange-500"
  },
  {
    slug: "fullstack",
    title: "Full Stack Development Internship",
    subtitle: "Master web development from the ground up",
    description: "Build complete web applications using the latest technologies and frameworks. Learn both frontend and backend development with real-world projects.",
    highlights: [
      "Real Projects",
      "Portfolio Building",
      "Industry Mentorship",
      "Modern Tech Stack",
      "Deployment Skills",
      "Team Collaboration"
    ],
    curriculum: [
      {
        module: "Module 1: Frontend Fundamentals",
        lessons: [
          "HTML5 & CSS3",
          "JavaScript ES6+",
          "React.js Basics",
          "State Management"
        ]
      },
      {
        module: "Module 2: Advanced Frontend",
        lessons: [
          "React Hooks & Context",
          "TypeScript",
          "Next.js Framework",
          "UI/UX Principles"
        ]
      },
      {
        module: "Module 3: Backend Development",
        lessons: [
          "Node.js & Express",
          "RESTful APIs",
          "Database Design",
          "Authentication & Authorization"
        ]
      },
      {
        module: "Module 4: Full-Stack Integration",
        lessons: [
          "API Integration",
          "Database Management",
          "Deployment & DevOps",
          "Performance Optimization"
        ]
      }
    ],
    tools: [
      { name: "React", iconUrl: "/tools/react.svg" },
      { name: "Node.js", iconUrl: "/tools/nodejs.svg" },
      { name: "MongoDB", iconUrl: "/tools/mongodb.svg" },
      { name: "PostgreSQL", iconUrl: "/tools/postgresql.svg" },
      { name: "Git", iconUrl: "/tools/git.svg" },
      { name: "Docker", iconUrl: "/tools/docker.svg" }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        desc: "Build a complete online store with user authentication, payment integration, and admin panel."
      },
      {
        title: "Social Media App",
        desc: "Create a social networking platform with real-time messaging and content sharing."
      },
      {
        title: "Task Management System",
        desc: "Develop a project management tool with team collaboration features."
      }
    ],
    mentors: [
      {
        name: "Amit Kumar",
        role: "Senior Full-Stack Developer",
        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/amit-kumar"
      },
      {
        name: "Neha Singh",
        role: "Frontend Specialist",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/neha-singh"
      }
    ],
    pricing: {
      cost: "₹59,999",
      duration: "12 weeks",
      batch: "August 2024",
      originalPrice: "₹69,999"
    },
    faq: [
      {
        question: "What programming experience do I need?",
        answer: "Basic programming knowledge is helpful but not required. We start from fundamentals."
      },
      {
        question: "Will I build a portfolio?",
        answer: "Absolutely! You'll complete 3-4 real projects that you can showcase to employers."
      },
      {
        question: "What technologies will I learn?",
        answer: "React, Node.js, MongoDB, PostgreSQL, Git, Docker, and modern development practices."
      },
      {
        question: "Is there job placement support?",
        answer: "Yes, we provide resume building, interview prep, and direct connections to hiring companies."
      }
    ],
    features: ["Real Projects", "Portfolio Building", "Industry Mentorship"],
    icon: "💻",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning Internship Program",
    subtitle: "Build a strong foundation in artificial intelligence",
    description: "Learn data analysis, machine learning algorithms, and AI fundamentals through hands-on projects. Master Python, ML frameworks, and real-world applications.",
    highlights: [
      "ML Projects",
      "Data Visualization",
      "Industry Tools",
      "Real Datasets",
      "AI Applications",
      "Statistical Analysis"
    ],
    curriculum: [
      {
        module: "Module 1: Python for AI/ML",
        lessons: [
          "Python Fundamentals",
          "NumPy & Pandas",
          "Data Manipulation",
          "Data Cleaning"
        ]
      },
      {
        module: "Module 2: Machine Learning Basics",
        lessons: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation",
          "Feature Engineering"
        ]
      },
      {
        module: "Module 3: Advanced ML",
        lessons: [
          "Deep Learning Basics",
          "Neural Networks",
          "Natural Language Processing",
          "Computer Vision"
        ]
      },
      {
        module: "Module 4: AI Applications",
        lessons: [
          "AI Model Deployment",
          "Real-world Applications",
          "Ethics in AI",
          "Future of AI"
        ]
      }
    ],
    tools: [
      { name: "Python", iconUrl: "/tools/python.svg" },
      { name: "Jupyter", iconUrl: "/tools/jupyter.svg" },
      { name: "Scikit-learn", iconUrl: "/tools/scikit.svg" },
      { name: "TensorFlow", iconUrl: "/tools/tensorflow.svg" },
      { name: "PyTorch", iconUrl: "/tools/pytorch.svg" },
      { name: "OpenCV", iconUrl: "/tools/opencv.svg" }
    ],
    projects: [
      {
        title: "Image Classification System",
        desc: "Build a deep learning model to classify images using convolutional neural networks."
      },
      {
        title: "Sentiment Analysis Model",
        desc: "Create an NLP system to analyze text sentiment using machine learning algorithms."
      },
      {
        title: "Recommendation System",
        desc: "Develop a recommendation engine using collaborative filtering techniques."
      }
    ],
    mentors: [
      {
        name: "Dr. Rajesh Verma",
        role: "AI/ML Lead",
        photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/rajesh-verma"
      },
      {
        name: "Anjali Desai",
        role: "ML Engineer",
        photoUrl: "/mentors/anjali.jpg",
        linkedin: "https://linkedin.com/in/anjali-desai"
      }
    ],
    pricing: {
      cost: "₹54,999",
      duration: "10 weeks",
      batch: "September 2024",
      originalPrice: "₹64,999"
    },
    faq: [
      {
        question: "Do I need a math background?",
        answer: "Basic math is helpful, but we cover all necessary statistical concepts during the program."
      },
      {
        question: "What datasets will I work with?",
        answer: "You'll work with real-world datasets from various industries including finance, healthcare, and e-commerce."
      },
      {
        question: "Will I learn deep learning?",
        answer: "Yes, we cover neural networks, computer vision, and natural language processing basics."
      },
      {
        question: "What career opportunities are available?",
        answer: "AI Engineer, ML Engineer, Data Scientist, Research Analyst, and AI Specialist roles."
      }
    ],
    features: ["ML Projects", "Data Visualization", "Industry Tools"],
    icon: "🤖",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    slug: "data-analyst",
    title: "Data Analyst Internship",
    subtitle: "Learn how to collect, clean, analyze, and visualize data",
    description: "Transform raw data into actionable insights for business decision-making. Master SQL, Excel, visualization tools, and statistical analysis.",
    highlights: [
      "BI Tools",
      "SQL Mastery",
      "Dashboard Creation",
      "Business Insights",
      "Excel Advanced",
      "Statistical Analysis"
    ],
    curriculum: [
      {
        module: "Module 1: Data Fundamentals",
        lessons: [
          "Data Types & Sources",
          "Data Quality Assessment",
          "Statistical Basics",
          "Excel Advanced Features"
        ]
      },
      {
        module: "Module 2: SQL & Databases",
        lessons: [
          "SQL Fundamentals",
          "Advanced Queries",
          "Database Design",
          "Data Extraction"
        ]
      },
      {
        module: "Module 3: Visualization & BI",
        lessons: [
          "Tableau Desktop",
          "Power BI",
          "Dashboard Design",
          "Storytelling with Data"
        ]
      },
      {
        module: "Module 4: Business Intelligence",
        lessons: [
          "KPI Development",
          "Business Metrics",
          "Report Automation",
          "Data-Driven Decisions"
        ]
      }
    ],
    tools: [
      { name: "Excel", iconUrl: "/tools/excel.svg" },
      { name: "SQL", iconUrl: "/tools/sql.svg" },
      { name: "Tableau", iconUrl: "/tools/tableau.svg" },
      { name: "Power BI", iconUrl: "/tools/powerbi.svg" },
      { name: "Python", iconUrl: "/tools/python.svg" },
      { name: "Google Analytics", iconUrl: "/tools/ga.svg" }
    ],
    projects: [
      {
        title: "Sales Performance Dashboard",
        desc: "Create comprehensive dashboards to track sales metrics and performance indicators."
      },
      {
        title: "Customer Behavior Analysis",
        desc: "Analyze customer data to identify patterns and improve business strategies."
      },
      {
        title: "Financial Reporting System",
        desc: "Build automated reporting systems for financial data analysis and insights."
      }
    ],
    mentors: [
      {
        name: "Suresh Kumar",
        role: "Business Intelligence Lead",
        photoUrl: "/mentors/suresh.jpg",
        linkedin: "https://linkedin.com/in/suresh-kumar"
      },
      {
        name: "Meera Iyer",
        role: "Data Analyst",
        photoUrl: "/mentors/meera.jpg",
        linkedin: "https://linkedin.com/in/meera-iyer"
      }
    ],
    pricing: {
      cost: "₹44,999",
      duration: "8 weeks",
      batch: "October 2024",
      originalPrice: "₹54,999"
    },
    faq: [
      {
        question: "Is this program suitable for beginners?",
        answer: "Yes, we start from the basics and gradually move to advanced concepts."
      },
      {
        question: "What tools will I learn?",
        answer: "Excel, SQL, Tableau, Power BI, Python for data analysis, and Google Analytics."
      },
      {
        question: "Will I get hands-on experience?",
        answer: "Absolutely! You'll work on real business datasets and create actual dashboards."
      },
      {
        question: "What career paths are available?",
        answer: "Business Analyst, Data Analyst, BI Developer, Financial Analyst, and Market Research roles."
      }
    ],
    features: ["BI Tools", "SQL Mastery", "Dashboard Creation"],
    icon: "📈",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    slug: "offensive-cybersecurity",
    title: "Offensive Cyber Security Internship",
    subtitle: "Dive deep into the world of ethical hacking",
    description: "Master penetration testing, vulnerability assessment, and security auditing techniques. Learn offensive security strategies and defensive countermeasures.",
    highlights: [
      "Live Projects",
      "Certification",
      "Expert Mentorship",
      "Real-world Scenarios",
      "Industry Tools",
      "Security Best Practices"
    ],
    curriculum: [
      {
        module: "Module 1: Offensive Security Basics",
        lessons: [
          "Penetration Testing Methodology",
          "Reconnaissance Techniques",
          "Vulnerability Assessment",
          "Exploitation Fundamentals"
        ]
      },
      {
        module: "Module 2: Network Penetration",
        lessons: [
          "Network Enumeration",
          "Service Exploitation",
          "Privilege Escalation",
          "Post-Exploitation"
        ]
      },
      {
        module: "Module 3: Web Application Security",
        lessons: [
          "Web App Reconnaissance",
          "OWASP Top 10 Exploitation",
          "API Security Testing",
          "Mobile App Security"
        ]
      },
      {
        module: "Module 4: Advanced Techniques",
        lessons: [
          "Social Engineering",
          "Physical Security Testing",
          "Red Team Operations",
          "Security Reporting"
        ]
      }
    ],
    tools: [
      { name: "Kali Linux", iconUrl: "/tools/kali.svg" },
      { name: "Metasploit", iconUrl: "/tools/metasploit.svg" },
      { name: "Burp Suite", iconUrl: "/tools/burp.svg" },
      { name: "Nmap", iconUrl: "/tools/nmap.svg" },
      { name: "Wireshark", iconUrl: "/tools/wireshark.svg" },
      { name: "Hashcat", iconUrl: "/tools/hashcat.svg" }
    ],
    projects: [
      {
        title: "Comprehensive Penetration Test",
        desc: "Conduct end-to-end penetration testing on a simulated corporate network."
      },
      {
        title: "Web Application Security Audit",
        desc: "Perform detailed security assessment of web applications and APIs."
      },
      {
        title: "Red Team Exercise",
        desc: "Participate in red team operations to test organizational security posture."
      }
    ],
    mentors: [
      {
        name: "Vikram Singh",
        role: "Senior Penetration Tester",
        photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/vikram-singh"
      },
      {
        name: "Anita Desai",
        role: "Security Researcher",
        photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/anita-desai"
      }
    ],
    pricing: {
      cost: "₹59,999",
      duration: "12 weeks",
      batch: "November 2024",
      originalPrice: "₹69,999"
    },
    faq: [
      {
        question: "Is this program legal and ethical?",
        answer: "Yes, we teach offensive security techniques for defensive purposes and authorized testing only."
      },
      {
        question: "What certifications will I receive?",
        answer: "You'll receive our industry-recognized certification and guidance for OSCP, CEH certifications."
      },
      {
        question: "Will I work with real tools?",
        answer: "Yes, you'll use industry-standard penetration testing tools in controlled environments."
      },
      {
        question: "What career opportunities are available?",
        answer: "Penetration Tester, Security Consultant, Red Team Operator, and Security Researcher roles."
      }
    ],
    features: ["Live Projects", "Certification", "Expert Mentorship"],
    icon: "🛡️",
    gradient: "from-red-600 to-red-800"
  },
  {
    slug: "data-science",
    title: "Data Science Internship",
    subtitle: "Master the fundamentals of data science",
    description: "Learn statistical analysis, machine learning, and data visualization through real-world projects. Master Python, R, and advanced analytics techniques.",
    highlights: [
      "ML Projects",
      "Data Visualization",
      "Industry Tools",
      "Real Datasets",
      "Statistical Analysis",
      "Predictive Modeling"
    ],
    curriculum: [
      {
        module: "Module 1: Data Science Fundamentals",
        lessons: [
          "Python for Data Science",
          "Statistical Analysis",
          "Data Manipulation",
          "Exploratory Data Analysis"
        ]
      },
      {
        module: "Module 2: Machine Learning",
        lessons: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation",
          "Feature Engineering"
        ]
      },
      {
        module: "Module 3: Advanced Analytics",
        lessons: [
          "Deep Learning Basics",
          "Natural Language Processing",
          "Time Series Analysis",
          "Big Data Processing"
        ]
      },
      {
        module: "Module 4: Data Science Applications",
        lessons: [
          "Business Intelligence",
          "Predictive Analytics",
          "Data Science Ethics",
          "Model Deployment"
        ]
      }
    ],
    tools: [
      { name: "Python", iconUrl: "/tools/python.svg" },
      { name: "R", iconUrl: "/tools/r.svg" },
      { name: "Jupyter", iconUrl: "/tools/jupyter.svg" },
      { name: "Scikit-learn", iconUrl: "/tools/scikit.svg" },
      { name: "TensorFlow", iconUrl: "/tools/tensorflow.svg" },
      { name: "Tableau", iconUrl: "/tools/tableau.svg" }
    ],
    projects: [
      {
        title: "Customer Segmentation Analysis",
        desc: "Use clustering algorithms to segment customers for targeted marketing campaigns."
      },
      {
        title: "Predictive Analytics Model",
        desc: "Build a machine learning model to predict customer churn or sales forecasting."
      },
      {
        title: "Sentiment Analysis System",
        desc: "Create an NLP system to analyze customer reviews and social media sentiment."
      }
    ],
    mentors: [
      {
        name: "Dr. Rajesh Verma",
        role: "Data Science Lead",
        photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/rajesh-verma"
      },
      {
        name: "Anjali Desai",
        role: "ML Engineer",
        photoUrl: "/mentors/anjali.jpg",
        linkedin: "https://linkedin.com/in/anjali-desai"
      }
    ],
    pricing: {
      cost: "₹54,999",
      duration: "10 weeks",
      batch: "September 2024",
      originalPrice: "₹64,999"
    },
    faq: [
      {
        question: "Do I need a math background?",
        answer: "Basic math is helpful, but we cover all necessary statistical concepts during the program."
      },
      {
        question: "What datasets will I work with?",
        answer: "You'll work with real-world datasets from various industries including finance, healthcare, and e-commerce."
      },
      {
        question: "Will I learn deep learning?",
        answer: "Yes, we cover neural networks, computer vision, and natural language processing basics."
      },
      {
        question: "What career opportunities are available?",
        answer: "Data Scientist, ML Engineer, Business Analyst, Data Analyst, and AI Specialist roles."
      }
    ],
    features: ["ML Projects", "Data Visualization", "Industry Tools"],
    icon: "📊",
    gradient: "from-green-500 to-teal-500"
  },
  {
    slug: "web-development",
    title: "Web Development Internship",
    subtitle: "Learn to build dynamic, responsive websites",
    description: "Master HTML, CSS, JavaScript, and modern frameworks to create professional web applications. Build a portfolio of real projects.",
    highlights: [
      "Real Projects",
      "Portfolio Building",
      "Modern Tech Stack",
      "Responsive Design",
      "UI/UX Principles",
      "Deployment Skills"
    ],
    curriculum: [
      {
        module: "Module 1: Web Fundamentals",
        lessons: [
          "HTML5 & Semantic Markup",
          "CSS3 & Flexbox/Grid",
          "JavaScript Basics",
          "Responsive Design"
        ]
      },
      {
        module: "Module 2: Advanced JavaScript",
        lessons: [
          "ES6+ Features",
          "DOM Manipulation",
          "Async Programming",
          "Modern JavaScript Patterns"
        ]
      },
      {
        module: "Module 3: Frontend Frameworks",
        lessons: [
          "React.js Fundamentals",
          "Component Architecture",
          "State Management",
          "Routing & Navigation"
        ]
      },
      {
        module: "Module 4: Backend Integration",
        lessons: [
          "API Integration",
          "Database Basics",
          "Authentication",
          "Deployment & Hosting"
        ]
      }
    ],
    tools: [
      { name: "HTML5", iconUrl: "/tools/html5.svg" },
      { name: "CSS3", iconUrl: "/tools/css3.svg" },
      { name: "JavaScript", iconUrl: "/tools/javascript.svg" },
      { name: "React", iconUrl: "/tools/react.svg" },
      { name: "Node.js", iconUrl: "/tools/nodejs.svg" },
      { name: "Git", iconUrl: "/tools/git.svg" }
    ],
    projects: [
      {
        title: "Personal Portfolio Website",
        desc: "Create a professional portfolio showcasing your skills and projects with modern design."
      },
      {
        title: "Blog Platform",
        desc: "Build a content management system with user authentication and admin panel."
      },
      {
        title: "E-commerce Website",
        desc: "Develop a responsive e-commerce site with product catalog and shopping cart."
      }
    ],
    mentors: [
      {
        name: "Amit Kumar",
        role: "Senior Web Developer",
        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/amit-kumar"
      },
      {
        name: "Neha Singh",
        role: "Frontend Developer",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        linkedin: "https://linkedin.com/in/neha-singh"
      }
    ],
    pricing: {
      cost: "₹44,999",
      duration: "8 weeks",
      batch: "October 2024",
      originalPrice: "₹54,999"
    },
    faq: [
      {
        question: "Do I need programming experience?",
        answer: "No, we start from the basics and gradually build up to advanced concepts."
      },
      {
        question: "What will I build?",
        answer: "You'll create 3-4 real projects including a portfolio, blog platform, and e-commerce site."
      },
      {
        question: "Will I learn modern frameworks?",
        answer: "Yes, you'll master React.js and modern web development practices."
      },
      {
        question: "What career opportunities are available?",
        answer: "Web Developer, Frontend Developer, UI Developer, and Full-Stack Developer roles."
      }
    ],
    features: ["Real Projects", "Portfolio Building", "Modern Tech Stack"],
    icon: "🌐",
    gradient: "from-orange-500 to-red-500"
  }
];

export default programsData; 
