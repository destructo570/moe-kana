import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSelectedCharList = (kana_group_list: KanaGroup[]) => {
  let result: Kana[] = [];
  kana_group_list.forEach((group) => {
    Object.keys(group).forEach((key) => {
      result = [...result, ...group[key]];
    });
  });
  return result;
};

export const getRandomNumber = (max_num: number) => {
  return Math.floor(Math.random() * max_num);
};
