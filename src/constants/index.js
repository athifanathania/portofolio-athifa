
import canvalogo from "../assets/canvalogo.png";


export const HERO_CONTENT = `
Informatics graduate with hands-on experience in web development, information systems, and database management. Passionate about building reliable digital solutions that improve business processes.`;

export const sectionIds = [
  "home",
  "about",
  "projects",
  "experiences",
  "certificates",
  "contact",
];

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const SKILL = [
  { image: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg", alt: "CodeIgniter" },
  { image: "https://skillicons.dev/icons?i=laravel", alt: "Laravel" },
  { image: "https://skillicons.dev/icons?i=bootstrap", alt: "Bootstrap" },
  { image: "https://skillicons.dev/icons?i=html", alt: "HTML" },
  { image: "https://skillicons.dev/icons?i=css", alt: "CSS" },
  { image: "https://skillicons.dev/icons?i=javascript", alt: "JavaScript" },
  { image: "https://skillicons.dev/icons?i=php", alt: "PHP" },
  { image: "https://skillicons.dev/icons?i=java", alt: "Java" },
  { image: "https://skillicons.dev/icons?i=cpp", alt: "C++" },
  { image: "https://skillicons.dev/icons?i=mysql", alt: "MySQL" },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    alt: "SQL Server",
  },
];

export const TOOLS = [
  { image: "https://skillicons.dev/icons?i=vscode", alt: "Visual Studio Code" },
  { image: "https://skillicons.dev/icons?i=figma", alt: "Figma" },
  { image: "https://skillicons.dev/icons?i=git", alt: "Git" },
  { image: "https://skillicons.dev/icons?i=github", alt: "GitHub" },
  { image: canvalogo, alt: "Canva" },
  { image: "https://www.apachefriends.org/images/xampp-logo-ac950edf.svg", alt: "XAMPP" },
  { image: "https://img.icons8.com/?size=100&id=lOqoeP2Zy02f&format=png&color=000000", alt: "Google Colab" },
];


export const WORK_EXPERIENCES = [
  {
    year: "Aug 2025 - Jun 2026",
    role: "Full-Stack Developer Intern",
    company: "PT. Indomatsumoto Press & Dies Industries (Indomobil Group) - Bekasi",
    description: [
      "Developed and implemented five operational websites used by various company divisions to support internal business processes.",
      "Collaborated with users to conduct requirements analysis, feature design, development, testing, and system implementation.",
      "Developed frontend and backend features and integrated databases to support business operations.",
      "Performed maintenance on implemented applications, resolved bugs and errors reported by users, and developed additional features based on operational requirements."
    ],
    technologies: ["Laravel", "PHP", "JavaScript", "MySQL"],
    logo: "images/imat.jpg",
  },

  {
    year: "Sep 2024 - Jun 2025",
    role: "Database and Operating Systems Laboratory Assistant Coordinator",
    company: "Informatics Laboratory Assistant - Universitas Jenderal Soedirman",
    description: [
      "Coordinated 5–6 laboratory assistants and ensured laboratory activities ran smoothly.",
      "Taught 40 students per semester in Database and Operating Systems laboratory courses.",
      "Prepared assignments and examinations and evaluated students' practical work."
    ],
    technologies: ["SQL", "MySQL", "Linux", "Windows", "XAMPP"],
    logo: "images/laboratory.png",
  },

  {
    year: "Jul 2024 - Aug 2024",
    role: "IT Support & Web Developer Intern",
    company: "PT. Mandom Indonesia Tbk. - Jakarta",
    description: [
      "Configured, repaired, and maintained 40 hardware devices at the Head Office.",
      "Developed and enhanced eStore website features for employee-exclusive product purchases using CodeIgniter 3 (CI3).",
      "Supported company IT operations by completing various technical and administrative tasks."
    ],
    technologies: ["CodeIgniter 3", "PHP", "SQL Server", "Hardware Support"],
    logo: "images/mandom.png",
  },

  {
    year: "Sep 2023 - Jun 2024",
    role: "Database and Operating Systems Laboratory Assistant",
    company: "Informatics Laboratory Assistant - Universitas Jenderal Soedirman",
    description: [
      "Mentored 40 students in Database and Operating Systems laboratory courses.",
      "Provided guidance on SQL, database design, Linux terminal, process management, memory management, file systems, and networking.",
      "Assisted in preparing and grading laboratory assignments and examinations."
    ],
    technologies: ["SQL", "MySQL", "Linux", "Windows", "XAMPP"],
    logo: "images/laboratory.png",
  }
];

export const PROJECTS = [
  {
    title: "Document Management Control",
    image: "images/dmc.png",
    description:
      "A centralized document management system for storing and managing internal and external company documents. Provides easy document access for employees while giving administrators full control over document organization and permissions.",
    technologies: ["Laravel 10", "Filament", "JavaScript", "MySQL"],
    category: "Web Development",
    link: "https://github.com/athifanathania/dmc-web",
  },
  {
    title: "BOM Explorer & Best Supplier Recommendation",
    image: "images/bom.png",
    description:
      "A centralized platform for visualizing Parent-Child Bill of Materials (BOM), monitoring daily production processes, managing technical specifications, analyzing product weight, and selecting the most suitable supplier based on production requirements.",
    technologies: ["Laravel 10", "Filament", "JavaScript", "MySQL"],
    category: "Web Development",
    link: "https://github.com/athifanathania/bom-web-ta-final",
  },
  {
    title: "Customer Activity System",
    image: "images/cv.png",
    description:
      "An integrated customer visit management system that enables marketing teams to schedule customer visits, monitor sales activities, and generate real-time performance reports for more efficient customer relationship management.",
    technologies: ["Laravel 10", "Filament", "JavaScript", "MySQL"],
    category: "Web Development",
    link: "https://github.com/athifanathania/customer-visit",
  },
  {
    title: "Supplier Report",
    image: "images/SR.png",
    description:
      "A supplier claim management system for reporting NG (Not Good) parts. Features automated email notifications, claim tracking, replacement monitoring, and centralized reporting to accelerate supplier response times.",
    technologies: ["Laravel 10", "Filament", "JavaScript", "MySQL"],
    category: "Web Development",
    link: "https://github.com/athifanathania/ng_report_web",
  },
  {
    title: "HR Recruitment Test",
    image: "images/hr.png",
    description:
      "An online recruitment and psychological assessment platform designed to streamline employee selection. Currently supports Kraepelin Test administration with automated participant management and test execution.",
    technologies: ["Laravel 10", "Filament", "JavaScript", "MySQL"],
    category: "Web Development",
    link: "https://github.com/athifanathania/kraepelin-quiz",
  },
  {
    title: "Sign Wave: Sign Language Platform",
    image: "images/sign.png",
    description:
      "A web-based platform designed to support learning and communication using Indonesian Sign Language (BISINDO) through educational and interactive features.",
    technologies: ["HTML", "Bootstrap", "CSS", "PHP", "Laravel 10"],
    category: "Web Development",
    link: "https://github.com/athifanathania/sign-wave",
  }, 
  {
    title: "Spotify User Segmentation with Clustering",
    image: "images/spotify.png",
    description:
      "Analyzed Spotify user behavior using PCA, K-Means clustering (k=6), and association rule mining to uncover listening patterns and genre preferences across user segments.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "MLxtend"],
    category: "Data Science & Machine Learning",
    link: "https://colab.research.google.com/drive/1jHUQQCo8QIG2tNuKngCHeLzWEIboONDm?usp=sharing",
  },
  {
    title: "DiabetCare: Sistem Pakar Diagnosa Diabetes Melitus",
    image: "images/diabet.png",
    description:
      "DiabetCare is a web-based expert system that helps early diagnosis of Diabetes Mellitus using the Forward Chaining method to analyze symptoms and identify the possible type of diabetes.",
    technologies: ["Laravel", "Tailwind CSS", "Vue", "MySQL", "Forward Chaining"],
    category: "Web Development",
    link: "https://github.com/Muhammadlevi123/Sispak-Diabetes",
  },
  {
    title: "Gold Price Prediction with Linear Regression",
    image: "images/emas.png",
    description:
      "Built a machine learning model to predict gold prices using Yahoo Finance data. Applied KNN for direction classification and Linear Regression for price forecasting with engineered features like moving averages and volatility.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    category: "Data Science & Machine Learning",
    link: "https://colab.research.google.com/drive/1ixeT7wxCJ6TrN4aDrL4n-Ns_MBKs4OGc?usp=sharing",
  },
  {
    title: "eStore",
    image: "images/estore.png",
    description:
      "Developed an internal purchasing dashboard for PT Mandom Indonesia Tbk using CodeIgniter 3 and SQL Server, enabling efficient admin management of employee product orders.",
    technologies: ["CodeIgniter 3 (CI3)", "PHP", "SQL Server"],
    category: "Web Development",
    link: "https://drive.google.com/file/d/1MPcbPgaicT50xhGFUiesKpuuX0qO77mO/view?usp=drive_link",
  },
  {
    title: "CO2 Emissions Prediction using Multiple Linear Regression",
    image: "images/co2.png",
    description:
      "Built a regression model to predict CO₂ emissions based on vehicle features. Evaluated multiple feature combinations and found fuel consumption, engine size, and cylinder count as top predictors.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    category: "Data Science & Machine Learning",
    link: "https://colab.research.google.com/drive/18Yi2JX4CY559GFUv6Cio6pua0VctiFo8?usp=sharing",
  },
  {
    title: "HMIF Inventory: Website Peminjaman Barang HMIF",
    image: "images/hmif-inventory.png",
    description:
      "Developed a web-based system to facilitate borrowing of HMIF Unsoed’s inventory items.",
    technologies: ["HTML", "JavaScript", "CSS", "PHP", "MySQL"],
    category: "Web Development",
    link: "https://github.com/athifanathania/hmif_inventory",
  },
  {
    title: "Snow White",
    image: "images/snow.png",
    description:
      "A game application where Snow White eats a poisoned apple made by a witch and is rescued by a prince.",
    technologies: ["HTML", "JavaScript", "CSS", "PHP", "MySQL"],
    category: "Web Development",
    link: "https://github.com/athifanathania/snow_white",
  },  
  {
    title: "Sentiment Analysis of Indonesian Presidential Election Tweets",
    image: "images/sentiment.png",
    description:
      "Compared Naive Bayes with SMOTE and SVM with hyperparameter tuning to classify sentiments on 2024 Indonesian election tweets. Naive Bayes with SMOTE achieved the highest accuracy.",
    technologies: ["Python", "SMOTE", "SVM", "Grid Search"],
    category: "Data Science & Machine Learning",
    link: "https://drive.google.com/file/d/12RAPkYlF1HTiy5DBG_nSC-Aaoi2ojs2a/view?usp=drive_link",
  },
  {
    title: "MoonCycle: Women's Health Tracking App",
    image: "images/moon.png",
    description:
      "A mobile app designed to help users monitor menstrual cycles, receive nutrition recommendations based on cycle phases, and access relevant health information.",
    technologies: ["Ionic", "Vue", "TypeScript", "HTML", "CSS", "Firebase", "Figma"],
    category: "Mobile Development",
    link: "https://github.com/anindyadiva06/Pemrograman-Mobile_Moon-Cycle",
  },
  {
    title: "Himpunan Mahasiswa Informatika (HMIF): Kabinet Gamadhikari",
    image: "images/gama.png",
    description:
      "A web-based platform developed as a final project for Web Design course, designed to showcase the identity, organizational structure, and programs of HMIF UNSOED's Kabinet Gamadhikari.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    category: "Web Development",
    link: "https://github.com/anindyadiva06/HMIF-Project",
  },  
  
];

export const ORGANIZATION = [
  {
    year: "Mar 2025 - Dec 2025",
    role: "Student Resource Development Division Supervisor",
    company: "Organization Supervisory Board (DPO) HMIF - Universitas Jenderal Soedirman",
    description: [
      "Supervised the implementation of student development programs.",
      "Provided recommendations regarding member regeneration, soft skills development, and student character development."
    ],
    logo: "images/hmif.png",
  },
  {
    year: "Mar 2024 - Mar 2025",
    role: "Vice President",
    company: "Informatics Student Association (HMIF) - Universitas Jenderal Soedirman",
    description: [
      "Managed an organization consisting of 63 members across eight divisions and coordinated 18 work programs and 21 internal agendas.",
      "Designed organizational policies and established cross-divisional coordination, resulting in an 'Excellent' performance rating."
    ],
    logo: "images/hmif.png",
  },
  {
    year: "Mar 2024 - Mar 2025",
    role: "Health Research & Development Department Staff and Health Division Staff",
    company: "Generasi Baru Indonesia (GenBI) Purwokerto - Bank Indonesia",
    description: [
      "Managed the GenBI Talks About Health podcast and prepared health education materials.",
      "Contributed to health research, campaigns, and health programs for members and the community."
    ],
    logo: "images/genbi.png",
  },
  {
    year: "Mar 2023 - Mar 2024",
    role: "Student Resource Development Division Staff",
    company: "Informatics Student Association (HMIF) - Universitas Jenderal Soedirman",
    description: [
      "Organized Public Speaking training for HMIF members.",
      "Supported Informatics student development."
    ],
    logo: "images/hmif.png",
  }
];

export const COMMITTEE = [
  {
    year: "Nov 2024",
    role: "Chief Organizer",
    company: "16th Informatics Anniversary - Universitas Jenderal Soedirman",
    description: [
      "Led and coordinated 73 committee members from nine divisions.",
      "Ensured all event activities were carried out according to plan."
    ],
    logo: "images/diesnat.png",
  },
  {
    year: "Sep 2023 - Oct 2024",
    role: "Event Division Coordinator (2023) | Steering Committee (2024)",
    company: "Informatics Championship - Universitas Jenderal Soedirman",
    description: [
      "Participated in planning, coordinating, and evaluating the Informatics Championship.",
      "Coordinated 11 division members in 2023.",
      "Supervised 63 committee members and provided strategic direction in 2024."
    ],
    logo: "images/ic.png",
  },
  {
    year: "Aug 2023 - Sep 2023",
    role: "Event Division Staff",
    company: "HMIF Community Service - Universitas Jenderal Soedirman",
    description: [
      "Prepared event activities and served as Master of Ceremony (MC).",
      "Introduced basic Microsoft Office and computer hardware to elementary school students."
    ],
    logo: "images/hmif.png",
  },
];

export const CERTIFICATE = [
  {
    title: "Vice Chairman",
    company: "Himpunan Mahasiswa Informatika (HMIF) Universitas Jenderal Soedirman",
    year: "2024",
    image: "images/wakahim.png",
    category: "Organization",
  },
  {
    title: "Coordinator of Database Laboratory Assistants",
    company: "Informatics Laboratory Assistant",
    year: "2024",
    image: "images/db2.jpg",
    category: "Work",
  },
  {
    title: "IT Support & Web Developer Intern",
    company: "PT Mandom Indonesia Tbk - Head Office Jakarta Pusat",
    year: "2024",
    image: "images/pkl.png",
    category: "Work",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    company: "Dicoding Indonesia",
    year: "2025",
    image: "images/course-js.jpg",
    category: "Course",
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    company: "Dicoding Indonesia",
    year: "2025",
    image: "images/course-visualisasi.jpg",
    category: "Course",
  },
  {
    title: "Belajar Dasar Data Science",
    company: "Dicoding Indonesia",
    year: "2025",
    image: "images/course-data.jpg",
    category: "Course",
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    company: "Dicoding Indonesia",
    year: "2025",
    image: "images/course-sql.jpg",
    category: "Course",
  },
  {
    title: "Belajar Dasar Artificial Intelligence (AI)",
    company: "Dicoding Indonesia",
    year: "2025",
    image: "images/course-ai.jpg",
    category: "Course",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    company: "Dicoding Indonesia",
    year: "2025",
    image: "images/course-web.jpg",
    category: "Course",
  },
  {
    title: "Upgrading Pengurus HMIF Unsoed 2025",
    company: "HMIF Unsoed",
    year: "2025",
    image: "images/upgrading.png",
    category: "Committee",
  },
  {
    title: "Competence in Digital Marketing – Content Creator",
    company: "Indonesian Professional Certification Authority (BNSP)",
    year: "2025",
    image: "images/komp.jpg",
    category: "Course",
  },
  {
    title: "Staff of Health Research and Development Department",
    company: "Generasi Baru Indonesia (GenBI) Purwokerto",
    year: "2024",
    image: "images/ppk.png",
    category: "Organization",
  },
  {
    title: "Chief Executive of the 16th Informatics Anniversary",
    company: "HMIF Unsoed",
    year: "2024",
    image: "images/kpdisnat.jpg",
    category: "Committee",
  },
  {
    title: "Steering Committee of Informatics Championship",
    company: "HMIF Unsoed",
    year: "2024",
    image: "images/sc-ic.jpg",
    category: "Committee",
  },
  {
    title: "Leadership Camp",
    company: "GenBI Purwokerto",
    year: "2024",
    image: "images/lc.jpg",
    category: "Committee",
  },
  {
    title: "Techniques of Visual Capture and Editing for Social Media",
    company: "Yureka Edukasi Cipta (YEC)",
    year: "2024",
    image: "images/skill.jpg",
    category: "Course",
  },  
  {
    title: "Content Creator Training",
    company: "Creativemu Academy",
    year: "2024",
    image: "images/cc.jpg",
    category: "Course",
  },
  {
    title: "Operating Systems Laboratory Assistants",
    company: "Informatics Laboratory Assistant",
    year: "2024",
    image: "images/so1.jpg",
    category: "Work",
  },
  {
    title: "Participant – I/O Festival 2024 Competition",
    company: "BEM FTI Universitas Tarumanagara (UNTAR)",
    year: "2024",
    image: "images/io.jpg",
    category: "Achievement",
  },
  {
    title: "Chief Executive of Pemilihan Raya 2024",
    company: "HMIF Unsoed",
    year: "2024",
    image: "images/pemira.jpg",
    category: "Committee",
  },
  {
    title: "Database Laboratory Assistants",
    company: "Informatics Laboratory Assistant",
    year: "2023",
    image: "images/basdat.jpg",
    category: "Work",
  },
  {
    title: "Staff of Student Resource Development Division",
    company: "Himpunan Mahasiswa Informatika (HMIF) Universitas Jenderal Soedirman",
    year: "2023",
    image: "images/psdm.jpg",
    category: "Organization",
  },
  {
    title: "Staff of The Year",
    company: "Himpunan Mahasiswa Informatika (HMIF) Universitas Jenderal Soedirman",
    year: "2023",
    image: "images/soty.jpg",
    category: "Achievement",
  },
  {
    title: "Best Project – Web Programming Practicum",
    company: "Informatics Laboratory Assistant",
    year: "2023",
    image: "images/pemweb.jpg",
    category: "Achievement",
  },
  {
    title: "Event Division Coordinator of Informatics Championship",
    company: "HMIF Unsoed",
    year: "2023",
    image: "images/ic.jpg",
    category: "Committee",
  },
  {
    title: "Event Division of Lustrum",
    company: "HMIF Unsoed",
    year: "2023",
    image: "images/lustrum.jpg",
    category: "Committee",
  },
  {
    title: "Workshop Informatika",
    company: "HMIF Unsoed ",
    year: "2023",
    image: "images/worsop.jpg",
    category: "Course",
  },
  {
    title: "Disciplinary Commission of Maskrab Makrab",
    company: "HMIF Unsoed",
    year: "2023",
    image: "images/mm.jpg",
    category: "Committee",
  },
  {
    title: "Staff of The Month",
    company: "Himpunan Mahasiswa Informatika (HMIF) Universitas Jenderal Soedirman",
    year: "2023",
    image: "images/sotm.jpg",
    category: "Achievement",
  },
  {
    title: "Event Division Staff of Community Service Program",
    company: "HMIF Unsoed",
    year: "2023",
    image: "images/pengmas.jpg",
    category: "Committee",
  },
  {
    title: "Event Division Staff of Informatics Championship",
    company: "HMIF Unsoed",
    year: "2022",
    image: "images/ic1.JPG",
    category: "Committee",
  },
];
