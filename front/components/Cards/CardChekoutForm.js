import React, {useState} from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";


const CheckoutForm = (props) => {
	const stripe = useStripe();
	const elements = useElements();

	const [checkoutError, setCheckoutError] = useState();
	const [checkoutSuccess, setCheckoutSuccess] = useState();

	const handleSubmit = async (e, values) => {
		e.preventDefault();

		try {

			// Get a reference to a mounted CardElement. Elements knows how
			// to find your CardElement because there can only ever be one of
			// each type of element.
			const cardElement = elements.getElement(CardElement);
			const {error, token} = await stripe.createToken(
				cardElement
			);

			if (error) {
				setCheckoutError(error.message);
			} else {
				props.onSubmit(token).then(
					function (result) {
						console.log("result=", result);
						if (result.status === "succeeded") {
							setCheckoutError(null);
							setCheckoutSuccess(true);
						} else {
							setCheckoutSuccess(false);
							setCheckoutError('Le paiement a échoué!');
						}
					},
					function (error) {
						setCheckoutSuccess(false);
						setCheckoutError('Le paiement a échoué!');
					}
				);
			}
		} catch (err) {
			setCheckoutError('Le paiement a échoué!');
		}
	};

	if (checkoutSuccess) return <p>Payment successful!</p>;

	return (
		<div className="mt-4 text-center my-4 mt-6">
			<form onSubmit={handleSubmit}>

				<CardElement/>

				<button
					className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
					type="submit"
					disabled={!stripe}
				>
					Valider votre paiement <i className="far fa-thumbs-up"></i>
				</button>

				{checkoutError && <span style={{color: "red"}}>{checkoutError}</span>}
			</form>
		</div>
	);
};

export default CheckoutForm;
