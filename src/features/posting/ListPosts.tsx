import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";
import { PostData } from "@/types";

interface listPostsProps {
  posts: PostData[];
  handlePublishedPost: (index: number, checked: boolean) => void;
}

const ListPosts = ({ posts, handlePublishedPost }: listPostsProps) => {
  return (
    <div className="flex flex-col gap-4 p-5">
      {posts.length !== 0 ? (
        posts.map((data, index) => (
          <Card
            key={index}
            className={`${data.posting === "0" ? "bg-gray-100" : "bg-white"} transition-all duration-200 ease-out`}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  <div className="flex items-center gap-4">
                    <Checkbox
                      checked={data.posting === "1"}
                      onCheckedChange={(value: boolean) => handlePublishedPost(index, value)}
                      className="w-6 h-6"
                    />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg">{data.title}</h2>
                      <p className="text-sm font-normal text-gray-700">{data.content}</p>
                    </div>
                  </div>
                </CardTitle>
              </div>
            </CardHeader>
          </Card>
        ))
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default ListPosts;
