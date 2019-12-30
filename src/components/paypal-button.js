import React from 'react'

const PaypalButton = ({paypalKey}) => {
    return (
        <div>
            <button>
                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick"></input>
                    <input type="hidden" name="hosted_button_id" value={paypalKey}></input>
                    <input type="image" src="https://tiffanielmore.com/art/" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
                </form>
            </button>
        </div>
    )
}

export default PaypalButton