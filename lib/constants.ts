import { KanaGroup } from "@/models/interfaces/KanaGroup.interface";

export enum Characters {
  HIRAGANA,
  KATAKANA,
  HIRAGANA_COMBINATION,
  KATAKANA_COMBINATION,
}

export enum TatakuMode {
  NORMAL = "1",
  KIKUKANA = "2",
}

export enum KanaType {
  MAIN,
  COMBINATION,
  DAKUTEN,
  HANDAKUTEN,
}

export const HIRAGANA: KanaGroup = {
  vowels: [
    { char: "a", char_jp: "あ", type: KanaType.MAIN },
    { char: "i", char_jp: "い", type: KanaType.MAIN },
    { char: "u", char_jp: "う", type: KanaType.MAIN },
    { char: "e", char_jp: "え", type: KanaType.MAIN },
    { char: "o", char_jp: "お", type: KanaType.MAIN },
  ],
  k_col: [
    { char: "ka", char_jp: "か", type: KanaType.MAIN },
    { char: "ki", char_jp: "き", type: KanaType.MAIN },
    { char: "ku", char_jp: "く", type: KanaType.MAIN },
    { char: "ke", char_jp: "け", type: KanaType.MAIN },
    { char: "ko", char_jp: "こ", type: KanaType.MAIN },
  ],
  k_col_dakuten: [
    { char: "ga", char_jp: "が", type: KanaType.DAKUTEN },
    { char: "gi", char_jp: "ぎ", type: KanaType.DAKUTEN },
    { char: "gu", char_jp: "ぐ", type: KanaType.DAKUTEN },
    { char: "ge", char_jp: "げ", type: KanaType.DAKUTEN },
    { char: "go", char_jp: "ご", type: KanaType.DAKUTEN },
  ],
  s_col: [
    { char: "sa", char_jp: "さ", type: KanaType.MAIN },
    { char: "shi", char_jp: "し", type: KanaType.MAIN },
    { char: "su", char_jp: "す", type: KanaType.MAIN },
    { char: "se", char_jp: "せ", type: KanaType.MAIN },
    { char: "so", char_jp: "そ", type: KanaType.MAIN },
  ],
  s_col_dakuten: [
    { char: "za", char_jp: "ざ", type: KanaType.DAKUTEN },
    { char: "ji", char_jp: "じ", type: KanaType.DAKUTEN },
    { char: "zu", char_jp: "ず", type: KanaType.DAKUTEN },
    { char: "ze", char_jp: "ぜ", type: KanaType.DAKUTEN },
    { char: "zo", char_jp: "ぞ", type: KanaType.DAKUTEN },
  ],
  t_col: [
    { char: "ta", char_jp: "た", type: KanaType.MAIN },
    { char: "chi", char_jp: "ち", type: KanaType.MAIN },
    { char: "tsu", char_jp: "つ", type: KanaType.MAIN },
    { char: "te", char_jp: "て", type: KanaType.MAIN },
    { char: "to", char_jp: "と", type: KanaType.MAIN },
  ],
  t_col_dakuten: [
    { char: "da", char_jp: "だ", type: KanaType.DAKUTEN },
    { char: "ji", char_jp: "ぢ", type: KanaType.DAKUTEN },
    { char: "zu", char_jp: "づ", type: KanaType.DAKUTEN },
    { char: "de", char_jp: "で", type: KanaType.DAKUTEN },
    { char: "do", char_jp: "ど", type: KanaType.DAKUTEN },
  ],
  n_col: [
    { char: "na", char_jp: "な", type: KanaType.MAIN },
    { char: "ni", char_jp: "に", type: KanaType.MAIN },
    { char: "nu", char_jp: "ぬ", type: KanaType.MAIN },
    { char: "ne", char_jp: "ね", type: KanaType.MAIN },
    { char: "no", char_jp: "の", type: KanaType.MAIN },
  ],
  h_col: [
    { char: "ha", char_jp: "は", type: KanaType.MAIN },
    { char: "hi", char_jp: "ひ", type: KanaType.MAIN },
    { char: "fu", char_jp: "ふ", type: KanaType.MAIN },
    { char: "he", char_jp: "へ", type: KanaType.MAIN },
    { char: "ho", char_jp: "ほ", type: KanaType.MAIN },
  ],
  h_col_dakuten: [
    { char: "ba", char_jp: "ば", type: KanaType.DAKUTEN },
    { char: "bi", char_jp: "び", type: KanaType.DAKUTEN },
    { char: "bu", char_jp: "ぶ", type: KanaType.DAKUTEN },
    { char: "be", char_jp: "べ", type: KanaType.DAKUTEN },
    { char: "bo", char_jp: "ぼ", type: KanaType.DAKUTEN },
  ],
  p_col: [
    { char: "pa", char_jp: "ぱ", type: KanaType.HANDAKUTEN },
    { char: "pi", char_jp: "ぴ", type: KanaType.HANDAKUTEN },
    { char: "pu", char_jp: "ぷ", type: KanaType.HANDAKUTEN },
    { char: "pe", char_jp: "ぺ", type: KanaType.HANDAKUTEN },
    { char: "po", char_jp: "ぽ", type: KanaType.HANDAKUTEN },
  ],
  m_col: [
    { char: "ma", char_jp: "ま", type: KanaType.MAIN },
    { char: "mi", char_jp: "み", type: KanaType.MAIN },
    { char: "mu", char_jp: "む", type: KanaType.MAIN },
    { char: "me", char_jp: "め", type: KanaType.MAIN },
    { char: "mo", char_jp: "も", type: KanaType.MAIN },
  ],
  r_col: [
    { char: "ra", char_jp: "ら", type: KanaType.MAIN },
    { char: "ri", char_jp: "り", type: KanaType.MAIN },
    { char: "ru", char_jp: "る", type: KanaType.MAIN },
    { char: "re", char_jp: "れ", type: KanaType.MAIN },
    { char: "ro", char_jp: "ろ", type: KanaType.MAIN },
  ],
  y_col: [
    { char: "ya", char_jp: "や", type: KanaType.MAIN },
    { char: "yu", char_jp: "ゆ", type: KanaType.MAIN },
    { char: "yo", char_jp: "よ", type: KanaType.MAIN },
  ],
  w_col: [
    { char: "wa", char_jp: "わ", type: KanaType.MAIN },
    { char: "o", char_jp: "を", type: KanaType.MAIN },
  ],
  other: [{ char: "n", char_jp: "ん", type: KanaType.MAIN }],
};

export const KATAKANA: KanaGroup = {
  vowels: [
    { char: "a", char_jp: "ア", type: KanaType.MAIN },
    { char: "i", char_jp: "イ", type: KanaType.MAIN },
    { char: "u", char_jp: "ウ", type: KanaType.MAIN },
    { char: "e", char_jp: "エ", type: KanaType.MAIN },
    { char: "o", char_jp: "オ", type: KanaType.MAIN },
  ],
  k_col: [
    { char: "ka", char_jp: "カ", type: KanaType.MAIN },
    { char: "ki", char_jp: "キ", type: KanaType.MAIN },
    { char: "ku", char_jp: "ク", type: KanaType.MAIN },
    { char: "ke", char_jp: "ケ", type: KanaType.MAIN },
    { char: "ko", char_jp: "コ", type: KanaType.MAIN },
  ],
  k_col_dakuten: [
    { char: "ga", char_jp: "ガ", type: KanaType.DAKUTEN },
    { char: "gi", char_jp: "ギ", type: KanaType.DAKUTEN },
    { char: "gu", char_jp: "グ", type: KanaType.DAKUTEN },
    { char: "ge", char_jp: "ゲ", type: KanaType.DAKUTEN },
    { char: "go", char_jp: "ゴ", type: KanaType.DAKUTEN },
  ],
  s_col: [
    { char: "sa", char_jp: "サ", type: KanaType.MAIN },
    { char: "shi", char_jp: "シ", type: KanaType.MAIN },
    { char: "su", char_jp: "ス", type: KanaType.MAIN },
    { char: "se", char_jp: "セ", type: KanaType.MAIN },
    { char: "so", char_jp: "ソ", type: KanaType.MAIN },
  ],
  s_col_dakuten: [
    { char: "za", char_jp: "ザ", type: KanaType.DAKUTEN },
    { char: "ji", char_jp: "ジ", type: KanaType.DAKUTEN },
    { char: "zu", char_jp: "ズ", type: KanaType.DAKUTEN },
    { char: "ze", char_jp: "ゼ", type: KanaType.DAKUTEN },
    { char: "zo", char_jp: "ゾ", type: KanaType.DAKUTEN },
  ],
  t_col: [
    { char: "ta", char_jp: "タ", type: KanaType.MAIN },
    { char: "chi", char_jp: "チ", type: KanaType.MAIN },
    { char: "tsu", char_jp: "ツ", type: KanaType.MAIN },
    { char: "te", char_jp: "テ", type: KanaType.MAIN },
    { char: "to", char_jp: "ト", type: KanaType.MAIN },
  ],
  t_col_dakuten: [
    { char: "da", char_jp: "ダ", type: KanaType.DAKUTEN },
    { char: "ji", char_jp: "ヂ", type: KanaType.DAKUTEN },
    { char: "zu", char_jp: "ヅ", type: KanaType.DAKUTEN },
    { char: "de", char_jp: "デ", type: KanaType.DAKUTEN },
    { char: "do", char_jp: "ド", type: KanaType.DAKUTEN },
  ],
  n_col: [
    { char: "na", char_jp: "ナ", type: KanaType.MAIN },
    { char: "ni", char_jp: "ニ", type: KanaType.MAIN },
    { char: "nu", char_jp: "ヌ", type: KanaType.MAIN },
    { char: "ne", char_jp: "ネ", type: KanaType.MAIN },
    { char: "no", char_jp: "ノ", type: KanaType.MAIN },
  ],
  h_col: [
    { char: "ha", char_jp: "ハ", type: KanaType.MAIN },
    { char: "hi", char_jp: "ヒ", type: KanaType.MAIN },
    { char: "fu", char_jp: "フ", type: KanaType.MAIN },
    { char: "he", char_jp: "ヘ", type: KanaType.MAIN },
    { char: "ho", char_jp: "ホ", type: KanaType.MAIN },
  ],
  h_col_dakuten: [
    { char: "ba", char_jp: "バ", type: KanaType.DAKUTEN },
    { char: "bi", char_jp: "ビ", type: KanaType.DAKUTEN },
    { char: "bu", char_jp: "ブ", type: KanaType.DAKUTEN },
    { char: "be", char_jp: "ベ", type: KanaType.DAKUTEN },
    { char: "bo", char_jp: "ボ", type: KanaType.DAKUTEN },
  ],
  p_col: [
    { char: "pa", char_jp: "パ", type: KanaType.HANDAKUTEN },
    { char: "pi", char_jp: "ピ", type: KanaType.HANDAKUTEN },
    { char: "pu", char_jp: "プ", type: KanaType.HANDAKUTEN },
    { char: "pe", char_jp: "ペ", type: KanaType.HANDAKUTEN },
    { char: "po", char_jp: "ポ", type: KanaType.HANDAKUTEN },
  ],
  m_col: [
    { char: "ma", char_jp: "マ", type: KanaType.MAIN },
    { char: "mi", char_jp: "ミ", type: KanaType.MAIN },
    { char: "mu", char_jp: "ム", type: KanaType.MAIN },
    { char: "me", char_jp: "メ", type: KanaType.MAIN },
    { char: "mo", char_jp: "モ", type: KanaType.MAIN },
  ],
  r_col: [
    { char: "ra", char_jp: "ラ", type: KanaType.MAIN },
    { char: "ri", char_jp: "リ", type: KanaType.MAIN },
    { char: "ru", char_jp: "ル", type: KanaType.MAIN },
    { char: "re", char_jp: "レ", type: KanaType.MAIN },
    { char: "ro", char_jp: "ロ", type: KanaType.MAIN },
  ],
  y_col: [
    { char: "ya", char_jp: "ヤ", type: KanaType.MAIN },
    { char: "yu", char_jp: "ユ", type: KanaType.MAIN },
    { char: "yo", char_jp: "ヨ", type: KanaType.MAIN },
  ],
  w_col: [
    { char: "wa", char_jp: "ワ", type: KanaType.MAIN },
    { char: "o", char_jp: "ヲ", type: KanaType.MAIN },
  ],
  other: [{ char: "n", char_jp: "ン", type: KanaType.MAIN }],
};

export const HIRAGANA_COMBINATIONS: KanaGroup = {
  k_comb: [
    { char: "kya", char_jp: "きゃ", type: KanaType.COMBINATION },
    { char: "kyu", char_jp: "きゅ", type: KanaType.COMBINATION },
    { char: "kyo", char_jp: "きょ", type: KanaType.COMBINATION },
  ],
  s_comb: [
    { char: "sha", char_jp: "しゃ", type: KanaType.COMBINATION },
    { char: "shu", char_jp: "しゅ", type: KanaType.COMBINATION },
    { char: "sho", char_jp: "しょ", type: KanaType.COMBINATION },
  ],
  t_comb: [
    { char: "cha", char_jp: "ちゃ", type: KanaType.COMBINATION },
    { char: "chu", char_jp: "ちゅ", type: KanaType.COMBINATION },
    { char: "cho", char_jp: "ちょ", type: KanaType.COMBINATION },
  ],
  n_comb: [
    { char: "nya", char_jp: "にゃ", type: KanaType.COMBINATION },
    { char: "nyu", char_jp: "にゅ", type: KanaType.COMBINATION },
    { char: "nyo", char_jp: "にょ", type: KanaType.COMBINATION },
  ],
  h_comb: [
    { char: "hya", char_jp: "ひゃ", type: KanaType.COMBINATION },
    { char: "hyu", char_jp: "ひゅ", type: KanaType.COMBINATION },
    { char: "hyo", char_jp: "ひょ", type: KanaType.COMBINATION },
  ],
  m_comb: [
    { char: "mya", char_jp: "みゃ", type: KanaType.COMBINATION },
    { char: "myu", char_jp: "みゅ", type: KanaType.COMBINATION },
    { char: "myo", char_jp: "みょ", type: KanaType.COMBINATION },
  ],
  r_comb: [
    { char: "rya", char_jp: "りゃ", type: KanaType.COMBINATION },
    { char: "ryu", char_jp: "りゅ", type: KanaType.COMBINATION },
    { char: "ryo", char_jp: "りょ", type: KanaType.COMBINATION },
  ],
  g_comb: [
    { char: "gya", char_jp: "ぎゃ", type: KanaType.COMBINATION },
    { char: "gyu", char_jp: "ぎゅ", type: KanaType.COMBINATION },
    { char: "gyo", char_jp: "ぎょ", type: KanaType.COMBINATION },
  ],
  z_comb: [
    { char: "ja", char_jp: "じゃ", type: KanaType.COMBINATION },
    { char: "ju", char_jp: "じゅ", type: KanaType.COMBINATION },
    { char: "jo", char_jp: "じょ", type: KanaType.COMBINATION },
  ],
  d_comb: [
    { char: "ja", char_jp: "ぢゃ", type: KanaType.COMBINATION },
    { char: "ju", char_jp: "ぢゅ", type: KanaType.COMBINATION },
    { char: "jo", char_jp: "ぢょ", type: KanaType.COMBINATION },
  ],
  b_comb: [
    { char: "bya", char_jp: "びゃ", type: KanaType.COMBINATION },
    { char: "byu", char_jp: "びゅ", type: KanaType.COMBINATION },
    { char: "byo", char_jp: "びょ", type: KanaType.COMBINATION },
  ],
  p_comb: [
    { char: "pya", char_jp: "ぴゃ", type: KanaType.COMBINATION },
    { char: "pyu", char_jp: "ぴゅ", type: KanaType.COMBINATION },
    { char: "pyo", char_jp: "ぴょ", type: KanaType.COMBINATION },
  ],
};

export const KATAKANA_COMBINATIONS: KanaGroup = {
  k_comb: [
    { char: "kya", char_jp: "キャ", type: KanaType.COMBINATION },
    { char: "kyu", char_jp: "キュ", type: KanaType.COMBINATION },
    { char: "kyo", char_jp: "キョ", type: KanaType.COMBINATION },
  ],
  s_comb: [
    { char: "sha", char_jp: "シャ", type: KanaType.COMBINATION },
    { char: "shu", char_jp: "シュ", type: KanaType.COMBINATION },
    { char: "sho", char_jp: "ショ", type: KanaType.COMBINATION },
  ],
  t_comb: [
    { char: "cha", char_jp: "チャ", type: KanaType.COMBINATION },
    { char: "chu", char_jp: "チュ", type: KanaType.COMBINATION },
    { char: "cho", char_jp: "チョ", type: KanaType.COMBINATION },
  ],
  n_comb: [
    { char: "nya", char_jp: "ニャ", type: KanaType.COMBINATION },
    { char: "nyu", char_jp: "ニュ", type: KanaType.COMBINATION },
    { char: "nyo", char_jp: "ニョ", type: KanaType.COMBINATION },
  ],
  h_comb: [
    { char: "hya", char_jp: "ヒャ", type: KanaType.COMBINATION },
    { char: "hyu", char_jp: "ヒュ", type: KanaType.COMBINATION },
    { char: "hyo", char_jp: "ヒョ", type: KanaType.COMBINATION },
  ],
  m_comb: [
    { char: "mya", char_jp: "ミャ", type: KanaType.COMBINATION },
    { char: "myu", char_jp: "ミュ", type: KanaType.COMBINATION },
    { char: "myo", char_jp: "ミョ", type: KanaType.COMBINATION },
  ],
  r_comb: [
    { char: "rya", char_jp: "リャ", type: KanaType.COMBINATION },
    { char: "ryu", char_jp: "リュ", type: KanaType.COMBINATION },
    { char: "ryo", char_jp: "リョ", type: KanaType.COMBINATION },
  ],
  g_comb: [
    { char: "gya", char_jp: "ギャ", type: KanaType.COMBINATION },
    { char: "gyu", char_jp: "ギュ", type: KanaType.COMBINATION },
    { char: "gyo", char_jp: "ギョ", type: KanaType.COMBINATION },
  ],
  z_comb: [
    { char: "ja", char_jp: "ジャ", type: KanaType.COMBINATION },
    { char: "ju", char_jp: "ジュ", type: KanaType.COMBINATION },
    { char: "jo", char_jp: "ジョ", type: KanaType.COMBINATION },
  ],
  d_comb: [
    { char: "ja", char_jp: "ヂャ", type: KanaType.COMBINATION },
    { char: "ju", char_jp: "ヂュ", type: KanaType.COMBINATION },
    { char: "jo", char_jp: "ヂョ", type: KanaType.COMBINATION },
  ],
  b_comb: [
    { char: "bya", char_jp: "ビャ", type: KanaType.COMBINATION },
    { char: "byu", char_jp: "ビュ", type: KanaType.COMBINATION },
    { char: "byo", char_jp: "ビョ", type: KanaType.COMBINATION },
  ],
  p_comb: [
    { char: "pya", char_jp: "ピャ", type: KanaType.COMBINATION },
    { char: "pyu", char_jp: "ピュ", type: KanaType.COMBINATION },
    { char: "pyo", char_jp: "ピョ", type: KanaType.COMBINATION },
  ],
};

export const DEFAULT_GAME_MODE_STATE = [
  {
    id: "normal-radio",
    value: TatakuMode.NORMAL,
    label: "Normal",
    description:
      "A Romaji character will be shown and you need to select the correct latin translation.",
    checked: true,
  },
  {
    id: "kiku-check",
    value: TatakuMode.KIKUKANA,
    label: "KikuKana",
    description:
      "Hear the japanese pronunciation and select the correct romaji translation.",
    checked: false,
  },
];

export const DEFAULT_SETTINGS_STATE = [
  {
    id: "hiragana-check",
    type: Characters.HIRAGANA,
    label: "Hiragana",
    description:
      "Basic set of Hiragana characters, including vowels (a, i, u, e, o) and all consonants (ka, ki, ku, ke, ko)",
    checked: true,
  },
  {
    id: "hiragana-comb-check",
    type: Characters.HIRAGANA_COMBINATION,
    label: "Hiragana Combinations",
    description:
      "Combinations of Hiragana characters, such as kya, sha, cha, nya, hya, mya, rya, gya, ja, bya, and pya",
    checked: true,
  },
  {
    id: "katakana-comb-check",
    type: Characters.KATAKANA,
    label: "Katakana",
    description:
      "Basic set of Katakana characters, including vowels (a, i, u, e, o) and all consonants (ka, ki, ku, ke, ko)",
    checked: true,
  },
  {
    id: "katakana-check",
    type: Characters.KATAKANA_COMBINATION,
    label: "Katakana Combinations",
    description:
      "Combinations of Katakana characters, such as kya, sha, cha, nya, hya, mya, rya, gya, ja, bya, and pya",
    checked: true,
  },
];

export const DEFAULT_SELECTED_KANA_GROUPS = [
  HIRAGANA,
  HIRAGANA_COMBINATIONS,
  KATAKANA,
  KATAKANA_COMBINATIONS,
];
