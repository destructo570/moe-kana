export enum Characters {
  HIRAGANA,
  KATAKANA,
  HIRAGANA_COMBINATION,
  KATAKANA_COMBINATION,
}

export const HIRAGANA: KanaGroup = {
  vowels: [
    { char: "a", char_jp: "あ" },
    { char: "i", char_jp: "い" },
    { char: "u", char_jp: "う" },
    { char: "e", char_jp: "え" },
    { char: "o", char_jp: "お" },
  ],
  k_col: [
    { char: "ka", char_jp: "か" },
    { char: "ki", char_jp: "き" },
    { char: "ku", char_jp: "く" },
    { char: "ke", char_jp: "け" },
    { char: "ko", char_jp: "こ" },
  ],
  k_col_dakuten: [
    { char: "ga", char_jp: "が" },
    { char: "gi", char_jp: "ぎ" },
    { char: "gu", char_jp: "ぐ" },
    { char: "ge", char_jp: "げ" },
    { char: "go", char_jp: "ご" },
  ],
  s_col: [
    { char: "sa", char_jp: "さ" },
    { char: "shi", char_jp: "し" },
    { char: "su", char_jp: "す" },
    { char: "se", char_jp: "せ" },
    { char: "so", char_jp: "そ" },
  ],
  s_col_dakuten: [
    { char: "za", char_jp: "ざ" },
    { char: "ji", char_jp: "じ" },
    { char: "zu", char_jp: "ず" },
    { char: "ze", char_jp: "ぜ" },
    { char: "zo", char_jp: "ぞ" },
  ],
  t_col: [
    { char: "ta", char_jp: "た" },
    { char: "chi", char_jp: "ち" },
    { char: "tsu", char_jp: "つ" },
    { char: "te", char_jp: "て" },
    { char: "to", char_jp: "と" },
  ],
  t_col_dakuten: [
    { char: "da", char_jp: "だ" },
    { char: "ji", char_jp: "ぢ" },
    { char: "zu", char_jp: "づ" },
    { char: "de", char_jp: "で" },
    { char: "do", char_jp: "ど" },
  ],
  n_col: [
    { char: "na", char_jp: "な" },
    { char: "ni", char_jp: "に" },
    { char: "nu", char_jp: "ぬ" },
    { char: "ne", char_jp: "ね" },
    { char: "no", char_jp: "の" },
  ],
  h_col: [
    { char: "ha", char_jp: "は" },
    { char: "hi", char_jp: "ひ" },
    { char: "fu", char_jp: "ふ" },
    { char: "he", char_jp: "へ" },
    { char: "ho", char_jp: "ほ" },
  ],
  h_col_dakuten: [
    { char: "ba", char_jp: "ば" },
    { char: "bi", char_jp: "び" },
    { char: "bu", char_jp: "ぶ" },
    { char: "be", char_jp: "べ" },
    { char: "bo", char_jp: "ぼ" },
  ],
  p_col: [
    { char: "pa", char_jp: "ぱ" },
    { char: "pi", char_jp: "ぴ" },
    { char: "pu", char_jp: "ぷ" },
    { char: "pe", char_jp: "ぺ" },
    { char: "po", char_jp: "ぽ" },
  ],
  m_col: [
    { char: "ma", char_jp: "ま" },
    { char: "mi", char_jp: "み" },
    { char: "mu", char_jp: "む" },
    { char: "me", char_jp: "め" },
    { char: "mo", char_jp: "も" },
  ],
  y_col: [
    { char: "ya", char_jp: "や" },
    { char: "yu", char_jp: "ゆ" },
    { char: "yo", char_jp: "よ" },
  ],
  r_col: [
    { char: "ra", char_jp: "ら" },
    { char: "ri", char_jp: "り" },
    { char: "ru", char_jp: "る" },
    { char: "re", char_jp: "れ" },
    { char: "ro", char_jp: "ろ" },
  ],
  w_col: [
    { char: "wa", char_jp: "わ" },
    { char: "o", char_jp: "を" },
  ],
  other: [{ char: "n", char_jp: "ん" }],
};

export const KATAKANA: KanaGroup = {
  vowels: [
    { char: "a", char_jp: "ア" },
    { char: "i", char_jp: "イ" },
    { char: "u", char_jp: "ウ" },
    { char: "e", char_jp: "エ" },
    { char: "o", char_jp: "オ" },
  ],
  k_col: [
    { char: "ka", char_jp: "カ" },
    { char: "ki", char_jp: "キ" },
    { char: "ku", char_jp: "ク" },
    { char: "ke", char_jp: "ケ" },
    { char: "ko", char_jp: "コ" },
  ],
  k_col_dakuten: [
    { char: "ga", char_jp: "ガ" },
    { char: "gi", char_jp: "ギ" },
    { char: "gu", char_jp: "グ" },
    { char: "ge", char_jp: "ゲ" },
    { char: "go", char_jp: "ゴ" },
  ],
  s_col: [
    { char: "sa", char_jp: "サ" },
    { char: "shi", char_jp: "シ" },
    { char: "su", char_jp: "ス" },
    { char: "se", char_jp: "セ" },
    { char: "so", char_jp: "ソ" },
  ],
  s_col_dakuten: [
    { char: "za", char_jp: "ザ" },
    { char: "ji", char_jp: "ジ" },
    { char: "zu", char_jp: "ズ" },
    { char: "ze", char_jp: "ゼ" },
    { char: "zo", char_jp: "ゾ" },
  ],
  t_col: [
    { char: "ta", char_jp: "タ" },
    { char: "chi", char_jp: "チ" },
    { char: "tsu", char_jp: "ツ" },
    { char: "te", char_jp: "テ" },
    { char: "to", char_jp: "ト" },
  ],
  t_col_dakuten: [
    { char: "da", char_jp: "ダ" },
    { char: "ji", char_jp: "ヂ" },
    { char: "zu", char_jp: "ヅ" },
    { char: "de", char_jp: "デ" },
    { char: "do", char_jp: "ド" },
  ],
  n_col: [
    { char: "na", char_jp: "ナ" },
    { char: "ni", char_jp: "ニ" },
    { char: "nu", char_jp: "ヌ" },
    { char: "ne", char_jp: "ネ" },
    { char: "no", char_jp: "ノ" },
  ],
  h_col: [
    { char: "ha", char_jp: "ハ" },
    { char: "hi", char_jp: "ヒ" },
    { char: "fu", char_jp: "フ" },
    { char: "he", char_jp: "ヘ" },
    { char: "ho", char_jp: "ホ" },
  ],
  h_col_dakuten: [
    { char: "ba", char_jp: "バ" },
    { char: "bi", char_jp: "ビ" },
    { char: "bu", char_jp: "ブ" },
    { char: "be", char_jp: "ベ" },
    { char: "bo", char_jp: "ボ" },
  ],
  p_col: [
    { char: "pa", char_jp: "パ" },
    { char: "pi", char_jp: "ピ" },
    { char: "pu", char_jp: "プ" },
    { char: "pe", char_jp: "ペ" },
    { char: "po", char_jp: "ポ" },
  ],
  m_col: [
    { char: "ma", char_jp: "マ" },
    { char: "mi", char_jp: "ミ" },
    { char: "mu", char_jp: "ム" },
    { char: "me", char_jp: "メ" },
    { char: "mo", char_jp: "モ" },
  ],
  y_col: [
    { char: "ya", char_jp: "ヤ" },
    { char: "yu", char_jp: "ユ" },
    { char: "yo", char_jp: "ヨ" },
  ],
  r_col: [
    { char: "ra", char_jp: "ラ" },
    { char: "ri", char_jp: "リ" },
    { char: "ru", char_jp: "ル" },
    { char: "re", char_jp: "レ" },
    { char: "ro", char_jp: "ロ" },
  ],
  w_col: [
    { char: "wa", char_jp: "ワ" },
    { char: "o", char_jp: "ヲ" },
  ],
  other: [{ char: "n", char_jp: "ン" }],
};

export const HIRAGANA_COMBINATIONS: KanaGroup = {
  k_comb: [
    { char: "kya", char_jp: "きゃ" },
    { char: "kyu", char_jp: "きゅ" },
    { char: "kyo", char_jp: "きょ" },
  ],
  s_comb: [
    { char: "sha", char_jp: "しゃ" },
    { char: "shu", char_jp: "しゅ" },
    { char: "sho", char_jp: "しょ" },
  ],
  t_comb: [
    { char: "cha", char_jp: "ちゃ" },
    { char: "chu", char_jp: "ちゅ" },
    { char: "cho", char_jp: "ちょ" },
  ],
  n_comb: [
    { char: "nya", char_jp: "にゃ" },
    { char: "nyu", char_jp: "にゅ" },
    { char: "nyo", char_jp: "にょ" },
  ],
  h_comb: [
    { char: "hya", char_jp: "ひゃ" },
    { char: "hyu", char_jp: "ひゅ" },
    { char: "hyo", char_jp: "ひょ" },
  ],
  m_comb: [
    { char: "mya", char_jp: "みゃ" },
    { char: "myu", char_jp: "みゅ" },
    { char: "myo", char_jp: "みょ" },
  ],
  r_comb: [
    { char: "rya", char_jp: "りゃ" },
    { char: "ryu", char_jp: "りゅ" },
    { char: "ryo", char_jp: "りょ" },
  ],
  g_comb: [
    { char: "gya", char_jp: "ぎゃ" },
    { char: "gyu", char_jp: "ぎゅ" },
    { char: "gyo", char_jp: "ぎょ" },
  ],
  z_comb: [
    { char: "ja", char_jp: "じゃ" },
    { char: "ju", char_jp: "じゅ" },
    { char: "jo", char_jp: "じょ" },
  ],
  d_comb: [
    { char: "ja", char_jp: "ぢゃ" },
    { char: "ju", char_jp: "ぢゅ" },
    { char: "jo", char_jp: "ぢょ" },
  ],
  b_comb: [
    { char: "bya", char_jp: "びゃ" },
    { char: "byu", char_jp: "びゅ" },
    { char: "byo", char_jp: "びょ" },
  ],
  p_comb: [
    { char: "pya", char_jp: "ぴゃ" },
    { char: "pyu", char_jp: "ぴゅ" },
    { char: "pyo", char_jp: "ぴょ" },
  ],
};

export const KATAKANA_COMBINATIONS: KanaGroup = {
  k_comb: [
    { char: "kya", char_jp: "キャ" },
    { char: "kyu", char_jp: "キュ" },
    { char: "kyo", char_jp: "キョ" },
  ],
  s_comb: [
    { char: "sha", char_jp: "シャ" },
    { char: "shu", char_jp: "シュ" },
    { char: "sho", char_jp: "ショ" },
  ],
  t_comb: [
    { char: "cha", char_jp: "チャ" },
    { char: "chu", char_jp: "チュ" },
    { char: "cho", char_jp: "チョ" },
  ],
  n_comb: [
    { char: "nya", char_jp: "ニャ" },
    { char: "nyu", char_jp: "ニュ" },
    { char: "nyo", char_jp: "ニョ" },
  ],
  h_comb: [
    { char: "hya", char_jp: "ヒャ" },
    { char: "hyu", char_jp: "ヒュ" },
    { char: "hyo", char_jp: "ヒョ" },
  ],
  m_comb: [
    { char: "mya", char_jp: "ミャ" },
    { char: "myu", char_jp: "ミュ" },
    { char: "myo", char_jp: "ミョ" },
  ],
  r_comb: [
    { char: "rya", char_jp: "リャ" },
    { char: "ryu", char_jp: "リュ" },
    { char: "ryo", char_jp: "リョ" },
  ],
  g_comb: [
    { char: "gya", char_jp: "ギャ" },
    { char: "gyu", char_jp: "ギュ" },
    { char: "gyo", char_jp: "ギョ" },
  ],
  z_comb: [
    { char: "ja", char_jp: "ジャ" },
    { char: "ju", char_jp: "ジュ" },
    { char: "jo", char_jp: "ジョ" },
  ],
  d_comb: [
    { char: "ja", char_jp: "ヂャ" },
    { char: "ju", char_jp: "ヂュ" },
    { char: "jo", char_jp: "ヂョ" },
  ],
  b_comb: [
    { char: "bya", char_jp: "ビャ" },
    { char: "byu", char_jp: "ビュ" },
    { char: "byo", char_jp: "ビョ" },
  ],
  p_comb: [
    { char: "pya", char_jp: "ピャ" },
    { char: "pyu", char_jp: "ピュ" },
    { char: "pyo", char_jp: "ピョ" },
  ],
};

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
