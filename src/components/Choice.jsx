import React, { useEffect, useState } from 'react';
/* import data from './../data'; */
import axios from 'axios';

const Choice = () => {
    const url='https://6f07e8d1-2451-473c-a564-c65e7e1bf5b7.mock.pstmn.io/products'
   const [products, setProducts] = useState([])
   useEffect(() =>{
        axios.get(url)
        .then((result) =>{
        const products=result.data.products;
        setProducts(products)
    
        }).catch((err) =>{
        console.log(err)
        })
   }, []) 
   
    return (
        <div className='choice'>
            <h2><span>생생하게 들리는 차이.</span> 풍부한 고품질 사운드를 원한다면 필연적인 선택.</h2>
            <ul>
                {
                   products.map((product) =>{
                    return (
                        <li key={product.id}>
                            <img src={product.img} alt={product.title} />
                            <h5>{product.free} &nbsp;</h5>
                            <h3>{product.title}</h3>
                            <p className='price'>₩ {product.price}</p>
                        </li>
                    )
                  }) 
                }
            </ul>
        </div>
    );
};

export default Choice;