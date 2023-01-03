import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])
    return (
        <div className='productsWrapper'>
            {products.map((ele,key)=>
            <div className='card' key={key}>
                <img src={ele.image} alt=""/>
                <h4>{ele.title}</h4>
                <h5>{ele.price}</h5>
                <button className='btn'>add to cart</button>
            </div>
            )}
            
        </div>
    )
}

export default Products