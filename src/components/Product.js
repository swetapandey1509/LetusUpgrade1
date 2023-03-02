import React from "react";
import "./Product.css";

const Product = (props)=>{

    return(
        <div className="div">
            <div className="sub">
                <h2>Title: {props.title}</h2>
                <h2>Price: {props.price}</h2>
                <h2>Decription: {props.desc}</h2>
            </div>
        </div>
        
    )
}
export default Product;