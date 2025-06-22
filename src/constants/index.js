
import canvalogo from "../assets/canvalogo.png";


export const HERO_CONTENT = `
Turning complexity into clarity — delivering seamless web development with solid back-end logic and optimized data systems.`;

export const sectionIds = [
  "home",
  "about",
  "experiences",
  "projects",
  "certificates",
  "contact",
];

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const SKILL = [
  { image: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg", alt: "CodeIgniter" },
  { image: "https://skillicons.dev/icons?i=laravel", alt: "Laravel" },
  { image: "https://skillicons.dev/icons?i=flutter", alt: "Flutter" },
  { image: "https://skillicons.dev/icons?i=bootstrap", alt: "Bootstrap" },
  { image: "https://skillicons.dev/icons?i=html", alt: "HTML" },
  { image: "https://skillicons.dev/icons?i=css", alt: "CSS" },
  { image: "https://skillicons.dev/icons?i=javascript", alt: "JavaScript" },
  { image: "https://skillicons.dev/icons?i=php", alt: "PHP" },
  { image: "https://skillicons.dev/icons?i=dart", alt: "Dart" },
  { image: "https://skillicons.dev/icons?i=cpp", alt: "C++" },
  { image: "https://skillicons.dev/icons?i=mysql", alt: "MySQL" },
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
    year: "Feb 2025 - June 2025",
    role: "Coordinator of Operating Systems Laboratory Assistants",
    company: "Informatics Laboratory Assistant",
    description: [
      "Coordinated and guided 6 lab assistants in executing practical sessions effectively.",
      "Taught and mentored 40 students (across two shifts) in Operating Systems using Windows and Linux, including troubleshooting terminal, command prompt, process, memory, file system, and networking topics.",
      "Prepared exam questions and assignments, and evaluated student performance to assess their understanding and skills."
    ],
    technologies: ["Linux", "Windows"],
    logo: "images/laboratory.png",
  },
  {
    year: "Sep 2024 - Dec 2024",
    role: "Coordinator of Database Laboratory Assistants",
    company: "Informatics Laboratory Assistant",
    description: [
      "Coordinated and directed 5 lab assistants in conducting practical sessions.",
      "Taught and mentored 40 students (across two shifts) on Database topics using XAMPP and Command Prompt, including database design, SQL queries, and database optimization.",
      "Prepared exam questions and assignments, and assessed student performance to measure their understanding and skills."
    ],
    technologies: ["XAMPP", "SQL", "Command Prompt"],
    logo: "images/laboratory.png",
  },  
  {
    year: "Jul 2024 - Aug 2024",
    role: "IT Support & Web Developer Intern",
    company: "PT. Mandom Indonesia Tbk. - Jakarta",
    description: [
      "Configured, repaired, and maintained 40 hardware devices at the Head Office.",
      "Developed and enhanced features of the eStore website for employee-exclusive product purchases using CodeIgniter 3 (CI3).",
      "Supported the company's IT operations by handling various technical and administrative tasks."
    ],
    technologies: ["CodeIgniter 3", "PHP", "Networking", "Hardware Support"],
    logo: "images/mandom.png",
  },  
  {
    year: "Feb 2024 - June 2024",
    role: "Operating Systems Laboratory Assistant",
    company: "Informatics Laboratory Assistant",
    description: [
      "Taught and mentored 40 students (across two shifts) in Operating Systems using Windows and Linux.",
      "Provided instruction and troubleshooting on topics including terminal, command prompt, process, memory, file system, and networking.",
      "Prepared exam questions and assignments, and evaluated student performance to measure their understanding and skills."
    ],
    technologies: ["Linux", "Windows"],
    logo: "images/laboratory.png",
  },  
  {
    year: "Sep 2023 - Dec 2023",
    role: "Database Laboratory Assistant",
    company: "Informatics Laboratory Assistant",
    description: [
      "Taught and mentored 40 students (across two shifts) in database laboratory sessions using XAMPP and Command Prompt.",
      "Provided instruction and troubleshooting on database design, SQL queries, and database optimization.",
      "Prepared exam questions and assignments, and evaluated student performance to measure their understanding and skills."
    ],
    technologies: ["XAMPP", "SQL", "Command Prompt"],
    logo: "images/laboratory.png",
  }    
];
export const ORGANIZATION = [
  {
    year: "Mar 2025 - Present",
    role: "Student Resource Development Division Supervisor",
    company: "Dewan Pengawas Organisasi (DPO) HMIF Unsoed",
    description: [
      "Supervised the successful implementation of 6 planned agendas and work programs, ensuring alignment with the division's vision in student resource development.",
      "Provided insights and recommendations on student regeneration, soft skill development, and character building to enhance Informatics students' preparedness for organizational roles and the professional world.",
      "Monitored the execution of activities focusing on improving academic quality, soft skills, and competitiveness of Informatics students."
    ],
    logo: "images/hmif.png",
  },  
  {
    year: "Mar 2024 - Mar 2025",
    role: "Vice Chairman",
    company: "Himpunan Mahasiswa Informatika (HMIF) Unsoed",
    description: [
      "Managed internal organization and supervised 63 board members across 8 divisions.",
      "Planned and executed 18 work programs and 21 internal agendas, achieving a 'Very Good' rating during the organizational period.",
      "Formulated organizational policies and established effective coordination and communication to strengthen relationships among board members."
    ],
    logo: "images/hmif.png",
  },  
  {
    year: "Mar 2024 - Mar 2025",
    role: "Staff of Health Research and Development Department",
    company: "Generasi Baru Indonesia (GENBI) Purwokerto",
    description: [
      "Responsible for the 'GenBI Talks About Health' podcast by designing concepts, preparing materials, and coordinating speakers for health education.",
      "Conducted research and developed health-related materials to raise public awareness.",
      "Contributed to departmental activities, including health campaigns and sports events for GenBI members."
    ],
    logo: "images/genbi.png",
  },  
  {
    year: "Mar 2023 - Mar 2024",
    role: "Staff of Student Resource Development Division",
    company: "Himpunan Mahasiswa Informatika (HMIF) Unsoed",
    description: [
      "Organized a Public Speaking training program targeting 56 HMIF board members, successfully attended by 53 members.",
      "Oversaw and developed the human resources of HMIF board members and Informatics students."
    ],
    logo: "images/hmif.png",
  }  
];
export const COMMITTEE = [
  {
    year: "Oct 2024 - Nov 2024",
    role: "Chief Executive of the 16th Informatics Anniversary",
    company: "HMIF Unsoed 2024",
    description: [
      "Led and coordinated 73 committee members across 9 divisions, ensuring each division fulfilled its respective duties effectively.",
      "Designed the event concept consisting of 2 main events and ensured the entire series of events ran as planned.",
      "Directed the team, established effective communication, and ensured optimal collaboration among all committee members."
    ],
    logo: "images/diesnat.png",
  }, 
  {
    year: "Sep 2024 - Oct 2024",
    role: "Steering Committee of Informatics Championship",
    company: "HMIF Unsoed 2024",
    description: [
      "Provided guidance in the planning and execution of work programs, ensuring activities aligned with the vision and objectives.",
      "Supervised and evaluated the performance of 63 committee members, ensuring each division carried out its duties effectively.",
      "Made crucial decisions in resolving issues and provided strategic solutions to ensure the smooth execution of the event."
    ],
    logo: "images/ic.png",
  },
  {
    year: "Sep 2023 - Oct 2023",
    role: "Event Division Coordinator of Informatics Championship",
    company: "HMIF Unsoed 2023",
    description: [
      "Designed the event series by defining the event concept, creating the rundown, and assigning tasks for each division.",
      "Coordinated and supervised 11 division members in organizing competitions for 12 sports and art branches."
    ],
    logo: "images/ic1.png",
  },
  {
    year: "Aug 2023 - Sep 2023",
    role: "Event Division Staff of Community Service Program",
    company: "HMIF Unsoed 2023",
    description: [
      "Designed the event series by defining the event concept and creating the rundown.",
      "Served as the Master of Ceremony, leading the event activities with 20+ elementary school students.",
      "Provided basic teaching to students on Microsoft Office and computer hardware."
    ],
    logo: "images/hmif.png",
  },  
];

export const PROJECTS = [
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
    title: "Sign Wave: Sign Language Platform",
    image: "images/sign.png",
    description:
      "A web-based platform designed to support learning and communication using Indonesian Sign Language (BISINDO) through educational and interactive features.",
    technologies: ["HTML", "Bootstrap", "CSS", "PHP", "Laravel 10"],
    category: "Web Development",
    link: "https://github.com/athifanathania/sign-wave",
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
  {
    title: "Sistem Palang Otomatis",
    image: "images/palang.png",
    description:
      "This project develops a NodeMCU-based automatic gate prototype using infrared and ultrasonic sensors, controlled via a local web server with real-time activity logs for secure and efficient campus access.",
    technologies: ["Embedded Systems", "C++", "HTML"],
    category: "Embedded System",
    link: "https://github.com/nabillatsani/ProjekPST",
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
    title: "Belajar Dasar Artificial Intelligence (AI)",
    company: "Dicoding Indonesia",
    year: "2025",
    image: "images/course-ai.jpg",
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
    category: "Achievement",
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
