import Link from "next/link";
import Logo from "../images/agrikey logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
// import { pageContext } from "@/contexts";
import { navlinks } from "@/services/navigation.service";

interface NavLink {
  page: string;
  url: string;
}

const Header = () => {
  const [menuOpen, setOpenMenu] = useState(false);

  return (
    <>
    <header className="flex min-h-[4em] items-center justify-between px-10 py-2">
      <div className=" float-left h-5 bg-white ">
        <Link href={"/"}>
          <div className="bg-white p-2 shadow">
            <img
              className="h-14 w-14 md:h-20 md:w-20"
              src={Logo.src}
              alt="Agrikeys Logo"
            />
          </div>
        </Link>
      </div>
      {/* <p className=" font-garamond w-min">AGRIKEYS SERVICES LIMITED</p> */}
      <nav
        className={`${
          menuOpen ? "" : "translate-x-full"
        } md:mr-18 fixed top-0 right-0 z-50 flex h-screen w-1/2 flex-col items-center justify-center bg-gray-100 p-4 shadow transition-all md:static md:z-0 md:h-fit md:w-auto md:translate-x-0 md:flex-row md:bg-white md:shadow-none`}
      >
        <div className="flex h-fit flex-col justify-between gap-4 md:flex-row md:gap-0">
          {navlinks.map((linkItem: NavLink, index: number) => {
            return (
              <span key={index}>
                <Link
                  onClick={() => setOpenMenu(false)}
                  href={linkItem.url}
                  className="whitespace-nowrap p-3 text-sm font-bold uppercase hover:text-green-900"
                >
                  {linkItem.page}
                </Link>
              </span>
            );
          })}
        </div>
      </nav>
      <AiOutlineMenu
        className={` h-8 w-8 text-green-800 md:hidden`}
        onClick={() => setOpenMenu(true)}
      />

      {menuOpen ? (
        <div
          className="fixed inset-0 h-screen w-screen bg-green-500/10"
          onClick={() => setOpenMenu(false)}
        ></div>
      ) : null}
    </header>
    </>
  );
};
export default Header
