import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { destroyCookie } from "nookies";

const CheckoutForm = ({ paymentIntent }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [checkoutError, setCheckoutError] = useState();
	const [checkoutSuccess, setCheckoutSuccess] = useState();

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const {
				error,
				paymentIntent: { status }
			} = await stripe.confirmCardPayment(paymentIntent.client_secret, {
				payment_method: {
					card: elements.getElement(CardElement)
				}
			});

			if (error) throw new Error(error.message);

			if (status === "succeeded") {
				destroyCookie(null, "paymentIntentId");
				setCheckoutSuccess(true);
			}
		} catch (err) {
			setCheckoutError(err.message);
		}
	};

	if (checkoutSuccess) return <p>Payment successfull!</p>;

	return (
		<div className="mt-4 text-center my-4 mt-6">
		<form onSubmit={handleSubmit}>
			<CardElement />

			<button
				className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
				type="button"
				type="submit"
				disabled={!stripe}
			>
				Valider votre paiement <i className="far fa-thumbs-up"></i>
			</button>

			{checkoutError && <span style={{ color: "red" }}>{checkoutError}</span>}
		</form>
		</div>
	);
};

export default CheckoutForm;
