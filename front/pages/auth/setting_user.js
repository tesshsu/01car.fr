import React, { useState, useEffect } from "react";
import { Form, Field } from 'react-final-form';
import Auth from "layouts/Auth.js";
import formatString from "format-string-by-pattern";
import useLogguedUser from 'service/hooks/useLogguedUser';
import Router from "next/router";
import * as userRequest from 'service/actions/user';
import {connect} from 'react-redux';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const required = value => (value ? undefined : 'Champs obligatoires')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
  
  
export default function Setting_user ({dispatch, loading, user, hasErrors}) {
  const {
    isAuthentificated,
    logguedUser,
	logout
  } = useLogguedUser();
  
  useEffect( async() => {
    if (!isAuthentificated && !logguedUser) {
		Router.push("/auth/login");
    }
  }, [isAuthentificated, logguedUser]);
  
  const initialFormState = { id: null, name: '', email: '', password:'', phone:'' }
  const [userInfo, setUserInfo] = useState(initialFormState)
  
  const masks = [
  { name: "nom", type: "text", placeholder: "Votre nom", validate: null },
  { name: "email", type: "email", placeholder: "Votre email", validate: null },
  { name: "password", type: "password", placeholder: "mot de pass",  validate: null },
  { name: "phone", type: "number", placeholder: "Votre portable", validate: null }
  ];
  
 const handleInputChange = (event) => {
    const { name, value } = event.target

    setUserInfo({ ...userInfo, [name]: value })
  }
  
  const onSubmit = async ()=>{
	try {
      await dispatch(updateUser());
	  alert('Le compte ete modifie !');
    } catch (err) {
      console.log('modify error', err.response);
      if (err.response && err.response.status === 422) {
        submitError({
          email: 'Cet email est déjà utilisé'
        });
      } else {
        alert('Impossible de modifier le compte');
      }
    }
  }
  
  
  async function onSignOut() {
    await logout();
	Router.push("/auth/login");
  }
  
  return (
    <>
      <div className="container mx-auto px-4 mt-16 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Modifier votre compte
                  </h6>
                </div>               
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">                
                <Form
				  initialValues={{
						name:'',
						email: '',
						password: '',
						phone: ''
					  }}
				  onSubmit={onSubmit}
				  render={({ submitError, handleSubmit, form, submitting, pristine, values, invalid }) => (
						<form onSubmit={handleSubmit}>                 
						    {masks.map(mask => (
								<Field name={mask.name} validate={mask.validate}>
									{({ input, meta }) => (
									  <div className="relative w-full mb-3">
										<label
										  className="block uppercase text-gray-700 text-xs font-bold mb-2"
										  htmlFor={mask.name}
										>
										  {mask.name}
										</label>
										<input
										  {...input}
										  type={mask.type}
                                          value= {mask.value}	
                                          onChange={handleInputChange}										  
										  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
										  placeholder={mask.placeholder}
										/>{meta.error && meta.touched && <span className="text-orange-500 text-sm">{meta.error}</span>}
									  </div>
									)}
								</Field>																
							))}
						  <div>
							<label className="inline-flex items-center cursor-pointer">							 
							  <Field name="formPolicy" component="input" type="checkbox" required={required} checked
							  />{' '}
							    &nbsp;J'ai lu et j'accepte les Politique de confidentialité de 01car.fr						  
							</label>							
						  </div>

						  <div className="text-center mt-6">
							<button
							  className="bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
							  type="submit"
							  disabled = {submitting}
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
    </>
  );
}

Setting_user.layout = Auth;
