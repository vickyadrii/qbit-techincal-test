import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


// All Page Components
import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/login/LoginPage";
import AboutPage from "@/pages/about/AboutPage";
import PostingPage from "@/pages/posting/PostingPage";

const MainRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posting" element={<PostingPage />} />
        </Routes>
      
    </Router>
  );
};

export default MainRoutes;
