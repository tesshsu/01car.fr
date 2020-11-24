import React, { useState, useEffect } from "react";
import { Form, Field } from 'react-final-form';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import {fetchUser} from 'service/actions/user';
import useLoggedUser from 'service/hooks/useLoggedUser';
import Router from "next/router";
import {connect} from 'react-redux';

const Setting_user = ({dispatch, loading, user, hasErrors}) => {
  const {
    isAuthentificated,
    loggedUser,
	logout,
	updateLoggedUser
  } = useLoggedUser();
  
  useEffect(() => {
    if (isAuthentificated) {
      dispatch(fetchUser())
    }
  }, [isAuthentificated, loggedUser]);
  
  const onSubmit = async (values)=>{
	try {
      let {
        ...payload
      } = values;

      const data = { ...payload };
      console.log(data);
      await updateLoggedUser(data);
     
    } catch (err) {
       console.log(err.response);
    } finally {
	  alert("votre profil été modifié");
	}
  }

  async function onSignOut() {
    await logout();
	Router.push("/auth/login");
  }
  
  return (
    <>
	  <IndexNavbar fixed />
	  <main>
	  <section className="mt-20 px-12 bg-gray-800">
	    
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full mt-20 mb-8 lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
				  <h6 className="text-gray-600 text-md font-bold">
                    Les details de votre compte
                  </h6>
				  <p className="text-gray-800 text-sm font-bold">Nom (votre identifiant ) :  <span className="text-gray-600 text-sm"> {user.name}</span></p>
                  <p className="text-gray-800 text-sm font-bold">votre contact email :  <span className="text-gray-600 text-sm"> {user.email}</span></p>
                  <p className="text-gray-800 text-sm font-bold">Phone :  <span className="text-gray-600 text-sm"> {user.phone}</span> </p>
				</div>
                
				<div className="text-center mb-3">
                  <h6 className="text-gray-600 text-md font-bold">
                    Modifier votre compte
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <Form
				  initialValues={{
						name:'',
						email: loggedUser.email,
						phone: ''
					  }}
				  onSubmit={onSubmit}
				  render={({ submitError, handleSubmit, form, submitting, pristine, values, invalid }) => (
						<form onSubmit={handleSubmit}>
						    <Field name="name">
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="name"
									>
									  Votre nom ( ou votre identifiant ) :
									</label>
									<input
									  {...input}
									  type="text"
									  value= {values.name}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Votre nom ou prénom"
									/>{meta.error && meta.touched && <span className="text-orange-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>							
							<Field name="phone">
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="phone"
									>
									  Phone
									</label>
									<input
									  {...input}
									  type="phone"
									  value= {values.phone}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="votre numero"
									/>{meta.error && meta.touched && <span className="text-orange-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
						  <div>
							<label className="inline-flex items-center cursor-pointer">
							  <input
								id="customCheckLogin"
								type="checkbox"
								checked="checked"
								className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
							  />
							  <span className="ml-2 text-sm font-semibold text-gray-700">
								J'ai lu et j'accepte les{" "}
								<a
								  href="#pablo"
								  className="text-blue-500"
								  onClick={(e) => e.preventDefault()}
								>
								  Politique de confidentialité de 01car.fr
								</a>
							  </span>
							</label>
						  </div>

						  <div className="text-center mt-6">
							<button
							  className="bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
							  type="submit"
							  disabled={submitting || invalid}
							>
							  Modifier votre compte
							</button>
						  </div>
						</form>
					)}
				/>
				<div className="text-center mt-6">
					<button
						className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
						type="submit"
						onClick = {onSignOut}
					>
						Me déconnecter
					</button>
				</div>
              </div>
            </div>
          </div>
        </div>
      </div>
	  </section>
	  </main>
	  <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  user: state.user.user,
  hasErrors: state.user.hasErrors,
})
export default connect(mapStateToProps)(Setting_user)

