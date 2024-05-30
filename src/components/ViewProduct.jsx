import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ProductData from './Data';
import "./view.css"

const Views = () => {
    const [img, SetImg] = useState("")
    const [name, SetName] = useState("")
    const [price, SetPrice] = useState("")
    const [post, SetPost] = useState("")




    const {id} = useParams();

    useEffect(() => {
        const viewItems = ProductData.find(v => v.id === parseInt(id))
        SetImg(viewItems.img)
        SetName(viewItems.name)
        SetPrice(viewItems.price)
        SetPost(viewItems.post)
    },[id]);

    


    return ( 

        <div className='view-contanier'>
            
        
            <div className="img-view">
             
            <img src={img} alt="Product Images" />
           
            </div> 
            <div className="info">
            <h3>{name}</h3>
            <p>{price}<sup>.99</sup></p>
            <h4>

            <Link to="/">{`<< Back to Home`}</Link>
            </h4>

            <h2>{post}</h2>
            </div>           

        </div>    
     );
}
 
export default Views;