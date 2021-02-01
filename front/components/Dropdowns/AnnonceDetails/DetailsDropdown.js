import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import {
	anti_theft_equipments,
	comfort_equipments,
	inside_equipments,
	security_equipments,
	other_equipments,
	outside_equipments
} from "../../../helpers/constant";

const DetailsDropdown = ({
							 dispatch,
							 loading,
							 car
						 }) => {

	const [navbarOpen, setNavbarOpen] = React.useState(false);
	const ncs = [
		{icon: "fas fa-male", name: "Annonces par", value: car?.owner_type},
		{icon: "far fa-calendar-check", name: "Vehicule est disponible", value: car?.available},
		{icon: "fas fa-smoking", name: "Véhicule est Non fumeur", value: car?.smoking},
		{icon: "fas fa-key", name: "Le double des clés", value: car?.duplicate_keys},
		{icon: "far fa-question-circle", name: "La raison pour vendre", value: car?.sale_reason},
		{icon: "fas fa-users-cog", name: "Nombre de mains", value: car?.hand_number},
		{icon: "fas fa-heartbeat", name: "Etat de vehicule", value: car?.state},
		{icon: "fas fa-globe-europe", name: "Origine du véhicule", value: car?.country},
	];

	const renderSwitchValue = (param) => {
		switch (param) {
			case 'pro':
				return 'professionnel';
			case 'private':
				return 'particulier';
			case 'immediately':
				return 'Immédiatement';
			case 'Dans un mois':
				return 'Dans un mois';
			case 'later':
				return 'plus tard';
			case true :
				return 'oui';
			case false :
				return 'non';
			case 'false':
				return 'non';
			case 'not_expected':
				return 'Ne correspond pas à mes attentes';
			case 'change':
				return 'Changer de véhicule';
			case 'other':
				return 'Autre project';
			case 1 :
				return '1ère ou 2ème main';
			case 3 :
				return ' 3ème mains ou plus';
			case 'satisfactory':
				return 'satisfaisant';
			case 'good':
				return ' Bon état';
			case 'very_good':
				return 'Très bon état';
			case 'new':
				return 'Neuf';
			case 'FR':
				return 'France';
			case 'ZZ':
				return 'étrangère';
			default:
				return param;
		}
	}

	let Equips = car?.equipments

	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-full px-8 py-2 px-2 flex-1">
					<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed text-gray-800 underline font-bold uppercase rounded">
						<i class="fas fa-thumbs-up"></i> NOTE DE CONFIANCE
					</h4>
				</div>
				{ncs?.map(nc => (
					<div className="container px-2 mx-auto">
						<div className="flex flex-wrap">
							<div className="w-full px-4 flex-1">
								<span
									className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i
									className={nc.icon}></i> {nc.name} </span>
							</div>
							<div className="w-full px-4 flex-1">
								{ nc.value == null ? (
									<span
										className="question-1 text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">
								        pas d'information
								    </span>
								):(
									<span
										className="question-1 text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">
								      {renderSwitchValue(nc.value)}
								    </span>
								)}
							</div>
						</div>
					</div>
				))}
				<div className="blockEquipment text-center mt-2 p-4">
					<button type="button" className="mr-4 p-2 border border-solid border-gray-600 text-lg text-gray-600 font-bold uppercase rounded" onClick={() => setNavbarOpen(!navbarOpen)}>
						<i className="fas fa-tools"></i> ÉQUIPEMENTS DE SÉRIE ET OPTIONS <i
						className="fas fa-chevron-circle-down"></i></button>
					<div
						className={
							"flex flex-wrap mt-4" +
							(navbarOpen ? " block" : " hidden")
						}
						id="example-navbar-warning"
					>
						{Equips?.outside?.length > 0 ? (
							<div className="container px-2 mx-auto">
								<div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Exterieur equipements :
								</div>
								<div className="flex flex-wrap">
									{Equips.outside?.map(i => (
										<div className="w-full px-3 flex-1">
									<span
										className="exEquiplist text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {outside_equipments[i]}</span>
										</div>
									))}
								</div>
							</div>) : (null)}

						{Equips?.inside?.length > 0 ? (
							<div className="container px-2 mx-auto">
								<div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Interieur equipements :
								</div>
								<div className="flex flex-wrap">
									{Equips.inside?.map(i => (
										<div className="w-full px-3 flex-1">
									<span
										className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {inside_equipments[i]} </span>
										</div>
									))}
								</div>
							</div>) : (null)}

						{Equips?.security?.length > 0 ? (
							<div className="container px-2 mx-auto">
								<div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Securite equipements :
								</div>
								<div className="flex flex-wrap">
									{Equips.security?.map(i => (
										<div className="w-full px-3 flex-1">
									<span
										className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {security_equipments[i]} </span>
										</div>
									))}
								</div>
							</div>) : (null)}

						{Equips?.anti_theft?.length > 0 ? (
							<div className="container px-2 mx-auto">
								<div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Antivol equipements :</div>
								<div className="flex flex-wrap">
									{Equips.anti_theft?.map(i => (
										<div className="w-full px-3 flex-1">
									<span
										className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {anti_theft_equipments[i]} </span>
										</div>
									))}
								</div>
							</div>) : (null)}

						{Equips?.confort?.length > 0 ? (
							<div className="container px-2 mx-auto">
								<div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Confort equipements :</div>
								<div className="flex flex-wrap">
									{Equips.confort?.map(i => (
										<div className="w-full px-3 flex-1">
									<span
										className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {comfort_equipments[i]} </span>
										</div>
									))}
								</div>
							</div>) : (null)}

						{Equips?.other?.length > 0 ? (
							<div className="container px-2 mx-auto">
								<div className="text-gray-600 px-4 text-lg underline mt-2 font-bold">Autre equipements :</div>
								<div className="flex flex-wrap">
									{Equips.other?.map(i => (
										<div className="w-full px-3 flex-1">
									<span
										className="text-md block my-2 p-3 text-gray-600 rounded border border-solid border-gray-200"> {other_equipments[i]} </span>
										</div>
									))}
								</div>
							</div>) : (null)}
					</div>
				</div>

			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(DetailsDropdown)
