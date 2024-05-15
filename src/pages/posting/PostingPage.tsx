import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import PostForm from "@/features/posting/PostForm";
import Post from "@/features/posting/Post";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { LoginContext } from "@/types";

const PostingPage = () => {
  const navigate = useNavigate();
  const loginContext = useSelector<IRootState, LoginContext>((state) => state.auth);
  // const loginContext = JSON.parse(loginContextString)
  const { username, isAuthenticated } = loginContext;

  useEffect(() => {
    document.title = "Posting Page | QBIT Technical Test";

    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  return (
    <div>
      <Post username={username} />
    </div>
  );
};

export default PostingPage;
