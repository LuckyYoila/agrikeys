// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import { pageContext } from "@/contexts";
// import PageBanner from "./pageBanner";
// import { navlinks } from "@/services/navigation.service";

interface Props {
  page?: string;
}

const Page = ({ children }: PropsWithChildren<Props>) => {
  // const [pageValue, setPageValue]=useState("")

  // const router = useRouter()

  // useEffect(()=> {

  // },[])
  
  return (
    <div>
      <pageContext.Provider value={0}>
      <Header />
      
        {children}
      <Footer />
      </pageContext.Provider>
    </div>
  );
};
export default Page;
