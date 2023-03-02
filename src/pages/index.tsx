import Meta from "@/components/Meta";
// import Head from "next/head";
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
// import { CldImage } from 'next-cloudinary'
// import imagepng from "../../Agrikeys Website Resources/Agrikeys Resources/Agreement Deal.jpg"

// import { motion } from "framer-motion";
// import Header from "@/components/Header";

import heroBg from "../images/FarmConsultation.jpg"


export default function Home() {
  return (
    <>
      <div  style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "0em",
        }} className=" h-80 w-full">
        <div>
          
          {/* <Image src={heroBg.src} alt="bg" width={100} height={100}/> */}
        </div>
      </div>
    </>
  );
}
