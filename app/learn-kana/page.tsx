"use client";

import React from "react";
import HiraganaContent from "./hiragana.mdx";
import KatakanaContent from "./katakana.mdx";

const page = () => {
  return (
    <section className="sm:px-40 px-30">
      <HiraganaContent />
      <KatakanaContent />
    </section>
  );
};

export default page;
