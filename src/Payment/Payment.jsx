import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import CheckoutForm from "./Checkoutform";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    // const [cart] = useCart();
    const {singleCart,setSingleCart} = useContext(AuthContext)
   
//    console.log(singleCart);

    return (
        <div>
            <h2 className="text-3xl"> Please Pay</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm singleCart = {singleCart} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;