import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        console.log(title, price, desc)
        axios.post('http://localhost:8000/api/products', {
            title: title,
            price: price,
            description: desc
        })
            .then(res=>console.log(res))
            .catch(err=>console.log("not connected to db", err))
    }
    //onChange to update title and price
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;
