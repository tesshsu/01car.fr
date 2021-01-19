import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import moment from 'moment';
import useLoggedUser from "../../../service/hooks/useLoggedUser";
import Link from "next/link";
const DetailsBasic = ({
						 dispatch,
						 car,
						 loading,
					   }) => {
  let yearOfcar = car?.dt_entry_service;
	const {isAuthentificated, loggedUser} = useLoggedUser();
	const [isowner, setIsowner] = React.useState(false);
	let car_owner_id = car?.owner.id
	let car_premium = car?.premium
	useEffect(() => {
		const owner = loggedUser?.loggedUser?.id;
		if( owner == car_owner_id){
			setIsowner(true);
		}
	}, [dispatch])
  const basics = [
	  { icon: "fas fa-gas-pump", name: "Energie", value: car?.fuel },
	  { icon: "fas fa-tachometer-alt", name: "Kilométrage", value: car?.km },
	  { icon: "fas fa-magic", name: "Boîte de vitesses", value: car?.transmission },
	  { icon: "fas fa-car-side", name: "Nombre de portes", value: car?.doors },
	  { icon: "fas fa-car-battery", name: "cylindrée", value: car?.displacement },
	  { icon: "far fa-calendar-alt", name: "Année", value: moment(yearOfcar).format("DD/MM/YYYY")}
  ];
  return (
    <>
        <div className="flex flex-wrap">
			<div className="w-full px-8 py-2 px-2 flex-1">
				<h4 className="mt-2 px-2 py-2 text-xl leading-relaxed underline text-gray-800 font-bold uppercase rounded">
				    <i className="fas fa-info"></i> DETAILS DU VÉHICULE
				</h4>
			</div>
			{basics.map(basic => (
				<div className="container px-2 mx-auto">
					<div className="flex flex-wrap">
						<div className="w-full px-4 flex-1">
							  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i className={basic.icon}></i> {basic.name}: </span>
						</div>
						<div className="w-full px-4 flex-1">
							{ basic.value !== null ? (
								<span className="carburant text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200"> {basic.value}</span>
							):(
								<div className="button-block">
									{ car_premium == false && isowner ? (
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
				</div>
            ))}
		</div>
    </>
  );
};

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(DetailsBasic)
