"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function Typer() {
  const words = [
    {
      text: "I'm",
      className: "dark:text-accent-foreground",
    },
    {
      text: "a",
    },
    {
      text: "computer",
    },
    {
      text: "science",
    },
    {
      text: "student.",
      className: "dark:text-primary",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center h-[40rem] ">
      <div className="flex justify-center text-xl">
        <p className=" text-accent-foreground mb-10">Hi, I&apos;m </p>
        <h1 className="ml-2 font-bold dark:text-primary"> Dax</h1>
      </div>
      <TypewriterEffect words={words} />
    </div>
  );
}
