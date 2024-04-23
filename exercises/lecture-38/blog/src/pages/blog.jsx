// Використовуючи хуки useContext, createContext, потрібно створити:

// контекст BlogContext
// компонент Layout
// компонент Header
// компонент BlogInfo
// Підключити до сторінки компонент Posts from '../components/Posts' Стилізуйте сторінку, використовуючи Tailwind CSS
import {useContext, createContext} from "react"
import Posts from '../components/Posts'
const BlogContext = createContext({});
const Layout = ({ children }) => {
    return <div className="layout">{children}</div>;
  };
const Header = () => {const post = useContext(BlogContext)
    return <header>{blogContext}</header>;
};
const BlogInfo = () => {const post = useContext(BlogContext)
    return <main>{blogContext}</main>;
};
function Blog() {

    const blogName = "Назва вашого блогу";
  
    return (
      <BlogContext.Provider value={blogName}>
        <Layout>
        <Header />
        <BlogInfo />
        <Posts />
        </Layout>
      </BlogContext.Provider>
    );
  
  }

export default Blog;
  