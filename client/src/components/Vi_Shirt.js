import React, { useContext } from 'react'
import { DataContext } from './DataProvider'
import { Link } from 'react-router-dom'
import '../scss/Product.scss'
import { Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

export default function Vi_Shirt() {
    const value = useContext(DataContext)
    const [products_05] = value.products_05
    const addCart_05 = value.addCart_05
    const navigate = useNavigate();
    return (
        <Row>
            <div id="dt-back">
                <p onClick={() => navigate(-1)}>go back</p>
                <p onClick={() => navigate(-1)}>Home</p>

                <div className="search_product">
                    <h1>"Shirt "</h1>
                </div>

            </div>
            <div className="products">
                {
                    products_05.map(product => (
                        <div className="card" key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                <img src={product.images[0]} alt="" />
                            </Link>
                            <div className="box">
                                <h3 title={product.title}>
                                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                                </h3>
                                <p>{product.description}</p>
                                <h4>${product.price}</h4>
                                <button onClick={() => addCart_05(product._id)}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Row>
    )
}