import React, { useRef, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { DataContext } from './DataProvider'
import { data } from '../data';
import { Link } from 'react-router-dom'

let count = 0;

const SearchForm = () => {

    const value = useContext(DataContext)
    const [products_02] = value.products_02
    const addCart_02 = value.addCart_02


    const ref = useRef(0)
    const inputRef = useRef()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // const value = inputRef.current.value;
        // if (!value.trim()) return;
        // return navigate(`/search/${value}`)
    }

    const [searchTerm, setSearchTerm] = useState("");

    var a;

    function show_hide() {
        if (a == 1) {
            document.getElementById("template_Container").style.display = "none";
            return a = 0;
        }
        else {
            document.getElementById("template_Container").style.display = "block";
            return a = 1;
        }
    }

    return (
        <div className='search_form'>
            <h2>Renders: {ref.current++}</h2>
            <h2>Count: {count++}</h2>
            <form onSubmit={handleSubmit}>
                <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} />
                <button onClick={show_hide}>Search</button>
            </form>
            <div id="template_Container" style={{ display: "none" }} >
                {
                    data
                        .filter((val) => {
                            if (searchTerm == "") {
                                return val;
                            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                            else if (val.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                            else if (val._id.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        })
                        .map((val) => {
                            return (
                                <div className="products_2">
                                    <div className="card" key={val._id}>
                                        <Link to={`/products/${val._id}`}>
                                            <img src={val.images[0]} alt="" />
                                        </Link>
                                        <div className="box">
                                            <h3 title={val.title}>
                                                <Link to={`/products/${val._id}`}>{val.title}</Link>
                                            </h3>
                                            <p>{val.description}</p>
                                            <h4>${val.price}</h4>
                                            <button onClick={() => addCart_02(val._id)}>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )

}

export default SearchForm;