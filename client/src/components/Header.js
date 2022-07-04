import React, { useState, useContext, useEffect } from 'react'
import Menu from '../img/bars-solid.svg'
import Close from '../img/xmark-solid.svg'
import Cart from '../img/cart.svg'
// import Searchs from '../img/search.svg'
import { Link, Route, Routes } from 'react-router-dom'
import '../scss/Header.scss'
import { DataContext } from './DataProvider'
import SearchForm from './SearchForm'
import FilterForm from './FilterForm'
import Modal from './Model'


const Header = ({ user }) => {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    const [cart] = value.cart
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };

    const [openSearch, setOpenSearch] = useState(false)
    const [openFilter, setOpenFilter] = useState(false)

    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    console.log(show)

    return (
        <header show>
            <div className="tt-buy">
                <div className="ship">
                    <div className="ship-text gl-label">
                        MIỄN PHÍ GIAO HÀNG TRÊN 1.300.000 VNĐ
                    </div>
                </div>
                <div className="ship">
                    <div className="ship-text gl-label">
                        TRẢ HÀNG DỄ DÀNG
                    </div>
                </div>
                <div className="ship">
                    <div className="ship-text  gl-label">
                        NAY ĐÃ CÓ THỂ THANH TOÁN VỚI THẺ TÍN DỤNG!
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="menu" onClick={toggleMenu}>
                    <img src={Menu} alt="" width="30" />
                </div>
                <div className="logo">
                    <h1><Link to="/">Nike</Link></h1>
                </div>
                {user ? (
                    <nav>
                        <ul className='toggle' style={styleMenu}>
                            <li><Link to="/">Home</Link></li>
                            {/* <li><Link to="/products">Product</Link></li> */}
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li onClick={toggleMenu}>
                                <img src={Close} alt="" width="30" className="menu" />
                            </li>
                            <li className="listItem">
                                <img
                                    src={user.photos[0].value}
                                    alt=""
                                    className="avatar"
                                />
                            </li>
                            <li className="listItem"> <Link to="/my-account">{user.displayName}</Link></li>
                            <li className="listItem" onClick={logout}>
                                LOGOUT
                            </li>
                        </ul>
                        <div className="cart-icon" >
                            <span>{cart.length}</span>
                            <Link to="/cart">
                                <img src={Cart} alt="" width="20" style={styleMenu} />
                            </Link>
                        </div>
                        <p onClick={() => setOpenSearch(true)}>Search</p>
                        <p onClick={() => setOpenFilter(true)}>Filter</p>

                        {/* -------- Search --------- */}
                        {
                            openSearch &&
                            <Modal titleTxt="Search" setOpen={setOpenSearch}>
                                <SearchForm />
                            </Modal>
                        }

                        {/* -------- Filter --------- */}
                        {
                            openFilter &&
                            <Modal titleTxt="Filter" setOpen={setOpenFilter}>
                                <FilterForm />
                            </Modal>
                        }
                    </nav>

                ) : (
                    <Link className="logo" to="login">
                        Login
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;