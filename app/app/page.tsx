"use client";

import Header from "@/components/moekana/header/Header";
import React from "react";

const page: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">Moe Kana</h1>
      <section className="w-full">
        <Header />
      </section>
    </main>
  );
};

export default page;
