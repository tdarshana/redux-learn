import { useSelector } from "react-redux"
import { selectAllPosts } from "./PostSlice"
import './PostList.css'

const PostsList = () => {

    const posts = useSelector(selectAllPosts)
    const renderedPosts = posts.map( post => (
        <article key={post.id}>
            <div className="post-container">
                <div className="row-cover">
                    <img src={post.img} alt="cover-image" className="cover-image"></img>
                </div>
                <div className="row-text">
                    <p><span className="book-title">{post.title}</span><span className="author-text">&nbsp; by <b>{post.author}</b></span></p>
                    <p>{post.content.substring(0, 250)} ...</p>
                </div>
            </div>
        </article>
    ))

    return (
        <section>
            <h2>Books</h2>
            <hr />
            {renderedPosts}
        </section>
    )
}

export default PostsList