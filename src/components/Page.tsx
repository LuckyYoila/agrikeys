import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import { pageContext } from "@/contexts";

interface Props {
  page?: string;
}

const Page = ({ children }: PropsWithChildren<Props>) => {
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
