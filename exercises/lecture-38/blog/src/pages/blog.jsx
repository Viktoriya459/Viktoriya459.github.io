import { useContext, createContext } from 'react';
import Posts from '../components/Posts';

// Використовуючи хуки useContext, createContext, потрібно створити:

// контекст BlogContext
// компонент Layout
// компонент Header
// компонент BlogInfo
// Підключити до сторінки компонент Posts from '../components/Posts' 
// Стилізуйте сторінку, використовуючи Tailwind CSS

const BlogContext = createContext("");

function Layout({ children }) {
    return (
        <div className="max-w-screen-xl mx-auto p-1">
            <Header />
            <main>
            {children}
            </main>
        </div>
    );
}
    
function BlogInfo() {
    const blogName = useContext(BlogContext);
    return <span className="text-3xl font-bold">{blogName}</span>;
}

function Header() {
    return (
        <div className="border-b-2 border-indigo-600 mb-5 flex justify-between text-sm">
            <div className="text-indigo-600 flex items-center pb-2 pr-2 uppercase">
                <a href="#" className="font-semibold inline-block">
                    <BlogInfo />
                </a>
            </div>
            <a href="#" className="text-1xl">See All</a>
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