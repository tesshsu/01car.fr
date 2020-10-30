import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const DetailsBasic = () => {
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
  const basics = [
	  { icon: "fas fa-gas-pump", name: "Energie", value: "Essence sans plomb" },
	  { icon: "fas fa-tachometer-alt", name: "Kilométrage", value: "23000" },
	  { icon: "fas fa-file-invoice-dollar", name: "Boîte de vitesses", value: "Manuelle" },
	  { icon: "fas fa-car-side", name: "Nombre de portes", value: "5" },
	  { icon: "fas fa-car-battery", name: "Deuxième jeu de clés ou carte", value: "7 CV / 130 ch" },
	  { icon: "far fa-calendar-alt", name: "Année", value: "2012" }
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

export default DetailsBasic;
