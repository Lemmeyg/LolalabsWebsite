import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gordon",
  lastName: "Lemmey",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Powered Product Manager",
  avatar: "/images/avatar.jpg",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about my thoughts, learning and observations on AI and Product Management.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Lemmeyg",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/gordonlemmey/",
  },

  {
    name: "Email",
    icon: "email",
    link: "GordonLemmey@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Product Manager and AI Explorer</>,
  subline: (
    <>
      I'm Gordon and I am using, and building, AI-powered solutions to learn more about the power of AI. I am a Product Manager for a Large eCommerce/Saas Solutions and on my own time I explore AI with a passion.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Gordon is a Product Manager with extensive experience in Product development and market optimization, primarily in the automotive industry. Based on the East Coast, he specializes in identifying and defining complex business problems and scoping SaaS solutions. With a passion for exploring the application of AI, he is currently utilizing and building with AI in both his professional role and on his own time.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Independent AI Development (Indy-Hacker)",
        timeframe: "2022 - Present",
        role: "",
        achievements: [
          <>
            Developed a suite of AI-powered productivity tools using Large Language Models (LLMs) including OpenAI, Claude, Cursor and Vercel/V0.
          </>,
          <>
            Created specialized AI agents and chatbots for professional workflows, focusing on customer service, market research and data cleansing.
          </>,
          <>
            Engineered custom AI solutions for business intelligence and market analysis, demonstrating practical applications of emerging AI technologies.

        </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Senior Product Manager",
        timeframe: "2021 - Present",
        role: "",
        achievements: [
          <>
            Led strategic development of premium SaaS products, managing solutions that process over $150 billion in pricing inquiries and facilitate $7 billion in transaction volume annually.
          </>,
          <>
            Responsible for engineering and maintaining SaaS integrations, delivering over $300M in transactions annualy
            </>,
          <>
            Responsible for Roadmap and product discovery strategies across B2B eCommerce solutions.
          </>,
          <>
            Spearheaded Voice of Customer research initiatives that shaped product development, realizing multi-million opportunities in new sectors.
          </>,
          <>
            Leveraged machine learning models to identify market inefficiencies, resulting in improved margin performance across the platform.
        </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Key Account Manager",
        timeframe: "2017 - 2021",
        role: "",
        achievements: [
          <>
            Pioneered Ai-powered dynamic pricing strategy for a $400M product portfolio, successfully implementing cloud-based SaaS solutions across national retail networks
          </>,
          <>
            Increased market share by 20% through e-commerce implementations, generating over $100M in revenue.
          </>,
          <>
            Negotiated multi-million dollar contracts with Fortune 500 companies and international manufacturers, establishing key partnerships that drove business growth.
           </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technology",
    skills: [
      {
        title: "Cursor",
        description: <>Experienced with AI-coding Agents to create production standard applications</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Open Source LLMs",
        description: <>Utilizing Open source LLMs such as OpenAI, Claude, Perplexity  threough APIs to offer low cost integrations into for applications</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Make.com",
        description: <>Builds with this Low-Code solution, connecting everyday applications such as Gmail, office and websites for fast, low cost application building</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        
        ],
      },
      {
        title: "RapidAPI",
        description: <>Leverages information "marketplace" to access a diverse range of API enabling utilization within apps.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Resources and Blog",
  title: "What has caught my attention recently...",
  description: `What has ${person.name} has been consuming recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
