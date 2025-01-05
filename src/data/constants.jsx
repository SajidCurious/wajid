import starFlix from "/coll1.jpg";
import shoeStore from "/coll2.jpg";
import starTube from "/coll3.jpg";
import isl from "/isl.jpeg";
import ssgpt from "/ssgpt.jpeg";
import tmreis from "/tmreis.jpeg";

export const Bio = {
  name: "Mohammed Wajid",
  roles: ["Content Writer", "Social Media Manager"],
  description:
    "Experienced professional with expertise in content writing and social media management with 56K followers on LinkedIn. My specialization includes creating and managing engaging content, building online communities, collaborating with various companies to enhance brand visibility. Skilled in creating content for brands and organizations with handling administrative tasks such as scheduling , customer support and research. Freelancing for the past two years, bringing a strong work ethic, adaptability and the ability to efficiently manage multiple responsibilities.",
  github: "https://www.linkedin.com/in/mohammed-wajid-69639a254/",
  resume:
    "https://drive.google.com/file/d/1HeP3lah1qzOJKOpYTqx0AWEdaX-YLxPo/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/mohammed-wajid-69639a254/",
  // twitter: "https://twitter.com/sajid_curious",
  gmail: "mailto:wajid17023@gmail.com?subject=Hello&body=Hi, I would like to connect with you."
};

export const skills = [
  {
    title: "Content Writing",
    skills: [
      {
        name: "Writing"
      },
      {
        name: "Editing"
      },
      {
        name: "Research"
      },
      {
        name: "Analytical Skills"      },
      {
        name: "SEO"
      },
      {
        name: "Storytelling"
      },
      {
        name: "Communication"
      },
      {
        name: "Collaboration"
      },
      {
        name: "Time Management"
      },
      {
        name: "Organization"
      },
      {
        name: "Basic HTML"
      },
      {
        name: "Communication"
      },
    ],
  },

  {
    title: "Social Media Management",
    skills: [
      {
        name: "Platform Expertise"
      },

      {
        name: "Social Media Strategy"
      },
      {
        name: "Performance Tracking"
      },
      {
        name: "Community Management"
      },
      {
        name: "Trend awareness"
      },

      {
        name: "Crisis Management"
      },
      {
        name: "Creativity"
      },
      {
        name: "Adaptability"
      },

      {
        name: "Analytical thinking"
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: `${isl}`,
    school: "ISL Engineering College, Hyderabad",
    date: "Oct 2020 - Sep 2023",
    grade: "8.0 CGPA",
    desc: "I completed my Bachelor's degree in Information Technology at ISL Engineering College, Hyderabad. I have completed 6 semesters and got a CGPA of 8.0 . I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree:
      "Bachelor of Technology - BTech, Information Technology and Computers",
  },
  {
    id: 1,
    img: `${ssgpt}`,
    school: "Sri Sangameshwara Polytechnic, Zaheerabad",
    date: "Apr 2017 - Aug 2020",
    grade: "85%",
    desc: "I completed my class 13 high school education at SSGPT, Zaheerabad, where I studied Computer Science.",
    degree: "ISC(XIII), Mechanical Engineering",
  },
  {
    id: 2,
    img: `${tmreis}`,
    school: "Telangana Residential School, Hyderabad",
    date: "2013 - 2017",
    grade: "97%",
    desc: "I completed my class X education at Telangana Residential School, Hyderabad, where I studied Science with Computer Application.",
    degree: "SSC(X), Science with Computer",
  },
];

export const projects = [
  {
    id: 0,
    // title: "StarFlix",
    // description:
    //   "StarFlix is an Entertainment Information platform for TV Shows and Movies. Users can check Trending, Popular, Top-Rated, Movies and TV Shows. On clicking on any movie user can see all the information like cast, runtime, overview, director etc. User can also watch trailer of the specific movie and the platform recommends the same genre movies.",
    image: `${starFlix}`,
    // tags: ["React Js", "Redux", "SCSS", "Tailwind CSS"],
    // github: "https://github.com/SajidCurious/starflix",
    // webapp: "https://starflix9.vercel.app/",
  },
  {
    id: 1,
    // title: "SHOOZIE",
    // description:
    //   "Shoozie is an online shoe shopping platform. Users can choose wide variety of shoes and can buy them. Every detail of the shoes are available. I also integrated sample stripe payment method.",
    image: `${shoeStore}`,
    // tags: ["Next Js", "Redux", "Tailwind CSS", "Strapi"],
    // github: "https://github.com/SajidCurious/shoe-store",
    // webapp: "https://shoozie.vercel.app/",
  },
  {
    id: 2,
    // title: "StarTube",
    // description:
    //   "StarTube is the Media platform, where users can watch different types of videos according to their interests. Users have different options to watch videos like Trending, Music, Films, Gaming, News, Sports, Live.",
    image: `${starTube}`,
    // tags: ["React Js", "Redux", "Tailwind CSS", "Vite"],
    // github: "https://github.com/SajidCurious/startube",
    // webapp: "https://startube9.vercel.app/",
  }
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
