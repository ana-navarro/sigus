import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import "./style.css"

const key = "pk_live_51KrQIfK3T09oXMI1PUPYlIE25cx1ZhpW6B776J8wdMIltXtiLYWx9O4e5xs2zLwAKTip9VHaZMGiogWSwMlIrlJE00u51TCxEk"

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(key);
    }

    return stripePromise;
};

const Checkout = ({ credit }) => {
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const checkoutOptions = {
        lineItems: [{
            price_data: {
                currency: "brl",
                product_data: {
                    name: "Conta Luz Minera Engenharia",
                },
                unit_amount: credit.valuePayment,
            },
            quantity: 1,
        }],
        mode: "payment",
        currency: "brl",
        automatic_payment_methods: { enabled: true },
        payment_method_types: ['card', 'boleto'],
        payment_method_options: {
            boleto: {
                expires_after_days: 7
            }
        },
    };

    const redirectToCheckout = async () => {
        setLoading(true);
        console.log("redirectToCheckout");

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);

        if (error) setStripeError(error.message);
        setLoading(false);
    };

    if (stripeError) alert(stripeError);

    return (
        <div className="checkout">
            <button onClick={redirectToCheckout}>Checkout</button>
        </div>
    );
};

export default Checkout;