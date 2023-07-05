import { TatakuMode } from "@/lib/constants";
import { KanaGroup } from "./KanaGroup.interface";

export interface GameSettings {
  selected_options: KanaGroup[];
  selected_mode: TatakuMode;
}
