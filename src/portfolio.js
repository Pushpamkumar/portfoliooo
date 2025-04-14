/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pushpam009",
  title: "Hi all, I'm Pushpam",
  subTitle: emoji(
    "A passionate Data Science enthusiast with a strong foundation in DevOps, and hands-on experience in building web applications using JavaScript, React.js, and Node.js. Skilled in data analysis, machine learning, and cloud technologies, constantly learning and exploring new tools to drive impactful solutions."

  ),
  resumeLink: "https://drive.google.com/uc?export=download&id=18QUCfXt13Tw-yWAYbdkrHvyWAaO8it6N",// Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Pushpamkumar",
  linkedin: "https://www.linkedin.com/in/pushpamkumar01/",
  gmail: "pushpamkumar669@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DATA SCIENCE STUDENT & FULL STACK DEVELOPER, EXPLORING THE WORLD OF DATA AND TECHNOLOGY",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"),
    emoji("⚡ Data Visualization using tools like Tableau and libraries such as Matplotlib and Seaborn"),
    emoji("⚡ Proficient in Excel for data analysis and visualization"),
    emoji("⚡ Data Manipulation and Analysis using Pandas"),
    emoji("⚡ Experience in DevOps practices and tools such as Docker, CI/CD pipelines"),
    emoji("⚡ Progressive Web Applications (PWA) in normal and SPA stacks"),
    emoji("⚡ Integration of third-party services such as AWS / Digital Ocean")
]
,

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "sass",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "tableau",
    fontAwesomeClassname: "fab fa-tableau"
  },
  {
    skillName: "excel",
    fontAwesomeClassname: "fas fa-table"
  },
  {
    skillName: "mongodb",
    fontAwesomeClassname: "fas fa-database"
  },

],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {schoolName: "Government Model Senior Sec. School",
      logo: require("./assets/images/ima.jpg"), // Keeping the same logo
      subHeader: "District Topper in 12th Grade",
      descBullets: [
        "Scored 95% in 10th Grade (2020)",
        "Achieved 98.2% in 12th Grade (2022), District Topper"
      ]
      
    },
    {
      schoolName: "Lovely Professional University",
logo: require("./assets/images/college.png"),
subHeader: "Bachelor of Science in Computer Science",
duration: "September 2022 - July 2026",
descBullets: [
  "Competitive Programmer with current CGPA of 9.01",
  "Secured GATE AIR 326 in 2025 as a CS major",
]

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    },{
      Stack: "Data Visualization",
      progressPercentage: "80%",
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "Leopride pvt. limited",
      companylogo: require("./assets/images/leo.jpg"),
      date: "Sept 2024- Jan 2025",
      desc: "Developed and optimized BERT-based language models, achieving 95% accuracy. Conducted stock market analysis using financial models and gained expertise in Google Data Studio, Power BI, SQL, and Excel for data visualization.",
      descBullets: [
        "Optimized BERT-based language models with 95% accuracy",
        "Conducted stock market analysis using financial models",]
      
    },
    {
      role: "Web Developer & Data Visualization Enthusiast",
      company: "Freelance / Personal Projects",
      companylogo: require("./assets/images/free.png"),
      date: "March 2023-Present",
      desc: "Gained extensive experience in developing interactive web applications using JavaScript, React, Node.js, and other modern technologies. Specialized in data visualization, working with tools like Tableau, Power BI, Excel, and libraries like Pandas to deliver actionable insights through visual representations of data. Created multiple projects showcasing skills in both web development and data analysis."
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/cv.jpg"),
      projectName: "Auto CV",
      projectDesc: "Developed an AI-powered CV generator that optimizes resumes for applicant tracking systems (ATS) by ensuring proper structure and formatting. The tool offers AI-driven recommendations to tailor CVs for different job applications, enhancing the chances of being noticed by employers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://autocv-smbg.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
      {
        image: require("./assets/images/car.png"),
        projectName: "Car Sales Analysis",
        projectDesc: "Developed a comprehensive analysis tool for car sales, utilizing data visualization techniques to understand trends, performance, and market demand across various parameters.",
        footerLink: [
          {
            name: "GitHub Repository",
            url: "https://github.com/Pushpamkumar/Car-sales-Analysis-tableau"  // Replace with your GitHub repo link
          }
        ]
    },
    {
      image: require("./assets/images/bu.jpg"),  // Replace with the image path for your Beauty Frontend project
      projectName: "Beauty Frontend Website",
      projectDesc: "Designed and developed a responsive and interactive frontend for a beauty and care website, showcasing products, offers, and categories in an aesthetically pleasing layout.",
      footerLink: [
          {
              name: "GitHub Repository",
              url: "https://github.com/Pushpamkumar/beauty-frontend.git"  // Replace with your actual GitHub repo link
          },
          {
              name: "Visit Website",
              url: "https://beautycaree.vercel.app/"  // Replace with the actual live URL if deployed
          }
      ]
  }
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certification which i done !",

  achievementsCards: [
    {
      title: "IBM Devops and Software Engineering",
      subtitle:
      "Earning the IBM DevOps and Software Engineering certificate from Coursera showcases your expertise in DevOps practices, CI/CD, cloud deployment, and software engineering. It strengthens your portfolio by validating hands-on skills in GitHub, Docker, Kubernetes, Python, and Agile methodologies, making you job-ready for DevOps roles. 🚀",
      image: require("./assets/images/cou.jpg"),
      imageAlt: "Coursera",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/11nQigavSh1Xv8KR4-Z-mgKd7U8eCbO0D/view?usp=sharing"
        },
      ]
    },
    {
      title: "Database Management and SQL",
      subtitle:
       "Through the DBMS and SQL certificate, I developed a strong foundation in database management, querying, and optimization. I learned to design and manipulate relational databases using SQL, execute complex queries, joins, and transactions, and ensure data integrity and security, enhancing my ability to work with large datasets efficiently. 📊🚀",
      image: require("./assets/images/board.jpg"),
      imageAlt: "Board Infinity",
      footerLink: [
        {
          name: "DBMS and SQL",
          url: "https://drive.google.com/file/d/1410WTIyMDJ6U315QmuD67q1WbLraxnj_/view?usp=sharing"
        }
      ]
    },

    {
      title: "Social Networks from NPTEL",
      subtitle: "Through the Social Networks certificate from NPTEL, I gained insights into network theory, graph algorithms, and influence propagation. I learned how to analyze real-world social structures, detect communities, and measure centrality, enabling me to apply data science techniques to social network analysis and recommendation systems. 🔗📊",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL",
      footerLink: [

        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1y5FDo1nHG9FVfHxdrhyibxd9OB2RmCfp/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.mediabistro.com/go-freelance/six-blogs-every-freelancer-should-be-reading/",
      title: "Top 6 Must-Read Blogs for Every Freelancer",
      description:
        " Discover essential blogs that offer tips, support, and inspiration to help freelancers thrive in their creative and independent careers"
    },
    {
      url: "https://www.techmagic.co/blog/why-we-use-react-js-in-the-development",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Podcast Section
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7678168391",
  email_address: "pushpamkumar669@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
