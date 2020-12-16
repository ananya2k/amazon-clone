import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Private_Label_Fashion/XCM_Manual_1275879_1412321_CA_ca_private_label_fashion_fgg_ca_en_3435891_3000x750_en_CA.jpg"
                alt="" />

                <div>
                    <h2 className="checkout_title">
                        Your Shopping Cart
                    </h2>
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                    {/* CartItem */}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
