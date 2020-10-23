import React from "react";
import { Form, Field } from 'react-final-form';
import Auth from "layouts/Auth.js";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const required = value => (value ? undefined : 'Champs obligatoires')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

export default function Setting_user() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
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
				  onSubmit={onSubmit}
				  render={({ handleSubmit, form, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit}>                 
						    <Field name="email">
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="email"
									>
									  Votre Email
									</label>
									<input
									  {...input}
									  type="email"
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Email"
									/>{meta.error && meta.touched && <span className="text-orange-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
							<Field name="password">
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="password"
									>
									  Mot de passe
									</label>
									<input
									  {...input}
									  type="password"
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Mot de passe"
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
									  Votre contact numéro
									</label>
									<input
									  {...input}
									  type="number"
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="phone"
									/>{meta.error && meta.touched && <span className="text-orange-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
						  <div>
							<label className="inline-flex items-center cursor-pointer">
							  <input
								id="customCheckLogin"
								type="checkbox"
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
							  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
							  type="submit"
							  disabled = {submitting}
							>
							  Modifier votre compte
							</button>
						  </div>
						</form>
					)}
				/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Setting_user.layout = Auth;
