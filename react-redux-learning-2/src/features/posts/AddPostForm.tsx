import { useState } from "react"
import { useDispatch } from "react-redux"
import { postAdded } from "./PostSlice"
import './AddPostForm.css'

const AddPostForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [img, setImg] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange =  (e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const onAuthorChange =  (e:React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)
    const onContentChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)
    const onImgChange =  (e:React.ChangeEvent<HTMLInputElement>) => setImg(e.target.value)

    const clearContent = () => {
        setTitle('')
        setAuthor('')
        setImg('')
        setContent('')
    }

    const onSavePostClicked = () => {
        if (title && content){
            dispatch(
                postAdded(title, author, img,  content)
            )
            clearContent()
        }
    }

    return(
        <section>
            <h2>Add a new book</h2>
            <hr />
            <form className="addBookForm">
                <fieldset>
                    <label htmlFor="bookTitle">Title</label>
                    <input
                        type="text" 
                        id="bookTitle"
                        name="bookTitle"
                        value={title}
                        onChange={onTitleChange}
                        />
                </fieldset>
                <fieldset>
                <label htmlFor="bookAuthor">Author</label>
                <input
                    type="text"
                    id="bookAuthor"
                    name="bookAuthor"
                    value={author}
                    onChange={onAuthorChange}
                    />
                </fieldset>
                <fieldset>
                <label htmlFor="bookCover">Cover Image</label>
                <input
                    type="text"
                    id="bookCover"
                    name="bookCover"
                    value={img}
                    onChange={onImgChange}
                    />
                </fieldset>
                <fieldset>
                <label htmlFor="postContent">Summery</label>
                <textarea 
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                    />
                </fieldset>
                <fieldset>
                <label/>
                <button 
                    type="button" 
                    onClick={onSavePostClicked}>Save Book</button>
                 </fieldset>
            </form>
        </section>
    )
}

export default AddPostForm