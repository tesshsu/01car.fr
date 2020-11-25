import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Form, Field } from 'react-final-form';
import CardAcceptCondition from "components/Cards/CardAcceptCondition.js";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const required = value => (value ? undefined : 'Champs obligatoires')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}


export default function Contact() {
  return (
    <>
      <IndexNavbar fixed />
      <main className="contact-page">
        <section className="relative block h-screen contact-section">
          <div
            className="w-full h-full bg-center bg-gray-900"
          >			
          </div>          
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
			    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/logo.png")}
                        className="shadow-xl rounded-full h-auto p-3 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-210-px bg-white bg-white rounded text-sm shadow outline-none"
                      />
                    </div>
                  </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Contactez o1car en remplissant le formulaire
                    </h4>
                    
					<Form
						onSubmit={onSubmit}
						render={({ handleSubmit, form, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit}>                 
						    <Field name="name" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="name"
									>
									  Nom
									</label>
									<input
									  {...input}
									  type="name"
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Votre nom"
									/>{meta.error && meta.touched && <span className="text-orange-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
							<Field name="email" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="email"
									>
									  Email
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
							<Field name="message" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="message"
									>
									  Message
									</label>
									<textarea
									  {...input}
									  type="text"
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Message"
									/>{meta.error && meta.touched && <span className="text-orange-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
						    <CardAcceptCondition />
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
