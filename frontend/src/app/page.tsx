"use client";
import ImageCarousel from "@/components/image-carousel";
import Navbar from "@/components/navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  GradientBorderBtn,
  GradientBorderBtn2,
} from "@/components/ui/custom-btns";
import { FlipWords } from "@/components/ui/flip-words";
import { useRouter } from "next/navigation";

const words = ["find", "create", "share", "test"];

export default function Home() {

  const router = useRouter();

  return (
    <div className="relative flex flex-col min-h-screen
          md:px-8 
          lg:flex-row lg:p-10">
      <Navbar />

      {/* Left Section */}
      <div className="flex flex-col justify-center items-center gap-6 w-full mb-10
            sm:items-start 
            lg:w-7/12 lg:mb-0">

        {/* Main Heading */}
        <div className="relative text-4xl font-semibold text-center pt-10
               xl:text-6xl ">

          <span>Welcome to{" "}</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-300">
            Promptverse
          </span>
          {/* Gradient Lines */}
          <div className="absolute top-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-full blur-sm" />
          <div className="absolute top-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/2 blur-[1px]" />
          <div className="absolute top-full bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[6px] w-full blur-sm" />
          <div className="absolute top-full bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full" />
        </div>

        {/* Subheading */}
        <div className="text-xl w-max text-slate-300
               sm:text-4xl">
          A place to
          <FlipWords words={words} className="dark:text-blue-300" />
          <br />
          the most amazing prompts
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <GradientBorderBtn text="Explore Prompts" onClick={()=> {router.push("/login")}} />
          <GradientBorderBtn2 text="Join now" onClick={()=> {router.push("/login")}} />
        </div>
      </div>

      {/* Right Section (Carousel) */}
      <div className="w-full lg:w-5/12 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <ImageCarousel />
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
