 // import { Project } from '../types/project';
import type { Project } from '../types/project';
const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/images/portfolio.png',
    githubUrl: '#',
    featured: true,
  },
{
    id: '2',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with user authentication and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/ecommerce.png',
    githubUrl: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather App',
    description: 'A weather application that provides real-time weather updates using a public API.',
    technologies: ['React', 'API'],
    imageUrl: '/images/weather.png',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '4',
    title: 'Blog Platform',
    description: 'A blogging platform where users can create, edit, and delete posts.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    imageUrl: '/images/blog.png',
    githubUrl: '#',
    featured: false,
  },
];
export { projects };