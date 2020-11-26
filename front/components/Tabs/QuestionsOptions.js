import React from "react";
import Link from "next/link";
import { Form, Field } from 'react-final-form';
import {exterieur_equipements, interieur_equipements, securite_equipements, antivol_equipements, confort_equipements, autre_equipements} from 'helpers/constant';

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
											 {exterieur_equipements.map(exterieur_equipement => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={exterieur_equipement.name}
												  component="input"
												  type="checkbox"
												  value={exterieur_equipement.value}
												/>{' '}
												{exterieur_equipement.name}
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
											 {interieur_equipements.map(interieur_equipement => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={interieur_equipement.name}
												  component="input"
												  type="checkbox"
												  value={interieur_equipement.value}
												/>{' '}
												{interieur_equipement.name}
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
											 {securite_equipements.map(securite_equipement => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={securite_equipement.name}
												  component="input"
												  type="checkbox"
												  value={securite_equipement.value}
												/>{' '}
												{securite_equipement.name}
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
											{antivol_equipements.map(antivol_equipement => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={antivol_equipement.name}
												  component="input"
												  type="checkbox"
												  value={antivol_equipement.value}
												/>{' '}
												{antivol_equipement.name}
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
											 {confort_equipements.map(confort_equipement => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={confort_equipement.name}
												  component="input"
												  type="checkbox"
												  value={confort_equipement.value}
												/>{' '}
												{confort_equipement.name}
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
											 {autre_equipements.map(autre_equipement => (
											    <label className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
												<Field
												  name={autre_equipement.name}
												  component="input"
												  type="checkbox"
												  value={autre_equipement.value}
												/>{' '}
												{autre_equipement.name}
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
