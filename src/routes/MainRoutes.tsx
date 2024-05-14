import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// All Page Components
import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/login/LoginPage";
import AboutPage from "@/pages/about/AboutPage";
import PostingPage from "@/pages/posting/PostingPage";
import MainLayout from "@/components/common/layout/MainLayout";

const MainRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posting" element={<PostingPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default MainRoutes;
