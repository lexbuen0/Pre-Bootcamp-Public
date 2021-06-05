import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router'
const ProductList = props => {
    
    return (
        <div>
            {props.products.map((product, idx)=>{
                return (
                    <p key={idx}>
                        <Link to={`/products/${product._id}`} >{product.title}</Link>
                        <hr />
                    </p>)
            })}
        </div>
    )
}

export default ProductList;

