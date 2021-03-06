import React, { useContext, useState, useRef } from "react";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row } from 'reactstrap'
import '../scss/Payment.scss'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@material-ui/core';
import { DataContext } from './DataProvider'
import Colors from './Colors'
import Sizes from './Sizes'
export default function Payment() {
    const { id } = useParams();
    const value = useContext(DataContext)
    const [total, setTotal] = useState(0)

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
    const [products_06] = value.products_06
    const addCart_06 = value.addCart_06

    const navigate = useNavigate();


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
    const details_06 = products_06.filter((product, index) => {
        return product._id === id
    })

    var a;

    function handleShowhide() {
        if (a == 1) {
            document.getElementById("address_other").style.display = "none";
            return a = 0;
        }
        else {
            document.getElementById("address_other").style.display = "block";
            return a = 1;
        }
    }


    const [visible, setVisible] = useState(false);


    return (
        <Row id="body_payment">
            <div id="dt-back">
                <p onClick={() => navigate(-1)}>go back</p>
                <p onClick={() => navigate(-1)}>Home</p>

                <div className="search_product">
                    <h1>"Payment"</h1>
                </div>
            </div>

            <div id="ip_payment">
                <form id="ip_payment_left">
                    <p>Name(*)</p>
                    <input name="name" />

                    <p>?????a ch??? (tu??? ch???n)</p>
                    <input name="name" />

                    <p>Qu???n / Huy???n (*)</p>
                    <input name="name" />

                    <p>T???nh / Th??nh ph??? (tu??? ch???n)</p>
                    <input name="name" />

                    <p>S??? ??i???n tho???i (tu??? ch???n)</p>
                    <input name="name" />

                    <p>?????a ch??? email (tu??? ch???n)</p>
                    <input name="name" />
                </form>
                <form id="ip_payment_right" >

                    <label>
                        <input className="cb_select" type="checkbox" onClick={handleShowhide} />
                        Giao h??ng t???i ?????a ch??? kh??c?
                    </label>
                    <form id="address_other">
                        <p>Name(*)</p>
                        <input name="name" />

                        <p>?????a ch??? (tu??? ch???n)</p>
                        <input name="name" />

                        <p>Qu???n / Huy???n (*)</p>
                        <input name="name" />

                        <p>T???nh / Th??nh ph??? (tu??? ch???n)</p>
                        <input name="name" />

                        <p>S??? ??i???n tho???i (tu??? ch???n)</p>
                        <input name="name" />

                        <p>?????a ch??? email (tu??? ch???n)</p>
                        <input name="name" />

                    </form>

                    <TextField
                        id="first-name"
                        label="Ghi ch?? ????n h??ng (tu??? ch???n)"
                        margin="normal"
                    />

                </form>

            </div>

            <div className="pm_product">

                <table class="table-fill">
                    <thead>
                        <tr>
                            <th className="text-left">Month</th>
                            <th className="text-left">Sales</th>
                        </tr>
                    </thead>
                    <tbody class="table-hover">
                        {
                            details.map(product => (
                                <tr key={product._id} >
                                    <td title={product.title} className="text-left">
                                        {product.title}
                                        <Colors colors={product.colors} />
                                        <Sizes sizes={product.sizes} />
                                        <p>{product.description}</p>
                                    </td>
                                    <td className="text-left">
                                        ${product.price}
                                    </td>
                                </tr>
                            ))
                        }
                        {
                            details_02.map(product => (
                                <tr key={product._id} >
                                    <td title={product.title} className="text-left">
                                        {product.title}
                                        <Colors colors={product.colors} />
                                        <Sizes sizes={product.sizes} />
                                        <p>{product.description}</p>
                                    </td>
                                    <td className="text-left">
                                        ${product.price}
                                    </td>
                                </tr>
                            ))
                        }
                        {
                            details_03.map(product => (
                                <tr key={product._id} >
                                    <td title={product.title} className="text-left">
                                        {product.title}
                                        <Colors colors={product.colors} />
                                        <Sizes sizes={product.sizes} />
                                        <p>{product.description}</p>
                                    </td>
                                    <td className="text-left">
                                        ${product.price}
                                    </td>
                                </tr>
                            ))
                        }
                        {
                            details_04.map(product => (
                                <tr key={product._id} >
                                    <td title={product.title} className="text-left">
                                        {product.title}
                                        <Colors colors={product.colors} />
                                        <Sizes sizes={product.sizes} />
                                        <p>{product.description}</p>
                                    </td>
                                    <td className="text-left">
                                        ${product.price}
                                    </td>
                                </tr>
                            ))
                        }
                        {
                            details_05.map(product => (
                                <tr key={product._id} >
                                    <td title={product.title} className="text-left">
                                        {product.title}
                                        <Colors colors={product.colors} />
                                        <Sizes sizes={product.sizes} />
                                        <p>{product.description}</p>
                                    </td>
                                    <td className="text-left">
                                        ${product.price}
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td class="text-left">T???m t??nh</td>
                            {
                                details.map(product => (
                                    <td className="text-left">
                                        ${product.price}
                                    </td>

                                ))
                            }
                            {
                                details_02.map(product => (
                                    <td className="text-left">
                                        ${product.price}
                                    </td>

                                ))
                            }
                            {
                                details_03.map(product => (
                                    <td className="text-left">
                                        ${product.price}
                                    </td>

                                ))
                            }
                            {
                                details_04.map(product => (
                                    <td className="text-left">
                                        ${product.price}
                                    </td>

                                ))
                            }
                            {
                                details_05.map(product => (
                                    <td className="text-left">
                                        ${product.price}
                                    </td>

                                ))
                            }
                        </tr>
                        <tr>
                            <td class="text-left">Giao h??ng</td>
                            <td class="text-left">?????ng gi??: 25,000VND</td>
                        </tr>
                        <tr>
                            <td class="text-left">T???ng</td>
                            {
                                details.map(product => (
                                    <td className="text-left">
                                        ${product.price}
                                    </td>

                                ))
                            }
                            {
                                details_02.map(product => (
                                    <td className="text-left">
                                        ${product.price}
                                    </td>

                                ))
                            }
                            {
                                details_03.map(product => (
                                    <td className="text-left">
                                        ${product.price}
                                    </td>

                                ))
                            }
                            {
                                details_04.map(product => (
                                    <td className="text-left">
                                        ${product.price}
                                    </td>

                                ))
                            }
                            {
                                details_05.map(product => (
                                    <td className="text-left">
                                        ${product.price}
                                    </td>

                                ))
                            }
                        </tr>

                    </tbody>
                </table>

            </div>

            <div id="bank">
                <div className="bd_bank">

                    <div className="form-group row">
                        <div className="col-sm-2 mt-2">
                            Giao h??ng t???i ?????a ch??? kh??c? <input type="radio" className="mx-2" name="isyes" value="1" onClick={() => setVisible(true)} defaultChecked />
                        </div>
                        <div className="col-sm-2 mt-2">
                            Tr??? ti???n m???t khi nh???n h??ng <input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={() => setVisible(false)} />
                        </div>
                    </div>
                    <>
                        {
                            visible ?
                                <div className="bd_bank_text">
                                    Th???c hi???n thanh to??n v??o ngay t??i kho???n ng??n h??ng c???a ch??ng t??i.
                                    Vui l??ng s??? d???ng M?? ????n h??ng c???a b???n trong ph???n N???i dung thanh to??n.
                                    ????n h??ng s??? ??????c giao sau khi ti???n ???? chuy???n.
                                </div>
                                :
                                <div className="bd_bank_text">
                                    Tr??? ti???n m???t khi giao h??ng
                                </div>
                        }
                    </>

                </div>
            </div>

        </Row>

    )
}