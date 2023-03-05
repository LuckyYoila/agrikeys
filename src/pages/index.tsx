import Meta from "@/components/Meta";
import Link from "next/link";
// import Head from "next/head";
// import Image from "next/image";
// import styles from '@/styles/Home.module.css'
// import { CldImage } from 'next-cloudinary'
// import imagepng from "../../Agrikeys Website Resources/Agrikeys Resources/Agreement Deal.jpg"

// import { motion } from "framer-motion";
// import Header from "@/components/Header";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { partners } from "@/services/partners.service";

import heroBg from "../images/FarmConsultation.jpg";

import strategy from "../images/services/Agric Business Strategy.svg";
import production from "../images/services/Agric Production.svg";
import commodity from "../images/services/Commodity Trading.svg";
import training from "../images/services/Training.svg";
import research from "../images/services/Research.svg";

interface businessServices {
  image: any;
  text: string;
  caption: string;
}

const services: businessServices[] = [
  {
    image: strategy,
    text: "Agricultural Strategy",
    caption: "For maximum product yield",
  },
  {
    image: production,
    text: "Agricultural Production",
    caption: "Best practices and effective systems",
  },
  {
    image: commodity,
    text: "Commodity Trading",
    caption: "Value for your goods",
  },
  {
    image: training,
    text: "Top Notch Training",
    caption: "Farmer Education and sensitization",
  },
  {
    image: research,
    text: "Extensive Research",
    caption: "For optimized production and latest technology",
  },
];

export default function Home() {
  return (
    <>
      <Meta page="Home" />
      <div
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: "0em",
        }}
        className=" w-full"
      >
        <div>
          <div className="flex h-[600px] flex-col items-center justify-center bg-black/50 px-9">
            <div className=" flex max-w-sm flex-col items-center gap-3 text-center font-bold leading-8 text-white md:max-w-2xl">
              <h1 className="font-merriweather text-3xl font-bold leading-[1.3em] text-white md:text-5xl">
                We Provide Financial and Agricultural Consultation
              </h1>

              <p>
                Bringing a higher level of quality to the Agricultural business
                by developing robust strategy that is feasible for financiers
                and also best production practices that improve both yield and
                profits for the farmers.
              </p>

              <Link href={"/contact-us"}>
                <p className="mt-5 w-fit bg-green-900 p-3">
                  Get Started with us{" "}
                  <HiOutlineArrowNarrowRight className="inline" />
                </p>
              </Link>
            </div>
          </div>
          {/* <Image src={heroBg.src} alt="bg" width={100} height={100}/> */}
        </div>
      </div>

      {/* services */}
      <div className=" bg-green-50 py-9">
        <h2 className="text-center text-3xl font-bold">
          We provide effective services
        </h2>
        <div className="mx-auto mt-4 flex max-w-3xl flex-wrap gap-8 p-4 ">
          {services.map((service, index) => {
            return (
              <div className="mx-auto max-w-xs text-center" key={index}>
                <img className="mx-auto" src={service.image.src} />

                <p className="mt-3 font-bold">{service.text}</p>
                {/* <p>{service.caption}</p> */}
              </div>
            );
          })}
        </div>
        <Link href={"/services"}>
          <p className=" mx-auto my-9 w-fit bg-green-800 p-3 font-bold text-white">
            Learn More <HiOutlineArrowNarrowRight className="inline" />
          </p>
        </Link>
      </div>

      {/* partners */}
      <div className="py-9">
        <div className=" mx-auto  w-3/4 items-center gap-5 lg:flex">
          <h2 className="text-center text-3xl font-bold">
            We partner with excellent businesses, organizations and services to
            deliver the best value.
          </h2>
          <div className=" mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8">
            {partners.map((logo: any, index: number) => {
              return (
                <img
                  className="aspect-[3/2] h-20 w-20  object-contain md:h-28 md:w-28"
                  src={logo.src}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        {/* <Link href={"/partners"}>
        <p className="mx-auto my-9 w-fit bg-green-800 p-3 font-bold text-white">
          {" "}
          See all partners <HiOutlineArrowNarrowRight className="inline" />
        </p>
        </Link> */}
      </div>
    </>
  );
}
