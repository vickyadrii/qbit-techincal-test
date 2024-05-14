import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import PostForm from "./PostForm";
import { PostData } from "@/types";
import { PlusIcon } from "lucide-react";
import ListPosts from "./ListPosts";

type PostProps = {
  username?: string;
};

const Post: React.FC<PostProps> = ({ username }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostData[]>([]);

  const handleOnOpenChange = () => {
    setIsOpen(!isOpen);
  };

  const handleAddPost = (data: PostData) => {
    setPosts([...posts, data]);

    handleOnOpenChange();
  };

  const handlePublishedPost = (id: number, checked: boolean) => {
    setPosts(
      posts.map((post, index) => {
        if (index === id) {
          return { ...post, posting: checked ? "1" : "0" };
        }
        return post;
      })
    );
  };

  useEffect(() => {
    const list = localStorage.getItem("posts");
    const parsedlist = list ? JSON.parse(list) : [];
    if (parsedlist.length !== 0) {
      setPosts(parsedlist);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="flex flex-col gap-10">
      <div className="p-5 border-b flex justify-between">
        <h2>Posting</h2>
        <p>
          Welcome back, <span className="font-bold">{username}!</span>
        </p>
      </div>
      <Dialog open={isOpen} onOpenChange={handleOnOpenChange}>
        <DialogTrigger>
          <Button className="flex items-center gap-1">
            <PlusIcon /> Add Post
          </Button>
        </DialogTrigger>
        <DialogContent>
          <PostForm handleAddPost={handleAddPost} />
        </DialogContent>
      </Dialog>

      <ListPosts posts={posts} handlePublishedPost={handlePublishedPost} />
    </div>
  );
};

export default Post;
