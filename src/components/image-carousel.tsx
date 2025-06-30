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
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://placehold.co/800x600.png",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://placehold.co/800x600.png",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop",
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
          <CarouselItem key={index} className="flex justify-center">
            <Image
              src={slide.src}
              alt={slide.title}
              width={350}
              height={450}
              className="h-[450] w-[350] object-cover rounded-lg transition-all duration-700 ease-in-out"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
