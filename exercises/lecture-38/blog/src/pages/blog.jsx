import { useContext, createContext } from 'react';
import Posts from '../components/Posts';

const BlogContext = createContext();

function Layout({ children }) {
    return (
    <div>
        <Header />
        <main>
        {children}
        </main>
    </div>
    );
}
function BlogInfo() {
    const blogName = useContext(BlogContext);
    return <span>{blogName}</span>;
}
function Header() {
    return (
        <div>
            <div>
                <a href="#">
                    <BlogInfo />
                </a>
            </div>
            <a href="#">See All</a>
        </div>
    );
}
function Blog() {
    const blogName = "Назва вашого блогу";
        return (
            <BlogContext.Provider value={blogName}>
            <Layout>
            <Posts />
            </Layout>
            </BlogContext.Provider>
        );
    }
export default Blog