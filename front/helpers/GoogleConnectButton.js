import React, { useEffect } from "react";
import Link from "next/link";
import useLoggedUser from 'service/hooks/useLoggedUser';

export default function GoogleConnectButton() {
  const {
    signInUsingGoogle,
  } = useLoggedUser();

  async function googleConnect() {
    try {
      await signInUsingGoogle();
    } catch (err) {
      alert(
        'Connexion error',
         err
      );
    }
  }

  return (
    <button
            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
            type="submit"
			submit={googleConnect}
    >
       <i className="fab fa-google text-xl mr-1 text-orange-500"></i>
    </button>
  );
}

