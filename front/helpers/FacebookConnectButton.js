import React, {useEffect} from "react";
import useLoggedUser from '../service/hooks/useLoggedUser';
import {useRouter} from "next/router";
import {authenticated} from "../service/actions";
import {connect} from "react-redux";

const FacebookConnectButton = ({
                         dispatch,
                                 url
                       }) => {
  const router = useRouter();
  const {
    signInUsingFacebook,
    isAuthentificated,
    loggedUser
  } = useLoggedUser();

  useEffect(() => {
    if (url) {
      window.location = url;
    }
  }, [dispatch, isAuthentificated, loggedUser]);

  async function facebookConnect() {
    try {
      await signInUsingFacebook();
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


const mapStateToProps = (state) => ({
  url: state.loggedUser.url,
})

export default connect(mapStateToProps)(FacebookConnectButton)

