import React, { useContext } from 'react'
import video3 from '../img/video-sneaker-02.mp4'
import video2 from '../img/video-sneaker-01.mp4'
import video4 from '../img/video-sneaker-03.mp4'
import video5 from '../img/video-sneaker-04.mp4'
import video6 from '../img/video-sneaker-05.mp4'
import { Row } from 'reactstrap'
import "../scss/Product.scss"
import { DataContext } from '../components/DataProvider'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import img7 from '../img/whathot-02.jpg'
import img8 from '../img/whathot-03.jpg'
import img9 from '../img/whathot-04.jpg'
import img10 from '../img/whathot-05.jpg'
import img11 from '../img/whathot-06.jpg'

export default function Home() {

    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    // const [products_01] = value.products_01
    // const addCart_01 = value.addCart_01
    const [products_03] = value.products_03
    const addCart_03 = value.addCart_03
    const [products_04] = value.products_04
    const addCart_04 = value.addCart_04

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    function handleShowhide_01() {
        document.getElementById("product_01").style.display = "flex"
        document.getElementById("product_02").style.display = "none"
        document.getElementById("product_03").style.display = "none"
    }

    function handleShowhide_02() {
        document.getElementById("product_01").style.display = "none"
        document.getElementById("product_02").style.display = "flex"
        document.getElementById("product_03").style.display = "none"

    }

    function handleShowhide_03() {
        document.getElementById("product_01").style.display = "none"
        document.getElementById("product_02").style.display = "none"
        document.getElementById("product_03").style.display = "flex"
    }

    // const keyword = match.params.keyword

    return (
        <Row>
            <div id="home">
                <video id="video-3"
                    src={video3}
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    muted
                    loops
                > something</video>
            </div>



            <div id="list-item-hot">
                <div className="tt-text">
                    NOW POPULAR IN WOMEN'S
                </div>
                <div className="tt-list-item">
                    <ul>
                        <li><Link to={`/vi/search/giay`}>GIAY</Link></li>
                        <li><Link to={`/vi/search/ao`}>AO</Link></li>
                        <li><Link to={``}>DEP</Link></li>
                        <li><Link to={``}>STAN SMITH</Link></li>
                        <li><Link to={``}>BALO</Link></li>
                    </ul>
                </div>
            </div>


            <div id="col-4">
                <div className="col-text">
                    <hr />
                    <ul>
                        <li onClick={() => handleShowhide_01()}>Women</li>
                        <li onClick={() => handleShowhide_02()}>Men</li>
                        <li onClick={() => handleShowhide_03()}>Kids</li>
                    </ul>
                    <hr />
                </div>

                <div id="product_01">
                    <Carousel breakPoints={breakPoints}>
                        {
                            products_04.map(product => (
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
                                        <button onClick={() => addCart_04(product._id)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <div id="product_02">
                    <Carousel breakPoints={breakPoints}>
                        {
                            products.map(product => (
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
                                        <button onClick={() => addCart(product._id)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <div id="product_03">
                    <Carousel breakPoints={breakPoints}>
                        {
                            products_03.map(product => (
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
                                        <button onClick={() => addCart_03(product._id)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>

            {/* end col 3 */}



            {/* product1 */}

            <div id="col-1">
                <div className="col-title-product">
                    <h1>STILL INTERESTED?</h1>
                </div>
                <div id="product">
                    <Carousel breakPoints={breakPoints}>
                        {
                            products.map(product => (
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
                                        <button onClick={() => addCart(product._id)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>


            {/* What hot */}

            <div id="whathot">
                <div className="wth_text">
                    <h1>WHAT'S HOT</h1>
                    <p>Hot stuff, don't miss it !</p>
                </div>
                <div className="wth_container">
                    <div className="wth_row">
                        <div className="col_wth_6">
                            <div className="img_wth_6">
                                <img src={img7} alt="" />
                            </div>
                            <div className="title_col">
                                <h3>4DFWD X PARLEY. TAKE ACTION FOR OUR OCEANS.</h3>
                                <p>Đừng chỉ nói suôn. Hãy thực hiện.</p>

                            </div>
                            <p className="btn_buy"><Link to={`#`}>BUY NOW</Link></p>
                        </div>
                        <div className="col_wth_6">
                            <div className="img_wth_6">
                                <img src={img8} alt="" />
                            </div>
                            <div className="title_col">
                                <h3>ADISTAR CS</h3>
                                <p>Chuẩn bị, sẵn sàng, xuất phát. Chậm mà chắc.</p>

                            </div>
                            <p className="btn_buy"><Link to={`#`}>BUY NOW</Link></p>
                        </div>
                        <div className="col_wth_6">
                            <div className="img_wth_6">
                                <img src={img9} alt="" />
                            </div>
                            <div className="title_col">
                                <h3>MY RETROPY</h3>
                                <p>I am free to choose who I am.​</p>
                            </div>
                            <p className="btn_buy"><Link to={`#`}>SHOP NOW</Link></p>
                        </div>
                        <div className="col_wth_6">
                            <div className="img_wth_6">
                                <img src={img10} alt="" />
                            </div>
                            <div className="title_col">
                                <h3>adidas Originals by Parley</h3>
                                <p>Always iconic, now redesigned with Parley Ocean Plastic.​</p>
                            </div>
                            <p className="btn_buy"><Link to={`#`}>SHOP NOW</Link></p>
                        </div>
                    </div>
                </div>
            </div>


            {/*  NEW ARRIVALS */}

            <div id="col-2">
                <div className="col-title-product">
                    <h1>
                        NEW ARRIVALS
                    </h1>
                </div>
                <div id="product">
                    <Carousel breakPoints={breakPoints}>
                        {
                            products_03.map(product => (
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
                                        <button onClick={() => addCart(product._id)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>


            {/* Trending */}

            <div id="whathot">
                <div className="wth_text">
                    <h1>TRENDING</h1>
                </div>
                <div className="wth_container">
                    <div className="wth_row">
                        <div className="col_wth_6">
                            <div className="img_wth_6">
                                <video
                                    src={video4}
                                    autoPlay={"autoplay"}
                                    preLoad="auto"
                                    loop
                                > something</video>
                            </div>
                            <div className="title_col">
                                <h3>SUPPORT IS EVERYTHING</h3>
                                <p>Áo ngực thể thao cho mọi kích cỡ và chuyển động.</p>

                            </div>
                            <p className="btn_buy"><Link to={`#`}>BUY NOW</Link></p>
                        </div>
                        <div className="col_wth_6">
                            <div className="img_wth_6">
                                <video
                                    src={video5}
                                    autoPlay={"autoplay"}
                                    preLoad="auto"
                                    loop
                                > something</video>
                            </div>
                            <div className="title_col">
                                <h3>TRIPLE BLACK COLLECTION</h3>
                                <p>Dark mode enabled.</p>

                            </div>
                            <p className="btn_buy"><Link to={`#`}>BUY NOW</Link></p>
                        </div>
                        <div className="col_wth_6">
                            <div className="img_wth_6">
                                <img src={img11} alt="" />
                            </div>
                            <div className="title_col">
                                <h3>MY RETROPY</h3>
                                <p>I am free to choose who I am.​</p>
                            </div>
                            <p className="btn_buy"><Link to={`#`}>SHOP NOW</Link></p>
                        </div>
                        <div className="col_wth_6">
                            <div className="img_wth_6">
                                <video
                                    src={video6}
                                    autoPlay={"autoplay"}
                                    preLoad="auto"
                                    loop
                                > something</video>
                            </div>
                            <div className="title_col">
                                <h3>SUPREME ENERGY RETURN. 360° FIT IMPROVEMENT.</h3>
                                <p>Làm chủ năng lượng với Ultraboost 22.​</p>
                            </div>
                            <p className="btn_buy"><Link to={`#`}>SHOP NOW</Link></p>
                        </div>
                    </div>
                </div>
            </div>



            {/* A NEW GENERATION  */}

            <div id="col-3">
                <div className="card-3 card-length-3">
                    {/* <Link> */}
                    <div className="row-card-3-left row-img">

                        <video
                            src={video2}
                            autoPlay={"autoplay"}
                            preLoad="auto"
                            loop
                        > something</video>
                    </div>

                    <div className="row-text">
                        <h3>A NEW GENERATION</h3>
                        <p>Náo nhiệt và táo bạo nhưng luôn cởi mở — đôi giày sáng tạo cho chính bạn.</p>
                        <p className="btn_buy">SHOP NOW</p>
                    </div>
                    {/* </Link> */}

                </div>

                <div className="card-3 card-length-3">
                    {/* <Link> */}
                    <div className="row-card-3-right row-img">

                    </div>

                    <div className="row-text">
                        <h3>A NEW GENERATION</h3>
                        <p>Náo nhiệt và táo bạo nhưng luôn cởi mở — đôi giày sáng tạo cho chính bạn.</p>
                        <p className="btn_buy">SHOP NOW</p>
                    </div>
                    {/* </Link> */}

                </div>
            </div>


        </Row>
    )
}
