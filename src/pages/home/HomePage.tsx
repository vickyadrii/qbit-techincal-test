import Home from "@/features/home/Home";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page | QBIT Technical Test";
  });

  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
