import { loadStripe } from '@stripe/stripe-js';

const publicKey = "pk_live_51KrQIfK3T09oXMI1PUPYlIE25cx1ZhpW6B776J8wdMIltXtiLYWx9O4e5xs2zLwAKTip9VHaZMGiogWSwMlIrlJE00u51TCxEk"

let stripePromise;
export const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(publicKey);
    }
    return stripePromise;
};