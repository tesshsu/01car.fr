import React, { useState, useEffect } from "react";
import { Form, Field } from 'react-final-form';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import {fetchUser} from 'service/actions/user';
import useLoggedUser from 'service/hooks/useLoggedUser';
import Router from "next/router";
import {connect} from 'react-redux';
import LoadSaveReinitializeForm from 'helpers/LoadSaveReinitializeForm'
import CardAcceptCondition from "components/Cards/CardAcceptCondition.js";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))



const Setting_user = ({dispatch, loading, user, hasErrors}) => {
	
	let record = {
		  phone: user.phone,
		  name: user.name,
		  email: user.email
	 }

	const load = async () => {
	  console.info('Loading...')
	  await sleep(1500)
	  console.info('Loaded...')
	  return record
	}

	const save = async values => {
	  console.info('Saving', values)
	  await sleep(1500)
	  record = values
	}

	const postLoadFormat = values => {
	  const { name, email, phone } = values
	  return {
		name,
		email,
		phone: phone
	  }
	}

	const preSaveFormat = (values, originalValues) => {
	  return {
		...originalValues,
		name: values.name,
		email: values.email,
		phone: values.phone
	  }
	}
    //submit to patch profil API
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
		   alert(err.response);
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
                <LoadSaveReinitializeForm
				  load={load}
				  loading={loading}
				  postLoadFormat={postLoadFormat}
				  preSaveFormat={preSaveFormat}
				  save={save}
				  onSubmit={onSubmit}
				>
				 {({ handleSubmit, form, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit}>
						    <div className="relative w-full mb-3">
								<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="name"
									>
									  Votre nom ( ou votre identifiant ) :
							    </label>							
								<Field
								  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
								  name="name"
								  component="input"
								  type="text"
								  placeholder="name"
								  disabled={submitting}
								/>
							</div>
						    <div className="relative w-full mb-3">
							<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="phone"
									>
									  Votre numero :
							    </label>
							<Field
							  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
							  name="phone"
							  component="input"
							  type="text"
							  placeholder="Phone"
							  disabled={submitting}
							/>
						   </div>
                          <CardAcceptCondition />				   
						  <div className="text-center mt-6">
							<button
							  className="bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
							  type="submit"
							  disabled={submitting || pristine}
							>
							  Modifier votre compte
							</button>
							<button
							  className="bg-gray-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
							  type="button"
							  onClick={form.reset}
							  disabled={submitting || pristine}
							>
							  Reset
							</button>
						  </div>
						</form>
					)}
                </LoadSaveReinitializeForm>
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

