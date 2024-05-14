import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserData } from "@/types";
// import PostForm from "@/features/posting/PostForm";
import Post from "@/features/posting/Post";

const PostingPage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
  });

  const { username } = userData;

  useEffect(() => {
    document.title = "Posting Page | QBIT Technical Test";

    const userDataString = localStorage.getItem("user_data");
    if (userDataString) {
      const data = JSON.parse(userDataString);
      setUserData(data);
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      {/* <PostForm username={username} /> */}
      <Post username={username} />
    </div>
  );
};

export default PostingPage;
