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
            <h2 className="text-3xl text-center font-bold"> Please Pay</h2>
            <div className="mx-auto border border-theme-3-400 w-2/3 rounded-md p-8 my-4">
            <Elements stripe={stripePromise} >
                <CheckoutForm singleCart = {singleCart} ></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;