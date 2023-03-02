import Link from "next/link";
import Logo from "../images/agrikey logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useContext } from "react";
import { pageContext } from "@/contexts";

interface NavLink {
  page: string;
  url: string;
}

const Header = () => {
  const [menuOpen, setOpenMenu] = useState(false);

  const navlinks: NavLink[] = [
    {
      page: "Home",
      url: "/",
    },

    {
      page: "About Us",
      url: "/",
    },

    {
      page: "Services",
      url: "/",
    },
  ];

  const pageIndex = useContext(pageContext);

  return (
    <header className="flex justify-between items-center px-10 py-1">
      <div className="relative p-2 top-8 shadow bg-white">
        <img className="h-14 w-14 md:h-20 md:w-20" src={Logo.src} alt="Agrikeys Logo" />
      </div>
      {/* <p className=" font-garamond w-min">AGRIKEYS SERVICES LIMITED</p> */}
      <nav
        className={`${
          menuOpen ? "" : "translate-x-full"
        } fixed top-0 right-0 z-50 flex h-screen w-1/2 flex-col items-center justify-center bg-gray-100 p-4 shadow transition-all md:static md:z-0 md:flex-row md:bg-white md:shadow-none md:w-auto md:translate-x-0 md:h-fit`}
      >
        <div className="flex h-fit flex-col md:flex-row justify-between">
          {navlinks.map((linkItem: NavLink, index: number) => {
            return (
              <>
                <Link
                  href={linkItem.url}
                  key={index}
                  className="p-3 text-sm font-bold uppercase hover:text-green-900"
                >
                  {linkItem.page}
                </Link>
              </>
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
      ) : (
        ""
      )}
    </header>
  );
};
export default Header;
