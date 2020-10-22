import React from "react";
import Link from "next/link";
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
const Condition = ({ when, is, children }) => (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
)
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}


export default function QuestionsOptions() {
  return (
    <>
      <div className="flex flex-wrap">							    
								<div className="w-full lg:w-4/12 px-4">
									<label
										className="block uppercase text-gray-700 text-sm mb-2"
										htmlFor="question-7-1"
									>
										Q7 - 1 EXTÉRIEUR ET CHÂSSIS :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field name="question-7-1" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option></option>
                                        <option value="start">Clicker pour Choisir</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Condition when="question-7-1" is="start" className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="toit ouvrant"
												  component="input"
												  type="checkbox"
												  value="toit ouvrant"
												/>{' '}
												toit ouvrant
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="4 roues motrices"							  
												  component="input"
												  type="checkbox"
												  value="4 roues motrices"
												/>{' '}
												4 roues motrices
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="aide parking av"							  
												  component="input"
												  type="checkbox"
												  value="aide parking av"
												/>{' '}
												aide parking av/ar
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="caméra de recul"					
												  component="input"
												  type="checkbox"
												  value="caméra de recul"
												/>{' '}
												caméra de recul
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="radar de recul"							  
												  component="input"
												  type="checkbox"
												  value="radar de recul"
												/>{' '}
												radar de recul
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="attelage"
												  component="input"
												  type="checkbox"
												  value="attelage"
												/>{' '}
												attelage
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="hayon électrique"
												  component="input"
												 
												  type="checkbox"
												  value="hayon électrique"
												/>{' '}
												hayon électrique
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="jantes alu"
												  component="input"
												  type="checkbox"
												  value="jantes alu"
												/>{' '}
												jantes alu (numero remplir)
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="pack sport"
												  component="input"
												  
												  type="checkbox"
												  value="pack sport"
												/>{' '}
												pack sport
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="projecteurs bi-xénon"
												  component="input"
												  type="checkbox"
												  value="projecteurs bi-xénon"
												/>{' '}
												projecteurs bi-xénon
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="régulateur adaptatif"
												  component="input"
												  type="checkbox"
												  value="régulateur adaptatif"
												/>{' '}
												régulateur adaptatif
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="rétroviseurs dégivrants"
												  component="input"
												  type="checkbox"
												  value="rétroviseurs dégivrants"
												/>{' '}
												rétroviseurs dégivrants
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="rétroviseurs électriques"
												  component="input"
												  type="checkbox"
												  value="rétroviseurs électriques"
												/>{' '}
												rétroviseurs électriques
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="rétroviseurs rabattables"
												  component="input"
												  type="checkbox"
												  value="rétroviseurs rabattables"
												/>{' '}
												rétroviseurs rabattables
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="rétroviseurs rabattables électriquement"
												  component="input"
												  type="checkbox"
												  value="rétroviseurs rabattables électriquement"
												/>{' '}
												rétroviseurs rabattables électriquement
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="sorties d'échappement chromées"
												  component="input"
												  type="checkbox"
												  value="sorties d'échappement chromées"
												/>{' '}
												sorties d'échappement chromées
											  </label>											  
											</div>
                                      </Condition>
									</div>
                                </div>
							  
								<div className="w-full lg:w-4/12 px-4">
									<label
										className="block uppercase text-gray-700 text-sm mb-2"
										htmlFor="question-7-2"
									>
										Q7 - 2 Intérieur :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field name="question-7-2" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option></option>
                                        <option value="start">Clicker pour Choisir</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Condition when="question-7-2" is="start" className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="vitres électriques"
												  component="input"
												  type="checkbox"
												  value="vitres électriques"
												/>{' '}
												vitres électriques
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="APPLE CAR PLAY"							  
												  component="input"
												  type="checkbox"
												  value="APPLE CAR PLAY"
												/>{' '}
												APPLE CAR PLAY
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="banquette 1/3 - 2/3"							  
												  component="input"
												  type="checkbox"
												  value="banquette 1/3 - 2/3"
												/>{' '}
												banquette 1/3 - 2/3
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="banquette rabattable"					
												  component="input"
												  type="checkbox"
												  value="banquette rabattable"
												/>{' '}
												banquette rabattable
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="boite automatique"							  
												  component="input"
												  type="checkbox"
												  value="boite automatique"
												/>{' '}
												boite automatique
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="climatisation automatique"
												  component="input"
												  type="checkbox"
												  value="climatisation automatique"
												/>{' '}
												climatisation automatique
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="démarrage sans clef"
												  component="input"
												  type="checkbox"
												  value="démarrage sans clef"
												/>{' '}
												démarrage sans clef
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="direction assistée"
												  component="input"
												  type="checkbox"
												  value="direction assistée"
												/>{' '}
												direction assistée
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="écran tactile"
												  component="input"
												  
												  type="checkbox"
												  value="écran tactile"
												/>{' '}
												écran tactile
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="fermeture électrique"
												  component="input"
												  type="checkbox"
												  value="fermeture électrique"
												/>{' '}
												fermeture électrique
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="fermeture électrique automatique"
												  component="input"
												  type="checkbox"
												  value="fermeture électrique automatique"
												/>{' '}
												fermeture électrique automatique
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="GPS"
												  component="input"
												  type="checkbox"
												  value="GPS"
												/>{' '}
												GPS
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="intérieur cuir"
												  component="input"
												  type="checkbox"
												  value="intérieur cuir"
												/>{' '}
												intérieur cuir
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="rétroviseurs rabattables"
												  component="input"
												  type="checkbox"
												  value="rétroviseurs rabattables"
												/>{' '}
												rétroviseurs rabattables
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="kit téléphone main libre"
												  component="input"
												  type="checkbox"
												  value="kit téléphone main libre"
												/>{' '}
												kit téléphone main libre
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="ouverture du coffre électrique"
												  component="input"
												  type="checkbox"
												  value="ouverture du coffre électrique"
												/>{' '}
												ouverture du coffre électrique
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="palettes au volant"
												  component="input"
												  type="checkbox"
												  value="palettes au volant"
												/>{' '}
												palettes au volant
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="pare-brise chauffant"
												  component="input"
												  type="checkbox"
												  value="pare-brise chauffant"
												/>{' '}
												pare-brise chauffant
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="pédalier alu"
												  component="input"
												  type="checkbox"
												  value="pédalier alu"
												/>{' '}
												pédalier alu
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="prédisposition téléphone"
												  component="input"
												  type="checkbox"
												  value="prédisposition téléphone"
												/>{' '}
												prédisposition téléphone
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="prise 12V"
												  component="input"
												  type="checkbox"
												  value="prise 12V"
												/>{' '}
												prise 12V
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="prise audio mini USB"
												  component="input"
												  type="checkbox"
												  value="prise audio mini USB"
												/>{' '}
												prise audio mini USB
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="prise audio USB"
												  component="input"
												  type="checkbox"
												  value="prise audio USB"
												/>{' '}
												prise audio USB
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="régulateur de vitesse"
												  component="input"
												  type="checkbox"
												  value="régulateur de vitesse"
												/>{' '}
												régulateur de vitesse
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="siège conducteur réglable hauteur"
												  component="input"
												  type="checkbox"
												  value="siège conducteur réglable hauteur"
												/>{' '}
												siège conducteur réglable hauteur
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="sièges chauffants"
												  component="input"
												  type="checkbox"
												  value="sièges chauffants"
												/>{' '}
												sièges chauffants
											  </label>
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="sièges électrique à mémoire"
												  component="input"
												  type="checkbox"
												  value="sièges électrique à mémoire"
												/>{' '}
												sièges électrique à mémoire
											  </label>	
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="vitres surteintées"
												  component="input"
												  type="checkbox"
												  value="vitres surteintées"
												/>{' '}
												vitres surteintées
											  </label>		
                                              <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="volant sport"
												  component="input"
												  type="checkbox"
												  value="volant sport"
												/>{' '}
												volant sport
											  </label>											  
											</div>
                                      </Condition>
									</div>
                              </div>
							  
							  <div className="w-full lg:w-4/12 px-4">
									<label
										className="block uppercase text-gray-700 text-sm mb-2"
										htmlFor="question-7-3"
									>
										Q7 - 3 Sécurité :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field name="question-7-3" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option></option>
                                        <option value="start">Clicker pour Choisir</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Condition when="question-7-3" is="start" className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="Airbags"
												  component="input"
												  type="checkbox"
												  value="Airbags"
												/>{' '}
												Airbags
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="APPLE CAR PLAY"							  
												  component="input"
												  type="checkbox"
												  value="APPLE CAR PLAY"
												/>{' '}
												APPLE CAR PLAY
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="ABS"							  
												  component="input"
												  type="checkbox"
												  value="ABS"
												/>{' '}
												ABS
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="affichage tête haute"					
												  component="input"
												  type="checkbox"
												  value="affichage tête haute"
												/>{' '}
												affichage tête haute
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="aide au démarrage en côte"							  
												  component="input"
												  type="checkbox"
												  value="aide au démarrage en côte"
												/>{' '}
												aide au démarrage en côte
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="alerte franchissement ligne"
												  component="input"
												  type="checkbox"
												  value="alerte franchissement ligne"
												/>{' '}
												alerte franchissement ligne
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="avertisseur d'angle mort"
												  component="input"
												  type="checkbox"
												  value="avertisseur d'angle mort"
												/>{' '}
												avertisseur d'angle mort
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="essuie-glaces automatiques"
												  component="input"
												  type="checkbox"
												  value="essuie-glaces automatiques"
												/>{' '}
												essuie-glaces automatiques
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="feux et essuie-glaces automatiques"
												  component="input"
												  
												  type="checkbox"
												  value="feux et essuie-glaces automatiques"
												/>{' '}
												feux et essuie-glaces automatiques
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="fixations ISOFIX"
												  component="input"
												  type="checkbox"
												  value="fixations ISOFIX"
												/>{' '}
												fixations ISOFIX
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="kit téléphone main libre bluetooth"
												  component="input"
												  type="checkbox"
												  value="kit téléphone main libre bluetooth"
												/>{' '}
												kit téléphone main libre bluetooth
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="phares av. de jour à LED"
												  component="input"
												  type="checkbox"
												  value="phares av. de jour à LED"
												/>{' '}
												phares av. de jour à LED
											  </label>	                             											  
											</div>
                                      </Condition>
									</div>
                              </div>
							</div>
							
							<div className="flex flex-wrap">							    
								<div className="w-full lg:w-4/12 px-4">
									<label
										className="block uppercase text-gray-700 text-sm mb-2"
										htmlFor="question-7-4"
									>
										Q7 - 4 Antivol :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field name="question-7-4" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option></option>
                                        <option value="start">Clicker pour Choisir</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Condition when="question-7-4" is="start" className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="alarme"
												  component="input"
												  type="checkbox"
												  value="alarme"
												/>{' '}
												alarme
											  </label>											 
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="anti démarrage"							  
												  component="input"
												  type="checkbox"
												  value="anti démarrage"
												/>{' '}
												anti démarrage
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="gravage des vitres"					
												  component="input"
												  type="checkbox"
												  value="gravage des vitres"
												/>{' '}
												gravage des vitres
											  </label>											 											                         											  
											</div>
                                      </Condition>
									</div>
                                </div>
								
								<div className="w-full lg:w-4/12 px-4">
									<label
										className="block uppercase text-gray-700 text-sm mb-2"
										htmlFor="question-7-5"
									>
										Q7- 5 CONFORT :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field name="question-7-5" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option></option>
                                        <option value="start">Clicker pour Choisir</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Condition when="question-7-5" is="start" className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="Bluetooth"
												  component="input"
												  type="checkbox"
												  value="Bluetooth"
												/>{' '}
												Bluetooth
											  </label>											 
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="système d'entrée sans clef"							  
												  component="input"
												  type="checkbox"
												  value="système d'entrée sans clef"
												/>{' '}
												système d'entrée sans clef
											  </label>
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="virtual cockpit"					
												  component="input"
												  type="checkbox"
												  value="virtual cockpit"
												/>{' '}
												virtual cockpit
											  </label>											 											                         											  
											</div>
                                      </Condition>
									</div>
                                </div>
								
								<div className="w-full lg:w-4/12 px-4">
									<label
										className="block uppercase text-gray-700 text-sm mb-2"
										htmlFor="question-7-6"
									>
										Q7 -6 AUTRES :
									</label>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Field name="question-7-6" validate={required} component="select" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option></option>
                                        <option value="start">Clicker pour Choisir</option>
                                      </Field>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white bg-orange-500">
                                        <i className="fas fa-angle-down text-2xl my-2"></i>
                                      </div>
                                      <Condition when="question-7-6" is="start" className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="kit de réparation crevaison"
												  component="input"
												  type="checkbox"
												  value="kit de réparation crevaison"
												/>{' '}
												kit de réparation crevaison
											  </label>											 
											  <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name="système Start & Stop"							  
												  component="input"
												  type="checkbox"
												  value="système Start & Stop"
												/>{' '}
												système Start & Stop
											  </label>										 											                         											  
											</div>
                                      </Condition>
									</div>
                                </div>
							</div>
    </>
  );
}
