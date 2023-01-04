import React, { useEffect } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, STATUS } from '../store/productSlice'
const Products = () => {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    const addProduct = (product) => {
        dispatch(add(product))
    }

    if (status === STATUS.LOADING) {
        return <h2>Loading...</h2>
    }
    if (status === STATUS.ERROR){
        return <h5>Data Not found!</h5>
    }
    return (
        <div className='productsWrapper'>
            {products.map((ele, key) =>
                <div className='card' key={key}>
                    <img src={ele.image} alt="" />
                    <h4>{ele.title}</h4>
                    <h5>{ele.price}</h5>
                    <button onClick={() => addProduct(ele)} className='btn'>add to cart</button>
                </div>
            )}

        </div>
    )
}

export default Products