import { Outlet, Link } from 'react-router-dom';
import "../index.css"

export default function Home() {
    return (
        <>
            <div className="flex">
                <div className="sidebar bg-gray-800 h-screen py-8 px-20">
                    <h1 className="text-white text-2xl font-bold mb-4">Blog</h1>
                    
                    <nav className="mt-4">
                        <ul>
                            <li>
                                <Link to={`/blog`} className="text-white hover:text-gray-300">Blog</Link>
                            </li>
                            <li>
                                <Link to={`/about`} className="text-white hover:text-gray-300">About</Link>
                            </li>
                            <li>
                                <Link to={`/contact`} className="text-white hover:text-gray-300">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="detail" className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
