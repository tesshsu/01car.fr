import React from "react";
import Link from "next/link";
import {connect} from 'react-redux'
import { createPopper } from "@popperjs/core";
import {premium_ncs} from 'helpers/constant';
import {premium_options_display} from "../../../helpers/constant";

const DetailsPremiumDropdown = ({
						 dispatch,
						 car,
						 loading,
					   }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const carHasOption = (premium_opt) => {
      return premium_options_display(premium_opt, car?.options?.prenium?.includes(premium_opt.value));
    }

  return (
    <>
       {car?.prenium == true ? (
		<div className="container px-2 mx-auto">
		<div className="w-full px-8 py-2 px-2 flex-1">
			<h4 className="mt-2 px-2 py-2 text-2xl leading-relaxed text-orange-500 font-bold underline uppercase rounded animate-bounce-once">
				<i class="fas fa-award animate-ping"></i> NOTE DE CONFINANCE TOP GARANTIE
			</h4>
		</div>
		<div className="container px-2 mx-auto">
			<div className="flex flex-wrap">
			     <ul className="flex flex-col lg:flex-row lg:justify-start ist-none px-6">
					  <li className="flex items-center">
						<a
							className="lg:text-gray-800 lg:hover:text-gray-300 text-gray-800 px-5 py-2 lg:py-2 flex items-center text-xs uppercase font-bold"
							href="#"
							ref={btnDropdownRef}
							onClick={(e) => {
							  e.preventDefault();
							  dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
							}}
						  >
							 <div className="container px-2 mx-auto rounded border border-solid border-gray-200 text-gray-500 active:bg-grey-500">
								<div className="flex flex-wrap">
										<span className="text-sm block my-2 p-3 animate-bounce"> Rapport Sécurité </span>
										<span className="text-sm block my-2 p-3"><i class="fas fa-chevron-circle-down"></i></span>
								</div>
							</div>

						 </a>
						<div
							ref={popoverDropdownRef}
							className={
							  (dropdownPopoverShow ? "block " : "hidden ") +
							  "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg max-w-580-px"
							}
						>
							<div className="flex justify-center">
								<div className="mr-4 p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
									  <i className="far fa-smile text-4xl mr-1"></i>
									</span>
									<span className="text-sm text-gray-500">Note de confiance > 15 </span>
								</div>
								<div className="mr-4 p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
										<i className="fas fa-unlock-alt text-4xl mr-1"></i>
									</span>
									<span className="text-sm text-gray-500">Sécuriser au maximum</span>
								</div>
								<div className="lg:mr-4 p-3 text-center">
									<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
										<i className="fas fa-certificate text-4xl mr-1"></i>
									</span>
									<span className="text-sm text-gray-500">Garantie qualite</span>
								</div>
							</div>
						</div>
					  </li>
				</ul>
				{premium_ncs.map(premium_nc => (
					<div className="container px-2 mx-auto">
						<div className="flex flex-wrap">
							<div className="w-full px-4 flex-1">
							  <span className="text-xl block my-2 p-3 text-gray-800 font-bold rounded border border-solid border-gray-200"><i class={premium_nc.icon}></i> {premium_nc.name} : </span>
							</div>
							<div className="w-full px-4 flex-1">
							  <span className="question-11 text-xl block my-2 p-3 text-orange-500 rounded border border-solid border-gray-200">{carHasOption(premium_nc)}</span>
							</div>
						</div>
					</div>
				))}
			</div>
	    </div>
        </div>) : (null)}
    </>
  );
};

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(DetailsPremiumDropdown)
