import React, { useState, useEffect } from "react";
import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { parseCookies, setCookie } from "nookies";
import CheckoutForm from "components/Cards/CardChekoutForm";
const stripePromise = loadStripe("pk_test_51HgmzIBjqnSC21bhUov33uWhuXhCFQBnwRcy1pfJgKmXv42GkV7vLZJ0uNR26SdEUomqGHDnGhCXvxn0MY6GjIg100F67arXkO");

const ModalPayment = ({ paymentIntent }) => (
	<Elements stripe={stripePromise}>
		<CheckoutForm paymentIntent={paymentIntent} />
	</Elements>
);

export default ModalPayment;
