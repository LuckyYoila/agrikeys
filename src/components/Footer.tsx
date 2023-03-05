import logo from "../images/agrikey logo.png";
import Link from "next/link";
import { navlinks } from "@/services/navigation.service";
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram, BsTwitter} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" bg-green-900 p-9 text-white">
      <div className="flex flex-col md:flex-row justify-between gap-10 pb-5">
        <div className="w-fit h-fit bg-white p-3">
          <img src={logo.src} className="h-24 w-24" />
        </div>

        <div className=" flex flex-col">
          <p className="font-bold text-lg">Quick Links</p>
          {navlinks.map((navlink, index) => {
            return (
              <Link className="hover:font-bold" key={index} href={navlink.url}>
                {navlink.page}
              </Link>
            );
          })}
        </div>

        <div>
          <p className=" font-bold text-lg ">Contact Us</p>
          <div className="flex flex-col w-fit">
            <a className="hover:font-bold" href="tel:+2348034298283">08034298283</a>
            <a className="hover:font-bold" href="tel:+2347017102323">07017102323</a>
            <a className="hover:font-bold" href="tel:+2348037734567">08037734567</a>
            <a className="hover:font-bold" href="tel:+2348038830001">08038830001</a>
          </div>

          <div className="mt-3 flex flex-col w-fit">
            <a href="mailto:info@agrikeyservices.com" className="hover:font-bold">info@agrikeyservices.com</a>
            <a href="mailto:agrikeyservices@gmail.com" className="hover:font-bold">agrikeyservices@gmail.com</a>
          </div>
        </div>

        <div className="max-w-sm">
          <p className=" font-bold text-lg">Our Locations</p>
          <ul className="list-disc flex flex-col gap-3">
            <li>No 11A DC Mang Street Rayfield Zarmaganda Road Jos Plateau State</li>
            <li>No 1B Ilorin Street, Area 8, Garki Central Business District FCT, Nigeria.</li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-lg">Follow Us</p>
          <div className="flex gap-5 mt-4">
            <FaFacebookF className=" scale-150" />
            <BsInstagram className=" scale-150" />
            <BsTwitter className=" scale-150" />
          </div>
        </div>
      </div>
      <div>
        <hr className="mx-auto w-[80%]" />
        <div className="p-5">
          <p className="text-center"> Copyright © 2023 Agrikeys Services Limited</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;