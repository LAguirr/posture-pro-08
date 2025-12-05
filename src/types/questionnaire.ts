export interface UserProfile {
  level: "beginner" | "intermediate" | "advanced";
  sports: string[];
  objectives: string[];
  injuryZones: string[];
  selectedMovement: string;
}

export interface Movement {
  id: string;
  name: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
  demoImage?: string;
  instructions: string[];
  breathingTips: string[];
  commonErrors: string[];
  safetyWarnings: Record<string, string>;
  musclesTargeted: string[];
}

export interface Equipment {
  id: string;
  name: string;
  description: string;
  relevantFor: string[];
  image: string;
  link: string;
  price: number;
  safetyBenefit: string;
}

export type QuestionnaireStep = 
  | "level" 
  | "sports" 
  | "objectives" 
  | "injuries" 
  | "movement";
