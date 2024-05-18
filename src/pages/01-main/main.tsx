import { Navbar } from "../../components";
import {
  AboutProject,
  Header,
  ProgramCardContainer,
  // Programs,
} from "../../containers";

export const MainPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutProject />
      {/* <Programs /> */}
      <ProgramCardContainer />
    </>
  );
};
