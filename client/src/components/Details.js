import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './DataProvider'
import Colors from './Colors'
import Sizes from './Sizes'
import DetailsThumb from './DetailsThumb'
import { Link } from 'react-router-dom'
import "../scss/Detail.scss"

export default function Details() {
    const { id } = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    const [products_02] = value.products_02
    const addCart_02 = value.addCart_02
    const [products_03] = value.products_03
    const addCart_03 = value.addCart_03
    const [products_04] = value.products_04
    const addCart_04 = value.addCart_04
    const [products_05] = value.products_05
    const addCart_05 = value.addCart_05

    const [index, setIndex] = useState(0)
    const imgDiv = useRef();


    const details = products.filter((product, index) => {
        return product._id === id
    })
    const details_02 = products_02.filter((product, index) => {
        return product._id === id
    })
    const details_03 = products_03.filter((product, index) => {
        return product._id === id
    })
    const details_04 = products_04.filter((product, index) => {
        return product._id === id
    })
    const details_05 = products_05.filter((product, index) => {
        return product._id === id
    })

    const handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }


    return (
        <>
            <div id="detail_product">
                {
                    details.map(product => (
                        <div className="details" key={product._id}>
                            <div className="img-container" onMouseMove={handleMouseMove}
                                style={{ backgroundImage: `url(${product.images[index]})` }} ref={imgDiv}
                                onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />

                            <div className="box-details">
                                <h2 title={product.title}>{product.title}</h2>
                                <h3>${product.price}</h3>
                                <Colors colors={product.colors} />
                                <Sizes sizes={product.sizes} />
                                <p>{product.description}</p>
                                <p>{product.content}</p>
                                <DetailsThumb images={product.images} setIndex={setIndex} />
                                <Link to="/cart" className="cart" onClick={() => addCart(product._id)}>
                                    Add to cart
                                </Link>
                            </div>

                        </div>
                    ))
                }

                {
                    details_02.map(product => (
                        <div className="details" key={product._id}>
                            <div className="img-container" onMouseMove={handleMouseMove}
                                style={{ backgroundImage: `url(${product.images[index]})` }} ref={imgDiv}
                                onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />

                            <div className="box-details">
                                <h2 title={product.title}>{product.title}</h2>
                                <h3>${product.price}</h3>
                                <Colors colors={product.colors} />
                                <Sizes sizes={product.sizes} />
                                <p>{product.description}</p>
                                <p>{product.content}</p>
                                <DetailsThumb images={product.images} setIndex={setIndex} />
                                <Link to="/cart" className="cart" onClick={() => addCart_02(product._id)}>
                                    Add to cart
                                </Link>
                            </div>

                        </div>
                    ))
                }

                {
                    details_03.map(product => (
                        <div className="details" key={product._id}>
                            <div className="img-container" onMouseMove={handleMouseMove}
                                style={{ backgroundImage: `url(${product.images[index]})` }} ref={imgDiv}
                                onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />

                            <div className="box-details">
                                <h2 title={product.title}>{product.title}</h2>
                                <h3>${product.price}</h3>
                                <Colors colors={product.colors} />
                                <Sizes sizes={product.sizes} />
                                <p>{product.description}</p>
                                <p>{product.content}</p>
                                <DetailsThumb images={product.images} setIndex={setIndex} />
                                <Link to="/cart" className="cart" onClick={() => addCart_03(product._id)}>
                                    Add to cart
                                </Link>
                            </div>

                        </div>
                    ))
                }

                {
                    details_04.map(product => (
                        <div className="details" key={product._id}>
                            <div className="img-container" onMouseMove={handleMouseMove}
                                style={{ backgroundImage: `url(${product.images[index]})` }} ref={imgDiv}
                                onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />

                            <div className="box-details">
                                <h2 title={product.title}>{product.title}</h2>
                                <h3>${product.price}</h3>
                                <Colors colors={product.colors} />
                                <Sizes sizes={product.sizes} />
                                <p>{product.description}</p>
                                <p>{product.content}</p>
                                <DetailsThumb images={product.images} setIndex={setIndex} />
                                <Link to="/cart" className="cart" onClick={() => addCart_04(product._id)}>
                                    Add to cart
                                </Link>
                            </div>

                        </div>
                    ))
                }

                {
                    details_05.map(product => (
                        <div className="details" key={product._id}>
                            <div className="img-container" onMouseMove={handleMouseMove}
                                style={{ backgroundImage: `url(${product.images[index]})` }} ref={imgDiv}
                                onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />

                            <div className="box-details">
                                <h2 title={product.title}>{product.title}</h2>
                                <h3>${product.price}</h3>
                                <Colors colors={product.colors} />
                                <Sizes sizes={product.sizes} />
                                <p>{product.description}</p>
                                <p>{product.content}</p>
                                <DetailsThumb images={product.images} setIndex={setIndex} />
                                <Link to="/cart" className="cart" onClick={() => addCart_05(product._id)}>
                                    Add to cart
                                </Link>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}