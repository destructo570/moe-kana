import { GameSettings } from "./GameSettings.interface";

export interface GameSession {
  right_answer_count: number;
  total_answer_count: number;
  settings: GameSettings;
}
