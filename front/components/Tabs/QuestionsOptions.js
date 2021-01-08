import React from "react";
import {Field} from 'react-final-form';
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

const QuestionsOptions = (props) => {
	let equipments = {
		outside_option: props?.values?.outside_option,
		outside: props?.values?.equipments?.outside,
		inside_option: props?.values?.inside_option,
		inside: props?.values?.equipments?.inside,
		anti_theft_option: props?.values?.anti_theft_option,
		anti_theft: props?.values?.equipments?.anti_theft,
		comfort_option: props?.values?.comfort_option,
		comfort: props?.values?.equipments?.comfort,
		other_option: props?.values?.other_option,
		other: props?.values?.equipments?.other,
		security_option: props?.values?.security_option,
		security: props?.values?.equipments?.security,
	}
	let outside_option = equipments.outside_option;
	let inside_option = equipments.inside_option;
	let anti_theft_option = equipments.anti_theft_option;
	let comfort_option = equipments.comfort_option;
	let other_option = equipments.other_option;
	let security_option = equipments.security_option;

	return (
		<>
			<div className="justify-center flex flex-wrap">
				<div className="w-full">

					<div className="w-full px-4">
						<label
							className="uppercase text-gray-700 text-sm"
							htmlFor="outside"
						>
							1 ÉQUIPEMENTS EXTÉRIEUR ET CHÂSSIS
						</label>
						<Field name="outside_option" component="input" type="checkbox"
							   className="ml-2 form-checkbox"
							   />
						<div className="relative flex w-full flex-wrap items-stretch mb-3">
							<Condition when="outside_option" is={true} className="mt-2">
								<div className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
									{exterieur_equipements.map(exterieur_equipement => (
										<label
											className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
											<Field
												name="equipments.outside[]"
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
						<Field name="inside_option" component="input" type="checkbox"
							   className="ml-2 form-checkbox">
						</Field>
						<div className="relative flex w-full flex-wrap items-stretch mb-3">
							<Condition when="inside_option" is={true} className="mt-2">
								<div
									className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
									{interieur_equipements.map(interieur_equipement => (
										<label
											className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
											<Field
												name="equipments.inside[]"
												component="input"
												type="checkbox"
												initialValue={equipments?.inside?.includes(interieur_equipement.value)}
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
						<Field name="security_option" component="input" type="checkbox"
							   className="ml-2 form-checkbox">
						</Field>
						<div className="relative flex w-full flex-wrap items-stretch mb-3">
							<Condition when="security_option" is={true} className="mt-2">
								<div
									className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
									{securite_equipements.map(securite_equipement => (
										<label
											className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
											<Field
												name="equipments.security[]"
												component="input"
												type="checkbox"
												initialValue={equipments?.security?.includes(securite_equipement.value)}
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
						<Field name="anti_theft_option" component="input" type="checkbox"
							   className="ml-2 form-checkbox">
						</Field>
						<div className="relative flex w-full flex-wrap items-stretch mb-3">
							<Condition when="anti_theft_option" is={true} className="mt-2">
								<div
									className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
									{antivol_equipements.map(antivol_equipement => (
										<label
											className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
											<Field
												name="equipments.anti_theft[]"
												component="input"
												type="checkbox"
												initialValue={equipments?.anti_theft?.includes(antivol_equipement.value)}
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
						<Field name="comfort_option" component="input" type="checkbox"
							   className="ml-2 form-checkbox"
							   >
						</Field>
						<div className="relative flex w-full flex-wrap items-stretch mb-3">
							<Condition when="comfort_option" is={true} className="mt-2">
								<div
									className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
									{confort_equipements.map(confort_equipement => (
										<label
											className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
											<Field
												name="equipments.comfort[]"
												component="input"
												type="checkbox"
												initialValue={equipments?.comfort?.includes(confort_equipement.value)}
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
						<Field
							name="other_option"
							component="input"
							type="checkbox"
							className="ml-2 form-checkbox"
						>
						</Field>

						<div className="relative flex w-full flex-wrap items-stretch mb-3">
							<Condition when="other_option" is={true} className="mt-2">
								<div
									className="relative flex w-full flex-wrap items-stretch mb-3 px-2 mt-2">
									{autre_equipements.map(autre_equipement => (
										<label
											className="border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight">
											<Field
												name={"equipments.other[]"}
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
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})
export default connect(mapStateToProps)(QuestionsOptions)
