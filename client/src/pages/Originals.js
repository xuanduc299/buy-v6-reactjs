import React, { useContext } from 'react'
import video6 from '../img/video-sneaker-06.mp4'
import { Row } from 'reactstrap'
import { DataContext } from '../components/DataProvider'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'
import "../scss/Originals.scss"

export default function Originals() {
    const value = useContext(DataContext)
    const [products_06] = value.products_06
    const addCart_06 = value.addCart_06
    const navigate = useNavigate();

    return (
        <Row>
            <div id="home">
                <video id="video-3"
                    src={video6}
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    muted
                    loops
                > something</video>
            </div>

            <div id="dt-back-or">
                <p onClick={() => navigate(-1)}>go back</p>
                <p onClick={() => navigate(-1)}>Home</p>

                <div className="search_product">
                    <h1>"ORIGINALS "</h1>
                </div>

            </div>

            <div id="products_06">
                <div className="bd_products"></div>
                {
                    products_06.map(product => (
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
                                {/* <button onClick={() => addCart_02(product._id)}>
                                Add to cart
                            </button> */}
                            </div>
                        </div>
                    ))
                }
            </div>


        </Row>
    )
}
