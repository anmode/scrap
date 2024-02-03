export interface Intern {
  username: string;
  name: string;
  position: string;
  hobby: string;
  about: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  website?: string;
  twitter?: string;
}

export type InternData = Intern[];
