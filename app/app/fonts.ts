import { Poppins, Noto_Sans_JP } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const noto_sans_jp = Noto_Sans_JP({
  weight: ["300", "400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
