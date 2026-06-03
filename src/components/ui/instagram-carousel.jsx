"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export function InstagramCarousel() {
  const instagramImages = [
    "https://www.instagram.com/p/DA928Y6PJby/?img_index=7",
    "https://www.instagram.com/p/DA93HBMPT7G/?img_index=6",
    "https://www.instagram.com/p/DA93HBMPT7G/?img_index=10",
    "https://www.instagram.com/p/DA93lckxXgD/?img_index=3",
    "https://www.instagram.com/p/DA93lckxXgD/?img_index=6",
    "https://www.instagram.com/p/DA93lckxXgD/?img_index=7",
    "https://www.instagram.com/p/DA93lckxXgD/?img_index=9",
    "https://www.instagram.com/p/DA94UBKJaXv/?img_index=5",
    "https://www.instagram.com/p/DA94UBKJaXv/?img_index=10",
    "https://www.instagram.com/p/DA941dSJ4gc/?img_index=3",
    "https://www.instagram.com/p/DA941dSJ4gc/?img_index=9",
    "https://www.instagram.com/p/DA948whJC5a/?img_index=2",
    "https://www.instagram.com/p/DA948whJC5a/?img_index=4",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-8 md:py-6 py-4">
      <div className="relative">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {instagramImages.map((imageUrl, index) => (
              <CarouselItem
                key={index}
                className="pl-4 lg:basis-1/4 md:basis-1/3 basis-1/2"
              >
                <Link className="w-full" href={imageUrl} target="_blank">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <img
                          src={`./Instagram/ig${Number(index) + 1}.jpg`}
                          alt={`Instagram image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute lg:-left-12 md:-left-8 -left-6 top-1/2 transform -translate-y-1/2 bg-primary/90 hover:bg-primary text-white border-none" />
          <CarouselNext className="absolute lg:-right-12  md:-right-8 -right-6 top-1/2 transform -translate-y-1/2 bg-primary/90 hover:bg-primary text-white border-none" />
        </Carousel>

      </div>
    </div>
  );
}
