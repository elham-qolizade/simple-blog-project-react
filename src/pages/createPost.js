import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './createpost.css';

export default function Blog() {
    // Use useState to define state variables
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // a function to receive posts from the API
    const fetchPosts = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    };

    // a function to add a new post
    const addPost = () => {
        const newPost = {
            title,
            body,
        };

        axios
            .post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then((response) => {
                console.log('New post added:', response.data);
                //Update status by adding new post to 'posts' array
                setPosts((prevPosts) => [...prevPosts, response.data]);
                // Set title and text values ​​to default
                setTitle('');
                setBody('');
            })
            .catch((error) => {
                console.error('Error adding post:', error);
            });
    };
    // a function to delete a post
    const deletePost = (postId) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(() => {
                console.log('Post deleted');
                // Update status by deleting the desired post
                setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
            });
    };
    // a function to control form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addPost();
    };
    // a function to control form whith keypress 
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addPost();
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>لیست پست‌ها</h2>
            {posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <button className="delete-post-btn" onClick={() => deletePost(post.id)}>
                                حذف پست
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>هیچ پستی وجود ندارد</p>
            )}
            <form onSubmit={handleSubmit}>
                <h2>افزودن پست جدید</h2>
                <label htmlFor="title">عنوان</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="body">متن</label>
                <textarea
                    rows="10"
                    cols="30"
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    onKeyPress={handleKeyPress}
                ></textarea>
                <button type="submit">ثبت</button>
            </form>
        </div>
    );
}