
export interface Project {
  category: string;
  title: string;
  description: string;
  roi: number;
  userFriendliness?: number;
  coreTech: string;
  problemSolution: string;
  measurableValue: string;
  techDifficulty: number;
  isExtra?: boolean;
}

export interface CaseStudy {
  date: string;
  company: string;
  logoUrl: string;
  title: string;
  description: string;
}
