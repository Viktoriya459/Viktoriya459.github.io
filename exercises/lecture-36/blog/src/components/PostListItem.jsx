import {useState, useEffect} from "react"

function PostListItem({item, user}) {
    const [post, setPost] = useState({});
    const [author, setAuthor] = useState({});
    const toDate = data => new Date(data);
    const fetchPost = () => {
        setPost({...item});
        setAuthor({...user})
    }
    useEffect(() => {
        fetchPost()
    }, []);
    return (
        <article>
            <div>
                <span>{toDate(post.datePublished).toDateString()} </span>
                <span>Comments: {post.numComments} </span>
            </div>
            <h2><a href="#">{post.title}</a></h2>
            <div>
                <img src={post.cover} alt={post.title}/>
                <p>{post.content}</p>
            </div>
            <div>
                <span>Author: {author.firstName + " " + author.lastName} </span>
                <a href="#">Read more...</a>
            </div>
        </article>
    )
}

export default PostListItem