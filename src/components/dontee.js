import React, { useState } from 'react';




const DonTee = () => {
     const [count, setCount] = useState(0);

     const handleIncrement = () => {
        setCount(count + 1)
     }


    return (
        <div>
            <h1>{count}</h1>
            <button style={{ color: 'blue',backgroundColor:  }} 
            onClick={handleIncrement}>INCREMENT</button>
        </div>
    );
}
 
export default DonTee;