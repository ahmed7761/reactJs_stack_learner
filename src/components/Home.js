import React from 'react'
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <h1>Home route by { props.name } </h1>
            <Link to='posts/post-1' >Post 1</Link>
            <Link to='posts/post-2' >Post 2</Link>
            <Link to='posts/post-3' >Post 3</Link>
            <Link to='posts/post-4' >Post 4</Link>
        </div>
    )
}

export default Home
