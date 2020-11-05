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

const equipe_exterieurs = [
	  { name: "toit ouvrant", value: "toit ouvrant" },
	  { name: "4 roues motrices", value: "4 roues motrices" },
	  { name: "aide parking av/ar", value: "aide parking av/ar" },
	  { name: "caméra de recul", value: "caméra de recul" },
	  { name: "radar de recul", value: "radar de recul" },
	  { name: "attelage", value: "attelage" },
	  { name: "attelage", value: "toit ouvrant" },
	  { name: "jantes alu (numero remplir)", value: "jantes alu" },
	  { name: "pack sport", value: "pack sport" },
	  { name: "projecteurs bi-xénon", value: "projecteurs bi-xénon" },
	  { name: "régulateur adaptatif", value: "régulateur adaptatif" },
	  { name: "rétroviseurs dégivrants", value: "rétroviseurs dégivrants" },
	  { name: "rétroviseurs électriques", value: "rétroviseurs électriques" },
	  { name: "rétroviseurs rabattables", value: "rétroviseurs rabattables" },
	  { name: "rétroviseurs rabattables électriquement", value: "rétroviseurs rabattables électriquement" },
	  { name: "sorties d'échappement chromées", value: "sorties d'échappement chromées" }
  ];
  
const equipe_interieurs = [
	  { name: "vitres électriques", value: "vitres électriques" },
	  { name: "vitres électriques", value: "vitres électriques" },
	  { name: "banquette 1/3 - 2/3", value: "banquette 1/3 - 2/3" },
	  { name: "banquette rabattable", value: "banquette rabattable" },
	  { name: "boite automatique", value: "boite automatique" },
	  { name: "climatisation automatique", value: "climatisation automatique" },
	  { name: "démarrage sans clef", value: "démarrage sans clef" },
	  { name: "direction assistée", value: "direction assistée" },
	  { name: "écran tactile", value: "écran tactile" },
	  { name: "fermeture électrique", value: "fermeture électrique" },
	  { name: "fermeture électrique automatique", value: "fermeture électrique automatique" },
	  { name: "GPS", value: "GPS" },
	  { name: "intérieur cuir", value: "intérieur cuir" },
	  { name: "rétroviseurs rabattables", value: "rétroviseurs rabattables" },
	  { name: "kit téléphone main libre", value: "kit téléphone main libre" },
	  { name: "ouverture du coffre électrique", value: "ouverture du coffre électrique" },
	  { name: "palettes au volant", value: "palettes au volant" },
	  { name: "pare-brise chauffant", value: "pare-brise chauffant" },
	  { name: "pédalier alu", value: "pédalier alu" },
	  { name: "prédisposition téléphone", value: "prédisposition téléphone" },
	  { name: "prise 12V", value: "prise 12V" },
	  { name: "prise audio mini USB", value: "prise audio mini USB" },
	  { name: "prise audio USB", value: "prise audio USB" },
	  { name: "régulateur de vitesse", value: "régulateur de vitesse" },
	  { name: "siège conducteur réglable hauteur", value: "siège conducteur réglable hauteur" },
	  { name: "sièges chauffants", value: "sièges chauffants" },
	  { name: "sièges électrique à mémoire", value: "sièges électrique à mémoire" },
	  { name: "vitres surteintées", value: "vitres surteintées" },
	  { name: "volant sport", value: "volant sport" }
  ];
  
const equipe_securites = [
	  { name: "Airbags", value: "Airbags" },
	  { name: "APPLE CAR PLAY", value: "APPLE CAR PLAY" },
	  { name: "ABS", value: "ABS" },
	  { name: "affichage tête haute", value: "affichage tête haute" },
	  { name: "aide au démarrage en côte", value: "aide au démarrage en côte" },
	  { name: "alerte franchissement ligne", value: "alerte franchissement ligne" },
	  { name: "avertisseur d'angle mort", value: "avertisseur d'angle mort" },
	  { name: "essuie-glaces automatiques", value: "essuie-glaces automatiques" },
	  { name: "feux et essuie-glaces automatiques", value: "feux et essuie-glaces automatiques" },
	  { name: "fixations ISOFIX", value: "fixations ISOFIX" },
	  { name: "kit téléphone main libre bluetooth", value: "kit téléphone main libre bluetooth" },
	  { name: "phares av. de jour à LED", value: "phares av. de jour à LED" }
  ];
  
const equipe_antivols = [
	  { name: "alarme", value: "alarme" },
	  { name: "anti démarrage", value: "anti démarrage" },
	  { name: "gravage des vitres", value: "gravage des vitres" }
  ];

const equipe_conforts = [
	  { name: "Bluetooth", value: "Bluetooth" },
	  { name: "système d'entrée sans clef", value: "système d'entrée sans clef" },
	  { name: "virtual cockpit", value: "virtual cockpit" }
  ];
  
const equipe_autres = [
	  { name: "kit de réparation crevaison", value: "kit de réparation crevaison" },
	  { name: "système Start & Stop", value: "système Start & Stop" }
  ];

export default function QuestionsOptions() {
  return (
    <>
      <div className="flex flex-wrap">							    
								<div className="w-full lg:w-4/12 px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="question-7-1"
									>
										Q7 - 1 ÉQUIPEMENTS EXTÉRIEUR ET CHÂSSIS
									</label>
									<Field name="question-7-1" component="input" type="checkbox" className="ml-2 form-checkbox">
                                    </Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">		  
                                      <Condition when="question-7-1" is={true} className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 {equipe_exterieurs.map(equipe_exterieur => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={equipe_exterieur.name}
												  component="input"
												  type="checkbox"
												  value={equipe_exterieur.value}
												/>{' '}
												{equipe_exterieur.name}
											    </label>											    
											 ))}											 											  										  
										</div>
                                      </Condition>
									</div>
                                </div>
							  
								<div className="w-full lg:w-4/12 px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="question-7-2"
									>
										Q7 - 2 Intérieur
									</label>
									<Field name="question-7-2" component="input" type="checkbox" className="ml-2 form-checkbox">
                                    </Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Condition when="question-7-2" is={true} className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 {equipe_interieurs.map(equipe_interieur => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={equipe_interieur.name}
												  component="input"
												  type="checkbox"
												  value={equipe_interieur.value}
												/>{' '}
												{equipe_interieur.name}
											    </label>											    
											 ))}								  
										</div>
                                      </Condition>
									</div>
                              </div>
							  
							  <div className="w-full lg:w-4/12 px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="question-7-3"
									>
										Q7 - 3 Sécurité
									</label>
									<Field name="question-7-3" component="input" type="checkbox" className="ml-2 form-checkbox">
                                    </Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Condition when="question-7-3" is={true} className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 {equipe_securites.map(equipe_securite => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={equipe_securite.name}
												  component="input"
												  type="checkbox"
												  value={equipe_securite.value}
												/>{' '}
												{equipe_securite.name}
											    </label>											    
											 ))}                       											  
											</div>
                                      </Condition>
									</div>
                              </div>
							</div>
							
							<div className="flex flex-wrap">							    
								<div className="w-full lg:w-4/12 px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="question-7-4"
									>
										Q7 - 4 Antivol
									</label>
									<Field name="question-7-4" component="input" type="checkbox" className="ml-2 form-checkbox">
                                    </Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Condition when="question-7-4" is={true} className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											{equipe_antivols.map(equipe_antivol => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={equipe_antivol.name}
												  component="input"
												  type="checkbox"
												  value={equipe_antivol.value}
												/>{' '}
												{equipe_antivol.name}
											    </label>											    
											 ))}										 											                         											  
											</div>
                                      </Condition>
									</div>
                                </div>
								
								<div className="w-full lg:w-4/12 px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="question-7-5"
									>
										Q7- 5 CONFORT
									</label>
									<Field name="question-7-5" component="input" type="checkbox" className="ml-2 form-checkbox">
                                    </Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Condition when="question-7-5" is={true} className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 {equipe_conforts.map(equipe_confort => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={equipe_confort.name}
												  component="input"
												  type="checkbox"
												  value={equipe_confort.value}
												/>{' '}
												{equipe_confort.name}
											    </label>											    
											 ))}									 											                         											  
											</div>
                                      </Condition>
									</div>
                                </div>
								
								<div className="w-full lg:w-4/12 px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="question-7-6"
									>
										Q7 -6 AUTRES
									</label>
									<Field name="question-7-6" component="input" type="checkbox" className="ml-2 form-checkbox">
                                    </Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
                                      <Condition when="question-7-6" is={true} className="mt-2">
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
											 {equipe_autres.map(equipe_autre => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={equipe_autre.name}
												  component="input"
												  type="checkbox"
												  value={equipe_autre.value}
												/>{' '}
												{equipe_autre.name}
											    </label>											    
											 ))}										 											                         											  
											</div>
                                      </Condition>
									</div>
                                </div>
							</div>
    </>
  );
}
