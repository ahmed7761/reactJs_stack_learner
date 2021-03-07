import React from 'react'
import {Link} from "react-router-dom";

const Post = ({match}) => {
    return (
        <div>
            <h1>Post route {match.params.postId}</h1>
            <Link to='/' > Home </Link>
        </div>
    )
}

export default Post
