"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const slideData = [
  {
    title: "Anime style characters",
    src: "/sample-1.webp",
  },
  {
    title: "cool animals in solid colors",
    src: "/sample-2.webp",
  },
  {
    title: "pop art celebrities",
    src: "/sample-3.webp",
  },
  {
    title: "futuristic beings",
    src: "/sample-4.webp",
  },
];

export default function AnimatedCarousel() {
  const carouselRef = useRef<CarouselApi | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      setApi={(api) => {
        carouselRef.current = api;
      }}
      opts={{ align: "start", loop: true }}
      className="w-10/12 mx-auto z-1"
    >
      <CarouselContent>
        {slideData.map((slide, index) => (
          <CarouselItem key={index} className="flex flex-col items-center gap-2 text-center">
            <Image
              src={slide.src}
              alt={slide.title}
              width={350}
              height={450}
              className="rounded-lg object-cover"
            />
            <p className="text-xl pt-4 md:text-3xl font-medium">
              {slide.title}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
