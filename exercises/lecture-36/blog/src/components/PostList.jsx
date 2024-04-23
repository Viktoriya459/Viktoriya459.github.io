// import { useState, useEffect } from "react";
import PostListItem from './PostListItem'
import {useData} from '../hooks/useData';

const PostList = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [posts, setPosts] = useState([]);
    // const [authors, setAuthors] = useState([]);
    const findById = id => authors.find(item => item.id == id)
    
    const baseUrl = 'https://my-json-server.typicode.com/couchjanus/db/';

    const posts = useData(`${baseUrl}/posts`);
    const authors = useData(`${baseUrl}/authors`);

    // useEffect(() => {
    //     const dataFetch = async () => {
    //         const data = await (
    //             await fetch(`${baseUrl}/posts`)
    //         ).json();
    //         setPosts(data);
    //         setIsLoading(false);
    //     }
    //     const fetchUser = async () => {
    //         const data = await (
    //             await fetch(`${baseUrl}/authors`)
    //         ).json();
    //         setAuthors(data);
    //         setIsLoading(false);
    //     }
       
    //     dataFetch();
    //     fetchUser();
    // }, []);
    // const dataFetch = async () => {
    //     const data = await (
    //         await fetch('https://jsonplaceholder.typicode.com/posts')
    //     ).json();
    //     setPosts([...posts, data]);
    // }
    return (
        <>
        {
            !posts? (
                <div>
                    <p>Data is loading...</p>
                    {/* <button onClick={
                        () => {
                            dataFetch()
                            setIsLoading(false)
                        }
                    }>Get Data</button> */}
                </div>
            )
        
            :
            (
                <section>
                    <h2>Our Blog</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eaque nulla officiis nihil voluptate cum natus assumenda, pariatur commodi! 
                    Possimus quo dolore impedit necessitatibus voluptatum consectetur? Perspiciatis minus reiciendis quasi.</p>
                    {/* {JSON.stringify(posts)} */}
                    <div>
                        {
                            posts.map((post)=>
                            <PostListItem item={post} key={post.id} user={findById(post.authorId)}/>
                            )}
                    </div>
                </section>
            )
        }    
        
        </>
    )
}

export default PostList