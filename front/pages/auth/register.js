import React, { useEffect } from "react";
import { Form, Field } from 'react-final-form';
import Router from "next/router";
import Auth from "layouts/Auth.js";
import useLoggedUser from 'service/hooks/useLoggedUser';
import CardAcceptCondition from "components/Cards/CardAcceptCondition.js";
const required = value => (value ? undefined : 'Champs obligatoires')
import {
    departementOptions
} from 'helpers/constant';

export default function Register() {
  const {
	register
  } = useLoggedUser();


  const onSubmit = async (values)=>{
	try {
      let {
        ...payload
      } = values;

      const data = { ...payload };
      await register(data);
	  if(data){
		 Router.push("/vendre");
	  }
    } catch (err) {
      console.log(err.response);
      if (err.response && err.response.status === 422) {
        submitError({
          email: 'Cet email est déjà utilisé'
        });
      } else {
        alert('Impossible de créer le compte, merci de constacter notre equipe');
      }
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 mt-16 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-orange-500 text-sm font-bold">
                    Créez un compte gratuit
                  </h6>
                </div>
                <p className="notifyForLogin text-md leading-relaxed text-gray-800 text-left">  La Connexion qui vous permet dedéposer et gérer vos annonces. Un accès de paiement en sécurisé. Ajouter les annonces aux favoris qui vous intéressent </p>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Créez un compte avec</small>
                </div>
                <Form
				  initialValues={{
						name:'',
						email: '',
						password: '',
						password_confirmation: ''
					  }}
				  onSubmit={onSubmit}
				  render={({ submitError, handleSubmit, form, submitting, pristine, values, invalid }) => (
						<form onSubmit={handleSubmit}>
						    <Field name="name" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="name"
									>
									  Votre nom ( ou votre identifiant )
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
									  value= {values.email}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Email"
									/>{meta.error && meta.touched && <span className="text-orange-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="departement"
                                >
                                    Votre département :
                                </label>
                                <Field
                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                    name="departement"
                                    component="select"
                                    disabled={submitting}
                                >
                                    {departementOptions.map(departementOption => (
                                        <option value={departementOption.value}>{departementOption.label}</option>
                                    ))}
                                </Field>
                            </div>
							<Field name="password" validate={required}>
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
									  value= {values.password}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Mot de passe"
									/>{meta.error && meta.touched && <span className="text-orange-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
							<Field name="password_confirmation" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="password_confirmation"
									>
									  Confirmer Mot de passe
									</label>
									<input
									  {...input}
									  type="password"
									  value= {values.password_confirmation}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Mot de passe confirme"
									/>{meta.error && meta.touched && <span className="text-orange-500 text-sm">{meta.error}</span>}
								  </div>
								)}
                            </Field>
						    <CardAcceptCondition />

						  <div className="text-center mt-6">
							<button
							  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
							  type="submit"
							  disabled={submitting || invalid}
							>
							  Create Account
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

Register.layout = Auth;
