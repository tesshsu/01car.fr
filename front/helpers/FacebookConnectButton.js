import React from "react";
import useLoggedUser from '../service/hooks/useLoggedUser';
import {useRouter} from "next/router";

export default function FacebookConnectButton() {
  const router = useRouter();
  const {
    signInUsingFacebook,
    loggedUser
  } = useLoggedUser();

  async function facebookConnect() {
    try {
      await signInUsingFacebook();

      console.log("loggedUser=", loggedUser);
      if (loggedUser?.url) {
        window.location = loggedUser.url;
      }
      //router.push();

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
          onClick={facebookConnect}
      >
        <i className="fab fa-facebook text-xl mr-1 text-orange-500"> </i>
      </button>
  );
}

