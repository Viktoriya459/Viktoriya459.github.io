import {useState, useEffect, useContext, createContext} from "react"
// Потрібно створити контекст PostContext Потрібно створити компонент Layout 
// Потрібно створити компонент Header Потрібно створити компонент PostTitle Потрібно створити компонент PostMain
const PostContext = createContext({});

  const Layout = ({children}) => {
        return (
            <div>
                <Header />
                <main>
                {children}
                </main>
            </div>
        )
    }
  
const Header = () => {
  const post = useContext(PostContext);
  return (
  <header>
    <PostTitle />
    <PostMain />
    </header>
    )
};

const PostTitle = () => {
  const post = useContext(PostContext);
  return (
    <h1>{post.title}</h1>
  );
};

const PostMain = () => {
  const post = useContext(PostContext);
  return (
    <main>{post.content}</main>
    );
};

const Post = () => {
  const [post, setPost] = useState({});
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://my-json-server.typicode.com/Viktoriya459/db/posts/1');
        const post= await response.json();
        setPost(post);
      }
      fetchData();
    }, []);
  
    return (
      <PostContext.Provider value={post}>
        <Layout>
         
        </Layout>
      </PostContext.Provider>
    );
  };
  
  export default Post;





