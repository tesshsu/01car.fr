import React from "react";
import Link from "next/link";
import Auth from "layouts/Auth.js";
import { Form, Field } from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const required = value => (value ? undefined : 'Champs obligatoires')
const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span className="text-orange-500 text-sm">{error}</span> : null
    }
  </Field>
)
const onSubmit = async values => {
  await sleep(300)
  window.alert('Nous vous envoyer le lien qui vous permettra de réinitialiser votre mot de passe.')
}

export default function AnnonceSearchForm() {
  return (
    <>
      <section className="mt-6">
		  <div className="container px-4 mx-auto">
			
			    <Form
					  onSubmit={onSubmit}
				      render={({ handleSubmit, form, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit}>  
						    <div className="flex flex-wrap">
							   <div className="w-full px-4 flex-1">
									<Field name="search">
										{({ input, meta }) => (
										  <div className="relative w-full mb-3">
											<input
											  {...input}
											  type="text"
											  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
											  placeholder="Rechercher"
											/>
										  </div>
										)}
									</Field>							
							   </div>
							   <div className="w-full px-4 flex-1">
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Field name="question-2" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
											<option selected="selected" value="0">KM max</option>
											<option value="25000">25 000 Km maxi</option>
											<option value="50000">50 000 Km maxi</option>
											<option value="75000">75 000 Km maxi</option>
											<option value="100000">100 000 Km maxi</option>
											<option value="125000">125 000 Km maxi</option>
											<option value="140000">140 000 Km maxi</option>
										</Field>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
											<i className="fas fa-angle-down text-2xl my-2"></i>
										</div>                                     
									</div>
							   </div>
							   <div className="w-full px-4 flex-1">
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Field name="question-2" component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
											<option value="0" selected="selected">Prix max</option>
											<option value="3000">3 000 € maxi</option>
											<option value="4500">4 500 € maxi</option>
											<option value="6000">6 000 € maxi</option>
											<option value="7500">7 500 € maxi</option>
											<option value="9000">9 000 € maxi</option>
											<option value="10500">10 500 € maxi</option>
											<option value="12000">12 000 € maxi</option>
											<option value="13500">13 500 € maxi</option>
											<option value="15000">15 000 € maxi</option>
											<option value="16500">16 500 € maxi</option>
											<option value="18000">18 000 € maxi</option>
											<option value="19500">19 500 € maxi</option>
											<option value="21000">21 000 € maxi</option>
											<option value="22500">22 500 € maxi</option>
											<option value="24000">24 000 € maxi</option>
											<option value="25500">25 500 € maxi</option>
											<option value="27000">27 000 € maxi</option>
											<option value="28500">28 500 € maxi</option>
											<option value="30000">30 000 € maxi</option>
											<option value="35000">Plus </option>										
										</Field>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
											<i className="fas fa-angle-down text-2xl my-2"></i>
										</div>                                     
									</div>
							   </div>
							   <div className="w-full px-4 flex-1">
									<button
									  className="bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
									  type="submit"
									  disabled={submitting}
									>
									  Rechercher
									</button>
							   </div>
                            </div>
			    		</form>
					)}
				/>			
		  </div>
        </section>
    </>
  );
}
