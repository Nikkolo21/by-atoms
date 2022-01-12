export type Project = {
    id: string;
    title: string;
    description: string;
}

export interface ProjectCardProps {
    project: Project;
}
