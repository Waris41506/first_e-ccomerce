import React, { useState, useEffect } from 'react';
// import "./Home.css"
import {FiStar} from "react-icons/fi"
import {FaStar} from "react-icons/fa"

const Liked = () => {
    const [love, SetLove] = useState(false)
    const [love2, SetLove2] = useState(false)
    const [love3, SetLove3] = useState(false)
    const [love4, SetLove4] = useState(false)
    const [love5, SetLove5] = useState(false)


    const handleLike = () => {
        SetLove(true)
        SetLove2(true)
        SetLove3(true)
        SetLove4(true)
        SetLove5(true)
    } 
    const handleLike2 = () => {
        SetLove(true)
        SetLove2(true)
        SetLove3(true)
        SetLove4(true)
        
    } 
    const handleLike3 = () => {
        SetLove(true)
        SetLove2(true)
        SetLove3(true)
        
    } 
    const handleLike4 = () => {
        SetLove(true)
        SetLove2(true)
        
    } 

    useEffect(() => {
      if(SetLove && SetLove2){
        SetLove(true)
        SetLove2(true)
      }
    }, [])
    
 

    return ( 
        <div>
            <div className="box-icon">
                                
                <div className="icon">
                    <div onClick={() => SetLove(!love)}>{love ?  <FaStar size={20} color="orangered" /> :  <FiStar size={20} color="orangered" />}</div>
                    <div onClick={handleLike4}>{love2 ?  <FaStar size={20} color="orangered" /> :  <FiStar size={20} color="orangered" />}</div>
                    <div onClick={handleLike3}>{love3 ?  <FaStar size={20} color="orangered" /> :  <FiStar size={20} color="orangered" />}</div>
                    <div onClick={handleLike2}>{love4 ?  <FaStar size={20} color="orangered" /> :  <FiStar size={20} color="orangered" />}</div>
                    <div onClick={handleLike}>{love5 ?  <FaStar size={20} color="orangered" /> :  <FiStar size={20} color="orangered" />}</div>

                </div>
             </div>
        </div>
     );
}
 
export default Liked;