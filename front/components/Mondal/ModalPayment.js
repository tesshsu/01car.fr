import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Router from "next/router";
const stripePromise = loadStripe("pk_test_51HgmzIBjqnSC21bhUov33uWhuXhCFQBnwRcy1pfJgKmXv42GkV7vLZJ0uNR26SdEUomqGHDnGhCXvxn0MY6GjIg100F67arXkO");

const ProductDisplay = ({ handleClick }) => (
  <section>
    <div className="product flex flex-wrap justify-center mt-4">
      <div className="w-full md:w-6/12 px-4">
	  <img
        src={require("assets/img/profile.jpg")}
        alt="Abonement Premium"
		className="ProductImg shadow rounded-full max-w-full h-auto align-middle border-none"
      />
	  </div>
	  <div className="w-full md:w-6/12 px-4">
      <div className="description">
        <p className="ml-3 leading-6 font-medium text-orange-500 text-2xl">Tarif Premium</p>
        <div className="ml-3 leading-6 font-medium text-orange-500 text-4xl">6.99€</div>
      </div>
	  </div>
    </div>
    <button className="checkout-button" role="link" onClick={handleClick}>
      Vendez votre véhicule en tête de liste
    </button>
  </section>
);

export default function ModalPayment() {
    const [message, setMessage] = useState("");
     useEffect(() => {
		// Check to see if this is a redirect back from Checkout
		const query = new URLSearchParams(window.location.search);

		if (query.get("success")) {
		  setMessage("Order placed! You will receive an email confirmation.");
		}

		if (query.get("canceled")) {
		  setMessage(
			"Order canceled -- continue to shop around and checkout when you're ready."
		  );
		}
	  }, []);

	  const handleClick = async (event) => {
		const stripe = await stripePromise;

		const response = await fetch("/create-checkout-session", {
		  headers : {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		   },
		  method: "POST",
		});

		const session = await response.json();

		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
		  sessionId: session.id,
		});

		if(result){
			Router.push("/vendre");
		}
		if (result.error) {
		  // If `redirectToCheckout` fails due to a browser or network
		  // error, display the localized error message to your customer
		  // using `result.error.message`.
		  console.log('strip error', result.error);
		}
	  };
  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}
