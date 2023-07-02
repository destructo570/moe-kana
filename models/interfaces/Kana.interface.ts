import { KanaType } from "@/lib/constants";

export interface Kana {
  char: string;
  char_jp: string;
  type?: KanaType;
}
