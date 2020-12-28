import React from "react";
import {Field, Form} from 'react-final-form';
import {connect} from 'react-redux'
import {
	antivol_equipements,
	autre_equipements,
	confort_equipements,
	exterieur_equipements,
	interieur_equipements,
	securite_equipements
} from 'helpers/constant';
import {Condition} from 'helpers/formValidate';
import useAnnonces from 'service/hooks/useAnnonces';

const QuestionsOptions = ({dispatch, loading, car}) => {
	const {
		create
	} = useAnnonces();

	const sendPostEquipevalues = {
		outside: [],
		inside: [],
		anti_theft: [],
		comfort: [],
		other: [],
		security: []
	}
	const onSubmit = async (values) => {
		try {
			let {
				...payload
			} = values;

			const data = {...payload};
			await create(data);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<div className="justify-center flex flex-wrap">
				<div className="w-full">
					<Form
						initialValues={sendPostEquipevalues}
						onSubmit={onSubmit}
						render={({handleSubmit, form, submitting, pristine, values}) => (
							<form onSubmit={handleSubmit}>
								<div className="w-full px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="outside"
									>
										1 ÉQUIPEMENTS EXTÉRIEUR ET CHÂSSIS
									</label>
									<Field name="question-outside" component="input" type="checkbox" className="ml-2 form-checkbox" />
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-outside" is={true} className="mt-2">
											<div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{exterieur_equipements.map(exterieur_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="outside"
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

								<div className="w-full px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="question-7-2"
									>
										2 Intérieur
									</label>
									<Field name="question-inside" component="input" type="checkbox"
										   className="ml-2 form-checkbox">
									</Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-inside" is={true} className="mt-2">
											<div
												className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{interieur_equipements.map(interieur_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="inside"
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

								<div className="w-full px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="question-7-3"
									>
										3 Sécurité
									</label>
									<Field name="question-security" component="input" type="checkbox"
										   className="ml-2 form-checkbox">
									</Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-security" is={true} className="mt-2">
											<div
												className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{securite_equipements.map(securite_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="security"
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

								<div className="w-full px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="anti_theft"
									>
										4 Antivol
									</label>
									<Field name="question-theft" component="input" type="checkbox"
										   className="ml-2 form-checkbox">
									</Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-theft" is={true} className="mt-2">
											<div
												className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{antivol_equipements.map(antivol_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="anti_theft"
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

								<div className="w-full px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="comfort"
									>
										5 CONFORT
									</label>
									<Field name="question-comfort" component="input" type="checkbox"
										   className="ml-2 form-checkbox">
									</Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-comfort" is={true} className="mt-2">
											<div
												className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{confort_equipements.map(confort_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="comfort"
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

								<div className="w-full px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="other"
									>
										6 AUTRES
									</label>
									<Field name="question-other" component="input" type="checkbox"
										   className="ml-2 form-checkbox">
									</Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-other" is={true} className="mt-2">
											<div
												className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{autre_equipements.map(autre_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="comfort"
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
							</form>
						)}
					/>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	loading: state.car.loading,
	car: state.car.car,
	hasErrors: state.car.hasErrors,
})
export default connect(mapStateToProps)(QuestionsOptions)
