import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {
        id: '1', 
        title: 'Make Time',
        author: 'Jake Knapp, John Zeratsky',
        content: 'Make Time is a take on how to avoid distractions and be more focused on what\'s really important from two of the people who helped to develop some of the biggest distractions, Gmail and YouTube. This book is written in a very accessible manner including some snarky footnotes that help keep the reader engaged.',
        img: 'https://m.media-amazon.com/images/I/81LXfBoLlCL.jpg'
    },
    {
        id: '2', 
        title: 'The Pathless Path', 
        author: 'Paul Millard',
        content: 'Paul\'s story is so relatable, genuine and packed with lessons that “exceptional” stories can\'t get across. It\'s just real. It makes you question what you\'re growing, being productive or working obscene hours for. Is it something you\'ve been “scripted” to chase or an ideal life which you know you want?',
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642482295i/60151185.jpg'
    },
    {
        id: '3', 
        title: 'War of Art', 
        author: 'Steven Pressfield',
        content: 'Overall, the book is more motivational as opposed to teaching any particular skill or even telling a story.  Although Steven Pressfield does give some personal anecdotes about his own struggles with writing, odd jobs he\'s worked, and more.',
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1574272133i/1319.jpg'
    },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer (state, action){ // This will create a function postAdded in the reducers
                state.push(action.payload) // state.push will not Mutate the state
            },
            prepare(title, author, img,  content){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        author,
                        content,
                        img
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions // Export Post Added Function

export default postsSlice.reducer
