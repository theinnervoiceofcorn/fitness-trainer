import { Navbar } from "@/widgets";
import { Footer } from "../../components";
import { AboutProject, Header, Programs } from "../../containers";

export const MainPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutProject />
      <Programs />
      <Footer />
    </>
  );
};
