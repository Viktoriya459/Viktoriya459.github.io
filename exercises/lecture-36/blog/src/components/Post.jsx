import {useState, useEffect} from "react"
// Використовуючи хук useState, виконати ініціалізацію значень стану та метода зміни стану post, setPost, 
// передавши в useState порожній масив.

// Напишіть функцію fetchData(), що отримує дані з 'https://my-json-server.typicode.com/<ваш власний акаунт 
// на github>/db/posts/1', використовуючи метод fetch. Зробіть функцію асинхронною.

// Використовуючи хук useEffect, викличте функцію fetchData(), передавши її як перший аргумент хука useEffect. 
// Передайте порожній масив як другий аргумент хука useEffect.

// Напишіть функцію likeThis(), що змінює стан змінної likes, збільшуючи її на 1. Використовуючи хук useEffect, 
// напишіть обробку події натискання на кнопку з ідентифікатором like, що викликає функцію likeThis.
function Post() {
    const [post, setPost] = useState({});
    const [likes, setLikes] = useState(0);
   
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://my-json-server.typicode.com/Viktoriya459/db/posts/1');
            const postData = await response.json();
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





