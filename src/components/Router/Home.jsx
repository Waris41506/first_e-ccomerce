import React from 'react';
import { useState } from 'react';
import "./Home.css"
import {FaSearch} from "react-icons/fa"
// import {FiStar} from "react-icons/fi"
// import {FaStar} from "react-icons/fa"
import ProductData from '../Data';
import Liked from '../Like';
import { Link } from 'react-router-dom';


const Home = ({addedCartCount}) => {
    
    const [search, SetSearch] = useState("")
    const [productinfo, SetProductIfon] = useState(ProductData)

     
    const cartigory = (item) => {
        const result = productinfo.filter(curent =>  curent.catigoris === item)
        SetProductIfon(result)
    };
    const filterSamsung = (item) => {
        const samResult = productinfo.filter(s => s.samsung === item)
        SetProductIfon(samResult)
        
    }

    // const handleCartCount = () => {
    //     alert("Cart added")
    // }

 
     

    return ( 
        <div className="contanier-home">
            <div className="page">
                    {/* <span onClick={handleNext}>{`<`}</span>
                    <span>{`>`}</span> */}
                    <h2 className='h2'>New Brands</h2>

                <div className="top">
                    <div className="scroll-box">
                            <img src="./images/pro_1.jpeg" alt="" />
                            <img src="./images/itel-2.jpg" alt="" />
                            <img src="./images/pro_6.jpeg" alt="" />
                            <img src="./images/pro_7.jpeg" alt="" />
                            <img src="./images/laptop-2.jpg" alt="" />
                            <img src="./images/pro_9.jpeg" alt="" />
                            <img src="./images/laptop-2.jpg" alt="" />
                            <img src="./images/itel-1.jfif" alt="" />
                            <img src="./images/sam-1.png" alt="" />
                            <img src="./images/sam-3.jpg" alt="" />
                            <img src="./images/sam-4.jpg" alt="" />
                            <img src="./images/sam-2.webp" alt="" />
                    </div>
                    <div className="scroll-box">
                            <img src="./images/pro_1.jpeg" alt="" />
                            <img src="./images/itel-2.jpg" alt="" />
                            <img src="./images/pro_6.jpeg" alt="" />
                            <img src="./images/pro_7.jpeg" alt="" />
                            <img src="./images/laptop-2.jpg" alt="" />
                            <img src="./images/pro_9.jpeg" alt="" />
                            <img src="./images/laptop-2.jpg" alt="" />
                            <img src="./images/itel-1.jfif" alt="" />
                            <img src="./images/sam-1.png" alt="" />
                            <img src="./images/sam-3.jpg" alt="" />
                            <img src="./images/sam-4.jpg" alt="" />
                            <img src="./images/sam-2.webp" alt="" />
                    </div>
                </div>
                <div className="down">
                    <div className="right">
                        <h3>All Categories</h3>
                        <p>Iphone</p>
                        <p onClick={() => filterSamsung("samsung")}>Samsung</p>
                        <p>Itel</p>
                        <p onClick={() => cartigory("cloth")}>Cloths</p>
                        <p>Laptop</p>
                        <p onClick={() => SetProductIfon(ProductData)}>All Brands</p>
                    </div>
                    <div className="left">
                        <div className='search'>
                        <input value={search} onChange={e => SetSearch(e.target.value)} type="text" placeholder='Search items...' />
                        <FaSearch size={25} color="#333" />
                        </div>
                        <div className="products">
                             
                            {productinfo.filter(find => {
                                if (search === "") {
                                    return find;
                                } else if (
                                    find.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                                ) {
                                    return find;
                                }
                                

                            }).map(product => (<div key={product.id}>
                            
                            <div className="img-box">
                                <Link to={`/view/${product.id}`}>
                                <img src={product.img} alt="" />
                                </Link>
                                <p className='p-name'>{product.name}</p>
                                <div className="box-icon">
                                    <p>${product.price}<sup>.99</sup></p>

                                    <div className="icon">
                                        <Liked/>
                                    </div>
                                </div>
                                <button onClick={addedCartCount}>Add To Cart</button>
                            </div>
                            
                            </div>))};
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;