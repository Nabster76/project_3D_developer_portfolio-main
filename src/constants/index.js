import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Brickweb",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Développer et maintenir des applications Web à l'aide de React.js et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles comprenant des concepteurs, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Goji Labs",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Développer et maintenir des applications Web à l'aide de React.js et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles comprenant des concepteurs, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Creative4u",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Développer et maintenir des applications Web à l'aide de React.js et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles comprenant des concepteurs, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Plate-forme Web qui permet aux utilisateurs de rechercher, de réserver et de gérer les locations de voitures auprès de divers fournisseurs, offrant une solution pratique et efficace pour les besoins de transport.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://gitlab.com/n.laaziri",
  },
  {
    name: "Job IT",
    description:
      "Application Web qui permet aux utilisateurs de rechercher des offres d'emploi, d'afficher les échelles de salaire estimées pour les postes et de localiser les emplois disponibles en fonction de leur emplacement actuel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://gitlab.com/n.laaziri",
  },
  {
    name: "Trip Guide",
    description:
      "Une plate-forme complète de réservation de voyages qui permet aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et propose des recommandations organisées pour les destinations populaires.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://gitlab.com/n.laaziri",
  },
];

export { services, technologies, experiences, testimonials, projects };
