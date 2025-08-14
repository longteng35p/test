// Types for the Todo List App

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  startTime?: string;
  endTime?: string;
  isRecurring: boolean;
  isFlexible: boolean;
  notes?: string;
}

export interface User {
  name: string;
  avatar: string;
  rank: number;
  coins: number;
  chips: number;
}

export interface Friend {
  id: string;
  name: string;
  rank: number;
  avatar: string;
}

export interface GameStats {
  coins: number;
  chips: number;
  cardEffects: string[];
  availablePacks: string[];
}

export type ViewType = 'today' | 'calendar';

export interface NewTaskForm {
  title: string;
  startTime: string;
  endTime: string;
  isRecurring: boolean;
  isFlexible: boolean;
  notes: string;
}
