/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Cãtãlin Ovidiu Alexandru",
  title: "Hello everyone, I'm Alex",
  subTitle: emoji(
    "A passionate Artificial Inteligence Developer 🧠 having experience with neural networks, computer vision, software development and more."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FpMTXfu4Q_k4YEHfopnW71Ip2avXl-0q/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CatalinOAlexandru",
  linkedin: "https://www.linkedin.com/in/c-alexandru",
  gmail: "catalin97alex@gmail.com",
  facebook: "https://www.facebook.com/co.alexandru",
  instagram: "https://www.instagram.com/icatalinalex",
  twitter: "https://twitter.com/icatalinalex",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Currently in process to finish my Master Degree and looking forward to apply all the skills I gained over the years!",
  skills: [
    emoji("⚡ Develop neural network models for a wide area of projects"),
    emoji("⚡ Create object oriented software from start to finish"),
    emoji("⚡ Passionate of video games development"),
    emoji("⚡ Ability to work in small or large teams"),
    emoji("⚡ Read, understand and apply scientific papers"),
    emoji("⚡ Integration of third party services such as Firebase or AWS into your software"),
    emoji("⚡ and more ...")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "far fa-file-code"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
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
      skillName: "FireBase",
      fontAwesomeClassname: "fas fa-fire-alt"
    },
    {
      skillName: "MatLab",
      fontAwesomeClassname: "fas fa-square-root-alt"
    },
    {
      skillName: "raspberry-pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University College London",
      logo: require("./assets/images/ucl2.png"),
      subHeader: "Master of Science in Computer Graphics, Vision and Imaging (Predicted First Class)",
      duration: "September 2020 - September 2021",
      desc: "Studied the following modules and currently working on the following thesis:",
      descBullets: [
        "Modules: Introduction to Machine Learning, Machine Learning for Visual Computing, Virtual Environments, Acquisition and Processing of 3D Geometry, Robot Vision and Navigation, Machine Vision, Information Processing in Medical Imaging, Computational Modelling for Biomedical Imaging",
        "Thesis: Impact of Foveated Super-Resolution on Histological Images"
      ]
    },
    {
      schoolName: "Queen Mary University of London",
      logo: require("./assets/images/qmul.jpg"),
      subHeader: "Bachelor of Science with Honours in Computer Science (First Class)",
      duration: "September 2017 - June 2020",
      desc: "First class student who worked as a teaching assistant for 2 year and has been the vice-president of the AI & Robotics Society. I studied the following modules and worked on the following dissertation:",
      descBullets: [
        "1st Year: Automata and Formal Languages; Computer Systems and Networks; Fundamentals of Web Technology; Information System Analysis; Logic and Discrete Structures; Object-Oriented Programming; Procedural Programming; Professional and Research Practice",
        "2nd Year: Algorithms and Data Structures; Database Systems; Graphical User Interfaces; Internet Protocols and Applications; Operating Systems; Probability and Matrices; Software Engineering",
        "3rd Year: Big Data Processing; Computability Complexity and Algorithms; Computer Graphics; Image Processing; Digital Media and Social Networks; Multi-Platform Game Development",
        "Dissertation: Monocular depth estimation and uses in UAVs"
        ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technology Internship Experience 2021",
      company: "Bright Network",
      companylogo: require("./assets/images/brightnetwork.jpg"),
      date: "June 2021 – June 2021",
      desc: "Virtual Internship. To be finalised."
    },
    {
      role: "Data Analytics Consulting Virtual Internship",
      company: "KPMG",
      companylogo: require("./assets/images/kpmg.jpg"),
      date: "August 2020 – August 2020",
      desc: "Learnt about how to check if the data is stored correctly before it is used to do any data analysis. I also had to discuss what approaches a company can do in order to prevent wrong data in their datasets. I analysed the useful data in order to find which customers are the best to be targeted in order to bring more sales."
    },
    {
      role: "Vice President",
      company: "QMUL Artificial Intelligence and Robotics Society",
      companylogo: require("./assets/images/qmairs.png"),
      date: "September 2019 – August 2020",
      desc: "Helping and leading students in understanding robots and how to build them. We, as a society, recreate Robot Wars, and we aim to take part in a national competition like PiWars. In addition, we were discussing and implementing different algorithms for the robots."
    },
    {
      role: "Technology Internship Experience 2020",
      company: "Bright Network",
      companylogo: require("./assets/images/brightnetwork.jpg"),
      date: "June 2020 – June 2020",
      desc: "Virtual Internship, where I had the opportunity to learn about technology from big leading companies such as Google, Amazon, Accenture, Bloomberg, Goldman Sachs, Lloyds Bank, Vodafone, gsk, pwc, and more. After learning how a project is organized in these companies, we worked on a work sample specifying the stages and software proposal for a facial recognition feature in bank applications."
    },
    {
      role: "Teaching Assistant",
      company: "Queen Mary University of London",
      companylogo: require("./assets/images/qmul.jpg"),
      date: "September 2018 – June 2020",
      desc: "Helping students in Computer Systems & Networks, Procedural Programming and Professional Research to break down problems (transistors, OSI Model, MIPS Assembly Language, programming basic, research) related to their courses and fix them by listening, re-explaining & teaching them what is wrong and why."
    },
    {
      role: "Technology Intern",
      company: "AdamaRobotics",
      companylogo: require("./assets/images/adamarobotics.png"),
      date: "June 2019 – September 2019",
      desc: "Part of the technical team for a start-up project. Working & Learning in different domains around the company: Unity Game Development, Graphic Design, Search Engine Optimization, Website Development and Business."
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
  title: "Volunteering",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/qmul.jpg"),
      projectName: "Peer Assisted Study Support",
      projectDesc: "PASS is a course-based mentoring scheme, run for students by students. My task was to collaborate with a small group of people to provide face-to-face support for 1st-year students who require help in any module we have experience.",
      projectDate: "Oct 2018 - Apr 2020",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.qmul.ac.uk/outreach/our-activities/pass/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nvidia.png"),
      projectName: "GeForce Now Tester",
      projectDesc: "Testing one of their new unreleased software (at that time), sharing feedback with the developers and giving my opinion about potential features.",
      projectDate: "Aug 2018 - Feb 2020",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.nvidia.com/en-gb/geforce-now/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ubisoft.png"),
      projectName: "Game Tester",
      projectDesc: "Following the past closed testing in June, Ubisoft invited us again to test one of the games still in development (NDA), and provide update feedback. The game received a high number of improvements and it was great to see some of the community recommendations being implemented.",
      projectDate: "September 2019",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/google.png"),
      projectName: "Google Maps Mobile App Tester",
      projectDesc: "Being part of Google's Local Guide programme, I was offered the opportunity to test and share my feedback on a new unreleased AR feature used for guided walking in Google Maps.",
      projectDate: "March 2019",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://maps.google.com/localguides/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ubisoft.png"),
      projectName: "Game Tester",
      projectDesc: "Part of the online technical test team which tested the mechanics and features of one of the Ubisoft's unreleased games (NDA). We provided valuable feedback to the developers which were part of the community and discussed the most voted changes requested by the testers.",
      projectDate: "June 2019",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
        {
          name: "Google Code-in Blog",
          url: ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "h",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "catalin97alex@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "icatalinalex", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
