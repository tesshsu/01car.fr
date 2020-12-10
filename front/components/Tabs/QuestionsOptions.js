import React from "react";
import {Field, Form} from 'react-final-form';
import {
	antivol_equipements,
	autre_equipements,
	confort_equipements,
	exterieur_equipements,
	interieur_equipements,
	securite_equipements
} from 'helpers/constant';
import {Condition} from 'helpers/formValidate';


const QuestionsOptions = ({dispatch, loading, response, hasErrors}) => {
	//submit
	/*const {
		submitReponses
	  } = useVendre();*/

	const onSubmit = async (values) => {
		try {
			let {
				...payload
			} = values;

			const data = {...payload};
			await submitReponses(data);
		} catch (err) {
			console.log(err.response);
			if (err.response && err.response.status === 422) {
				alert('Annonce deja existe');
			} else {
				alert('Impossible de créer le compte, merci de constacter notre equipe');
			}
		}
	}

	return (
		<>
			<div className="justify-center flex flex-wrap">
				<div className="w-full">
					<Form
						initialValues={{
							exterieur_equipements: [],
							interieur_equipements: [],
							securite_equipements: [],
							antivol_equipements: [],
							confort_equipements: [],
							autre_equipements: [],
						}}
						onSubmit={onSubmit}
						render={({handleSubmit, form, submitting, pristine, values}) => (
							<form onSubmit={handleSubmit}>
								<div className="w-full px-4">
									<label
										className="uppercase text-gray-700 text-sm"
										htmlFor="question-7-1"
									>
										Q7 - 1 ÉQUIPEMENTS EXTÉRIEUR ET CHÂSSIS
									</label>
									<Field name="question-7-1" component="input" type="checkbox" className="ml-2 form-checkbox" />
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-7-1" is={true} className="mt-2">
											<div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{exterieur_equipements.map(exterieur_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="exterieur_equipements"
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
										Q7 - 2 Intérieur
									</label>
									<Field name="question-7-2" component="input" type="checkbox"
										   className="ml-2 form-checkbox">
									</Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-7-2" is={true} className="mt-2">
											<div
												className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{interieur_equipements.map(interieur_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="interieur_equipements"
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
										Q7 - 3 Sécurité
									</label>
									<Field name="question-7-3" component="input" type="checkbox"
										   className="ml-2 form-checkbox">
									</Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-7-3" is={true} className="mt-2">
											<div
												className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{securite_equipements.map(securite_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="securite_equipements"
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
										htmlFor="question-7-4"
									>
										Q7 - 4 Antivol
									</label>
									<Field name="question-7-4" component="input" type="checkbox"
										   className="ml-2 form-checkbox">
									</Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-7-4" is={true} className="mt-2">
											<div
												className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{antivol_equipements.map(antivol_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="antivol_equipements"
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
										htmlFor="question-7-5"
									>
										Q7- 5 CONFORT
									</label>
									<Field name="question-7-5" component="input" type="checkbox"
										   className="ml-2 form-checkbox">
									</Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-7-5" is={true} className="mt-2">
											<div
												className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{confort_equipements.map(confort_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="confort_equipements"
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
										htmlFor="question-7-6"
									>
										Q7 -6 AUTRES
									</label>
									<Field name="question-7-6" component="input" type="checkbox"
										   className="ml-2 form-checkbox">
									</Field>
									<div className="relative flex w-full flex-wrap items-stretch mb-3">
										<Condition when="question-7-6" is={true} className="mt-2">
											<div
												className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
												{autre_equipements.map(autre_equipement => (
													<label
														className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
														<Field
															name="autre_equipements"
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

/*const mapStateToProps = (state) => ({
  loading: state.response.loading,
  response: state.response.response,
  hasErrors: state.response.hasErrors,
})
export default connect(mapStateToProps)(QuestionsOptions)*/

export default QuestionsOptions
