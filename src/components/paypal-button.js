import React from 'react'
import AddCartImage from '../assets/images/addtocart.svg'
import ViewCartImage from '../assets/images/viewcart.svg'

const PaypalButton = ({paypalKey}) => {
    return (
        <div className="paypal-buttons-wrapper">
            <div className="add-cart-button-wrapper">
                <form className="paypal-form-post" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick"></input>
                    <input type="hidden" name="hosted_button_id" value={paypalKey}></input>
                    <input className="paypal-input-image" type="image" src={AddCartImage} border="0" name="submit" alt="ADD TO CART"></input>
                </form> 
            </div>
            <div className="view-cart-button-wrapper">
                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                    <input type="hidden" name="cmd" value="_s-xclick"></input>
                    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"></input>
                    <input className="paypal-input-image" type="image" src={ViewCartImage} border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
                </form>
            </div>
        </div>
    )
}

export default PaypalButton