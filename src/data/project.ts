 // import { Project } from '../types/project';
import type { Project } from '../types/project';
import Bitwise from '../assets/images/bitwise.png';
import Undercook from '../assets/images/undercook.png';
const projects: Project[] = [
  {
    id: '1',
    title: 'Bitwise',
    description: 'A collaborative learning platform for students and professionals built with full-stack technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'C#'],
    imageUrl: Bitwise,
    githubUrl: '#',
    featured: true,
  },
{
    id: '2',
    title: 'Undercook',
    description: 'A 2D single-player cooking game inspired by Overcooked, featuring time-based challenges and kitchen management.',
    technologies: ['Java', 'LibGDX', 'PHPMyAdmin', 'MySQL'],
    imageUrl: Undercook,
    githubUrl: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Serviso',
    description: 'A full-stack service booking platform that connects clients with local workers for on-demand physical services.',
    technologies: ['React', 'API'],
    imageUrl: '/images/weather.png',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '4',
    title: 'Collabora',
    description: 'A 2D dungeon exploration game featuring enemies, loot, and procedurally generated levels.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    imageUrl: '/images/blog.png',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '4',
    title: 'Collabora',
    description: 'A blogging platform where users can create, edit, and delete posts.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    imageUrl: '/images/blog.png',
    githubUrl: '#',
    featured: false,
  },
];
export { projects };