export type Atom = {
    id: string;
    title: string;
    description: string;
}

export interface AtomCardProps {
    atom: Atom;
}
