"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function Typer() {
  const words = [
    {
      text: "a",
    },
    {
      text: "Computer",
    },
    {
      text: "Science",
    },
    {
      text: "student.",
      className: "dark:text-primary",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center h-[40rem] ">
      <div className="flex justify-center text-3xl ">
        <p className=" text-accent-foreground lg:mb-8 md:mb-7 sm:mb-4">
          Hi, I&apos;m{" "}
        </p>
        <h1 className="ml-2 font-bold dark:text-primary"> Dax</h1>
      </div>
      <TypewriterEffect words={words} />
    </div>
  );
}
