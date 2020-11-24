import React, {useEffect, useState} from 'react';
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import useLoggedUser from 'service/hooks/useLoggedUser';
import Router from "next/router";
import {fetchUser} from 'service/actions/user';
import {connect} from 'react-redux';

const initialState = {
  isAuthentificated: false
};

const Navbar = ({dispatch, loading, user, hasErrors}) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const {
    isAuthentificated,
	loggedUser
  } = useLoggedUser();

  useEffect(() => {
    if (isAuthentificated) {
      dispatch(fetchUser())
    }
  }, [isAuthentificated, loggedUser]);

  const renderUser = () => {
    if (loading) return <p>Loading user...</p>
    if (hasErrors) return <p>Unable to display user.</p>
    return <span className="text-orange-500 text-sm">Bonjour, {user.name}</span>
  }

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                <img
                    src={require("assets/img/logo.png")}
                    className="w12 sm:w-4/12 px-4"
                    alt="..."
                  ></img>
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>

              <li className="flex items-center">
                <button
                  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link href="/annonce">
					  <a
						href="#pablo"
						className={
						  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
						}
					  >
						Annonces
					  </a>
				  </Link>
                </button>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link href="/vendre">
					  <a
						href="#pablo"
						className={
						  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
						}
					  >
						Vendre
					  </a>
				  </Link>
                </button>
              </li>
			  {isAuthentificated && (
			    <li className="flex items-center">
					<button
					  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
					  type="button"
					>
					 <Link href="/favoris">
						  <a
							href="#pablo"
							className={
							  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
							}
						  >
							Favoris
						  </a>
					  </Link>
					</button>
                </li>
			  )}
			   <li className="flex items-center">
			   {!isAuthentificated ? (
				<Link href="/auth/login">
				  <a
					href="#"
					className={
					  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-orange-500"
					}
				  >
					<i className="text-orange-900 fas fa-user" />
				  </a>
				</Link>
				) : (
				<Link href="/auth/setting_user">
				  <a
					href="#"
					className={
					  "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-orange-500"
					}
				  >
					<i className="text-orange-900 fas fa-address-card" /> {renderUser()}
				  </a>
				</Link>
			   )}
			   </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  user: state.user.user,
  hasErrors: state.user.hasErrors,
})
export default connect(mapStateToProps)(Navbar)