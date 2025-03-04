// write the book component code here
import React  from "react";

const Bookcard=({book})=>{
    return(
        <div>
            
            <h1>Book List</h1>
            <img>Image:{book.image}</img>
            <h2>Name:{book.name}</h2>
            <h3>Content:{book.genre}</h3>
            <h1>Authour:{book.author}</h1>
            
        </div>
    )
}

export default Bookcard