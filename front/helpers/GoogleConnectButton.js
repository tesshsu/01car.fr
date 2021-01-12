import React from "react";
import useLoggedUser from '../service/hooks/useLoggedUser';

export default function GoogleConnectButton() {
  const {
    signInUsingGoogle,
    loggedUser
  } = useLoggedUser();

  async function googleConnect() {
    try {
      await signInUsingGoogle();

      console.log("loggedUser=", loggedUser);
      if (loggedUser?.url) {
        window.location = loggedUser.url;
      }
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
          onClick={googleConnect}
      >
        <i className="fab fa-google text-xl mr-1 text-orange-500"> </i>
      </button>
  );
}

