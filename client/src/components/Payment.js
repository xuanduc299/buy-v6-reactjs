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

            {/* <div id="ip_payment">
                <form id="ip_payment_left">
                    <p>Name(*)</p>
                    <input name="name" />

                    <p>Địa chỉ (tuỳ chọn)</p>
                    <input name="name" />

                    <p>Quận / Huyện (*)</p>
                    <input name="name" />

                    <p>Tỉnh / Thành phố (tuỳ chọn)</p>
                    <input name="name" />

                    <p>Số điện thoại (tuỳ chọn)</p>
                    <input name="name" />

                    <p>Địa chỉ email (tuỳ chọn)</p>
                    <input name="name" />
                </form>
                <form id="ip_payment_right" >

                    <label>
                        <input className="cb_select" type="checkbox" onClick={handleShowhide} />
                        Giao hàng tới địa chỉ khác?
                    </label>
                    <form id="address_other">
                        <p>Name(*)</p>
                        <input name="name" />

                        <p>Địa chỉ (tuỳ chọn)</p>
                        <input name="name" />

                        <p>Quận / Huyện (*)</p>
                        <input name="name" />

                        <p>Tỉnh / Thành phố (tuỳ chọn)</p>
                        <input name="name" />

                        <p>Số điện thoại (tuỳ chọn)</p>
                        <input name="name" />

                        <p>Địa chỉ email (tuỳ chọn)</p>
                        <input name="name" />

                    </form>

                    <TextField
                        id="first-name"
                        label="Ghi chú đơn hàng (tuỳ chọn)"
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
                            <td class="text-left">Tạm tính</td>
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
                            <td class="text-left">Giao hàng</td>
                            <td class="text-left">Đồng giá: 25,000VND</td>
                        </tr>
                        <tr>
                            <td class="text-left">Tổng</td>
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
                            Giao hàng tới địa chỉ khác? <input type="radio" className="mx-2" name="isyes" value="1" onClick={() => setVisible(true)} defaultChecked />
                        </div>
                        <div className="col-sm-2 mt-2">
                            Trả tiền mặt khi nhận hàng <input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={() => setVisible(false)} />
                        </div>
                    </div>
                    <>
                        {
                            visible ?
                                <div className="bd_bank_text">
                                    Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
                                    Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán.
                                    Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
                                </div>
                                :
                                <div className="bd_bank_text">
                                    Trả tiền mặt khi giao hàng
                                </div>
                        }
                    </>

                </div>
            </div> */}

            <div class="ps-checkout pt-80 pb-80">
                <div class="ps-container">
                    <form class="ps-checkout__form" action="do_action" method="post">
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
                                <div class="ps-checkout__billing">
                                    <div class="form-group form-group--inline">
                                        <label>First Name<span>*</span>
                                        </label>
                                        <input class="form-control" type="text" />
                                    </div>
                                    <div class="form-group form-group--inline">
                                        <label>Last Name<span>*</span>
                                        </label>
                                        <input class="form-control" type="text" />
                                    </div>
                                    <div class="form-group form-group--inline">
                                        <label>Company Name<span>*</span>
                                        </label>
                                        <input class="form-control" type="text" />
                                    </div>
                                    <div class="form-group form-group--inline">
                                        <label>Email Address<span>*</span>
                                        </label>
                                        <input class="form-control" type="email" />
                                    </div>
                                    <div class="form-group form-group--inline">
                                        <label>Company Name<span>*</span>
                                        </label>
                                        <input class="form-control" type="text" />
                                    </div>
                                    <div class="form-group form-group--inline">
                                        <label>Phone<span>*</span>
                                        </label>
                                        <input class="form-control" type="text" />
                                    </div>
                                    <div class="form-group form-group--inline">
                                        <label>Address<span>*</span>
                                        </label>
                                        <input class="form-control" type="text" />
                                    </div>
                                    <div class="form-group">
                                        <div class="ps-checkbox">
                                            <input class="form-control" type="checkbox" id="cb01" />
                                            <label for="cb01">Create an account?</label>
                                        </div>
                                    </div>
                                    <h3 class="mt-40"> Addition information</h3>
                                    <div class="form-group form-group--inline textarea">
                                        <label>Order Notes</label>
                                        <textarea class="form-control" rows="5"
                                            placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="ps-checkout__order">
                                    <header>
                                        <h3>Your Order</h3>
                                    </header>
                                    <div class="content">
                                        <table class="table ps-checkout__products">
                                            <thead>
                                                <tr>
                                                    <th class="text-uppercase">Product</th>
                                                    <th class="text-uppercase">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style={{ color: "white" }}>
                                                    {
                                                        details.map(product => (
                                                            <tr key={product._id} >
                                                                <td title={product.title} className="text-left">
                                                                    {product.title}
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
                                                                </td>
                                                                <td className="text-left">
                                                                    ${product.price}
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }

                                                    {
                                                        details_06.map(product => (
                                                            <tr key={product._id} >
                                                                <td title={product.title} className="text-left">
                                                                    {product.title}
                                                                </td>
                                                                <td className="text-left">
                                                                    ${product.price}
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <footer>
                                        <h3>Payment Method</h3>
                                        <div class="form-group cheque">
                                            <div class="ps-radio">
                                                <input class="form-control" type="radio" id="rdo01" name="payment" checked />
                                                <label for="rdo01">Cheque Payment</label>
                                                <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County,
                                                    Store Postcode.</p>
                                            </div>
                                        </div>
                                        <div class="form-group paypal">
                                            <div class="ps-radio ps-radio--inline">
                                                <input class="form-control" type="radio" name="payment" id="rdo02" />
                                                <label for="rdo02">Paypal</label>
                                            </div>
                                            <ul class="ps-payment-method">
                                                <li><a href="#"><img src="images/payment/1.png" alt="" /></a></li>
                                                <li><a href="#"><img src="images/payment/2.png" alt="" /></a></li>
                                                <li><a href="#"><img src="images/payment/3.png" alt="" /></a></li>
                                            </ul>
                                            <button class="ps-btn ps-btn--fullwidth">Place Order<i class="ps-icon-next"></i></button>
                                        </div>
                                    </footer>
                                </div>
                                <div class="ps-shipping">
                                    <h3>FREE SHIPPING</h3>
                                    <p>YOUR ORDER QUALIFIES FOR FREE SHIPPING.<br /> <a href="#"> Singup </a> for free shipping on every
                                        order, every time.</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>


        </Row>

    )
}