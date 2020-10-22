import React from "react";
import { createPopper } from "@popperjs/core";

const ContactVendeur = () => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openTooltip = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top"
    });
    setPopoverShow(true);
  };
  const closeTooltip = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-right">
          <button
            className="bg-gray-500 text-gray-500 active:bg-gray-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            onMouseEnter={openTooltip}
            onMouseLeave={closeTooltip}
            ref={btnRef}
          >
            Info
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-gray-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className="bg-gray-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg"
              >
                Règles de prudence
              </div>
              <div className="text-white p-3">
                <ul className="list-unstyled">
								    <li>
					                  1. Ne jamais verser d'argent avant d'avoir vu le véhicule, quelle que soit l'urgence évoquée
                                    </li>
									<li>
					                  2. Rencontrez le vendeur et essayez le véhicule
                                    </li>
									<li>
					                  3. N'envoyez jamais vos coordonnées bancaires à un inconnu
                                    </li>
									<li>
					                  4. Assurez-vous d'avoir pu joindre par téléphone au moins une fois votre interlocuteur
                                    </li>
                                </ul> 		
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactVendeur;