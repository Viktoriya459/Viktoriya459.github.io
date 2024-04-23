import {useState, useEffect} from "react"

function Post() {
    const [post, setPost] = useState({});
    const [likes, setLikes] = useState(0);
   
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://my-json-server.typicode.com/Viktoriya459/db/posts/1');
            const postData = await response.json();
            console.log(postData);
            setPost(postData);
        }
        fetchData();
        }, []);
  
    function likeThis() {
      setLikes(likes + 1);
    }
    return (

            <article className="post">
                <div className="cover-container">
                    <img src={post.cover} alt={post.title} />
                </div>
                <div className="post-footer">
                    <h3>
                     {post.id}.{ post.title}
                    </h3>
                    <p>{post.content} <a href="#">Read more...</a></p>
                    
                    <button id="like" onClick={likeThis}>
                        Like this post <strong>{likes}</strong>
                    </button>
                </div>
            </article>

    );
}

export default Post;





