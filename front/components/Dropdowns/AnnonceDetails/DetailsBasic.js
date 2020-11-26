import React, {useEffect} from 'react';
import Link from "next/link";
import {fetchCar} from 'service/actions/cars';
import {connect} from 'react-redux'
import moment from 'moment';

const DetailsBasic = ({
						 dispatch,
						 car,
						 loading,
					   }) => {
  let yearOfcar = car?.dt_entry_service;
  const basics = [
	  { icon: "fas fa-gas-pump", name: "Energie", value: car?.fuel },
	  { icon: "fas fa-tachometer-alt", name: "Kilométrage", value: car?.km },
	  { icon: "fas fa-file-invoice-dollar", name: "Boîte de vitesses", value: car?.transmission },
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
							  <span className="carburant text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200"> {basic.value}</span>
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
