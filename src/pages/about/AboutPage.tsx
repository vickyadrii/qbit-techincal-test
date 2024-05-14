import { useEffect } from "react";
import About from "@/features/about/About";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Page | QBIT Technical Test";
  }, []);

  return <About />;
};

export default AboutPage;
