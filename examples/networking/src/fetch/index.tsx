import { root, useEffect, useState } from "@lynx-js/react";
import "./index.scss";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [isFetching, setFetching] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      const json = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      ).then((res) => res.json());
      setPosts(json);
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <scroll-view scroll-y className="scroll-view">
      {isFetching ? <text className="scroll-view__loading">Loading...</text> : (
        posts.map((post) => (
          <view id={`${post.id}`} className="scroll-view__post">
            <text>{`${post.id} : ${post.title}`}</text>
          </view>
        ))
      )}
    </scroll-view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
