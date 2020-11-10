import React from "react";
import Link from "next/link";
import Auth from "layouts/Auth.js";
import { Form, Field } from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const required = value => (value ? undefined : 'Champs obligatoires')
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
const onSubmit = async values => {
  await sleep(300)
  window.alert('Nous vous envoyer le lien qui vous permettra de réinitialiser votre mot de passe.')
}

export default function Login() {
  return (
    <>
      <div className="container mx-auto px-4 mt-16 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">              
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Réinitialisez votre mot de passe </small>
                </div>
                <Form
				  onSubmit={onSubmit}
				  render={({ handleSubmit, form, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit}>                 
						    <Field name="email" validate={required}>
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
						  <div className="text-center mt-6">
							<button
							  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
							  type="submit"
							  disabled = {submitting}
							>
							  Envoyer
							</button>
						  </div>
						</form>
					)}
				/>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link href="/auth/login">
					<a
					  href="#"
					  className="text-gray-300"
					>
					  <small>Connexion</small>
					</a>
				</Link>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register">
                  <a href="#" className="text-gray-300">
                    <small>Créez un compte gratuit</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
