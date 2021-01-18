import React, {useEffect} from 'react';
import MondalContact from "components/Mondal/MondalContact.js";
import NoteConfiance from "components/Tabs/NoteConfiance.js";
import {connect} from "react-redux";
import useLoggedUser from "../../../service/hooks/useLoggedUser";
import useAnnonces from "../../../service/hooks/useAnnonces";
import Link from "next/link";

const DetailsSide = ({ dispatch,
					  loading,
					  car}) => {
  const basics = [
	  { icon: "fas fa-gas-pump", value: car?.fuel },
	  { icon: "fas fa-tachometer-alt", value: car?.km },
	  { icon: "fas fa-magic", value: car?.transmission },
	  { icon: "fas fa-car-side", value: car?.doors },
	  { icon: "fas fa-car-battery", value: car?.power }
  ];
	const {isAuthentificated, loggedUser} = useLoggedUser();
	const [isowner, setIsowner] = React.useState(false);
	const [ispremium, setIspremium] = React.useState(false);
	const {
		editCar
	} = useAnnonces();

    let prix_api = car?.price
    let car_owner_id = car?.owner.id
	let car_premium = car?.premium
	useEffect(() => {
		const owner = loggedUser?.loggedUser?.id;
		if( owner == car_owner_id){
			setIsowner(true);
		}else if(car_premium == true){
			setIspremium(true);
		}
	}, [dispatch])

	const handleEdit = async (id) => {
		try {
			await editCar(id);
		} catch (err) {
			console.log(err);
		}
	}

  return (
    <>
        <div className="w-full lg:w-4/12 px-12 mt-4">
			<div className="priceVehicule font-bold px-1 text-2xl text-gray-800 text-left">
				Prix du vendeur
			</div>
			<div className="priceVehicule font-bold px-1 text-5xl text-orange-500 text-left underline">
				{car?.estimate_price} €
			</div>
			{ prix_api != null && car?.premium  ? (
				<div className="flex flex-wrap rounded border border-solid border-gray-500 p-1">
				<div className="priceVehicule font-bold px-1 text-xl text-gray-800 text-left">
					<span className="font-bold px-1 text-xl text-orange-500 text-left underline">Entre {car?.price} € et 19 278 €</span>
				</div>
				<p className="text-md block p-3 text-orange-500 rounded"><i class="far fa-thumbs-up"></i> Valeur estimée par la base de données nationale </p>
				</div>
				) : (
				  null
			)}

			<div className="flex flex-wrap mt-4">
			   <NoteConfiance />
			</div>
			{basics.map(basic => (
				<div className="flex flex-wrap">
					<div className="w-4/12">
						<span className="text-lg block p-3  mt-2 text-gray-800 rounded border border-solid border-gray-200"><i className={basic.icon}></i></span>
					</div>

					<div className="w-8/12">
						{ basic.value !== null ? (
							<span className="carburant text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200"> {basic.value}</span>
						):(
							<div className="button-block">
								{isAuthentificated && isowner ? (
									<span
										className="question-1 text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">
										<Link href="/prix">
											<a
												href="#"
												className="text-blue-500"
											>
												ajouter d'information
											</a>
										</Link>
								    </span>
								):(
									<span
										className="question-1 text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">
								      pas d'information
								    </span>
								)}
							</div>

						)}
					</div>
				</div>
			))}
			<div className="flex flex-wrap mt-2">
				<div className="flex flex-wrap content-center items-center justify-center h-full">
					{isowner ? (
						null
					):(
						<MondalContact transparent />
					)}

                </div>
			</div>
			<div className="flex flex-wrap mt-2">
				{ car?.premium == true && isowner ? (
					<div className="button-block justify-left">
						<button
							className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 mr-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
							type="button"
						>
							<Link href="/vendre">
								<a
									href="#"
									onClick={(e) => handleEdit(car?.id)}
									className={
										"text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
									}
								>
									Modifier <i className="far fa-edit"></i>
								</a>
							</Link>
						</button>
					</div>
				) :(
					null
				)}
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

export default connect(mapStateToProps)(DetailsSide)
