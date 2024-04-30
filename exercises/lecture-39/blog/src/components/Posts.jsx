import { useState, useEffect, useContext, createContext } from "react";

const PostContext = createContext([]);

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
};

const Header = () => {
  const posts = useContext(PostContext);
  return (
    <header>
      {posts.map((post, index) => (
        <div key={index} className="mb-4 p-4 bg-white shadow-md rounded-lg">
          <PostTitle title={post.title} />
          <PostMain content={post.content} />
          <ReadMoreButton />
        </div>
      ))}
    </header>
  );
};

const PostTitle = ({ title }) => {
  return <h1 className="text-lg font-bold mb-2">{title}</h1>;
};

const PostMain = ({ content }) => {
  return <main className="text-sm">{content}</main>;
};

const ReadMoreButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
      Читати повністю
    </button>
  );
};

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://my-json-server.typicode.com/Viktoriya459/db/posts"
      );
      const posts = await response.json();
      setPosts(posts);
    }
    fetchData();
  }, []);

  return (
    <PostContext.Provider value={posts}>
      <Layout></Layout>
    </PostContext.Provider>
  );
};

export default Post;


