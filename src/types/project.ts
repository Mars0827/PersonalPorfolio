export interface Project{
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    featured: boolean;
}
