export interface IProject {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  repoLinkClient: string;
  repoLinkServer: string;
  liveLink?: string; // Optional field
}