"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { carouselIamgeData } from "@/data";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
const Carouselimage = () => {
  const [ActiveIndex, setActiveIndex] = useState<number>(0);
  const [carouselApi, setcarouselApi] = useState<CarouselApi | null>(null);

  const handleSlideChange = useCallback(() => {
    if (carouselApi) {
      setActiveIndex(carouselApi.selectedScrollSnap());
    }
  }, [carouselApi]);

  useEffect(() => {
    if (carouselApi) {
      carouselApi.on("select", handleSlideChange);

      return () => {
        carouselApi.off("select", handleSlideChange);
      };
    }
  }, [carouselApi, setcarouselApi, handleSlideChange]);

  return (
    <section className="order-2 lg:order-1 place-self-center">
      <Carousel setApi={setcarouselApi}>
        <CarouselContent>
          {carouselIamgeData.map((items) => (
            <CarouselItem
              className="mx-auto flex items-center justify-center"
              key={items.id}
            >
              <Image src={items.img} alt="Image1" width={418} height={324} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* ACTIVE CAROUSEL CONTENT */}
      <ActivecarouselContent ActiveIndex={ActiveIndex} />
    </section>
  );
};

const ActivecarouselContent = ({ ActiveIndex }: { ActiveIndex: number }) => {
  return (
    <div className="px-3 md:px-4 lg:px-10">
      <Dots ActiveIndex={ActiveIndex} />
      <h3 className="p-2 font-inter text-2xl font-semibold text-black">
        {carouselIamgeData[ActiveIndex].heading}
      </h3>
      <h2 className="px-2 py-3 text-xl">
        {carouselIamgeData[ActiveIndex].descr}
      </h2>
    </div>
  );
};

const Dots = ({ ActiveIndex }: { ActiveIndex: number }) => {
  return (
    <div className="flex items-center gap-3 p-2">
      <span
        className={`size-3 rounded-full ${
          ActiveIndex === 0 ? "bg-[#00172f]" : "bg-slate-200"
        }`}
      />
      <span
        className={`size-3 rounded-full ${
          ActiveIndex === 1 ? "bg-[#00172f]" : "bg-slate-200"
        }`}
      />
      <span
        className={`size-3 rounded-full ${
          ActiveIndex === 2 ? "bg-[#00172f]" : "bg-slate-200"
        }`}
      />
      <span
        className={`size-3 rounded-full ${
          ActiveIndex === 3 ? "bg-[#00172f]" : "bg-slate-200"
        }`}
      />
    </div>
  );
};

export default Carouselimage;
