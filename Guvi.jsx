import React from 'react'
import { useParams } from 'react-router-dom'

function Guvi() {
    const { GuviItems }= useParams();
    const GuviBlogs = {
        All: <a href= "https://www.guvi.in/blog/">Click to visit blog</a>,
        FullStack:<a href="https://www.guvi.in/blog/category/full-stack-development/">Click to visit FullStack</a>,
        DataScience:<a href="https://www.guvi.in/blog/category/data-science/"></a>
    };
    const info = GuviBlogs[GuviItems];
  return (
    <div>
        <h3>{GuviItems}</h3>
        <p>{info}</p>
    </div>
  )
}

export default Guvi