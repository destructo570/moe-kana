import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Characters,
  HIRAGANA,
  HIRAGANA_COMBINATIONS,
  KATAKANA,
} from "./constants";

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

// export function getRandomNumber(limit: number): number;
export function getRandomNumber(
  limit: number,
  count?: number,
  except_num?: number
) {
  if (count && count > 1 && except_num) {
    let result: number[] = [];
    while (result?.length !== count - 1) {
      let num = Math.floor(Math.random() * limit);
      if (!result.includes(num) && num !== except_num) {
        result.push(num);
      }
    }
    result.push(except_num);
    shuffleArray(result);
    return result;
  } else {
    return Math.floor(Math.random() * limit);
  }
}

function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate random number
    let j = Math.floor(Math.random() * (i + 1));

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function getSelectedOptions(options: number[]) {
  let result: KanaGroup[] = [];
  options.forEach((item) => {
    switch (item) {
      case Characters.HIRAGANA:
        result.push(HIRAGANA);
        break;
      case Characters.HIRAGANA_COMBINATION:
        result.push(HIRAGANA_COMBINATIONS);
        break;
      case Characters.KATAKANA:
        result.push(KATAKANA);
        break;
      case Characters.KATAKANA_COMBINATION:
        result.push(HIRAGANA_COMBINATIONS);
        break;
      default:
        break;
    }
  });
  return result;
}
