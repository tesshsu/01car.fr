import React from "react";
import { createPopper } from "@popperjs/core";
import {connect} from "react-redux";

const NoteConfiance = ({ dispatch,
					  loading,
					  car}) => {
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
        <div className="w-full text-center">
          <button
            className="bg-orange-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            onMouseEnter={openTooltip}
            onMouseLeave={closeTooltip}
            ref={btnRef}
          >
            <i className="fas fa-question-circle animate-bounce"></i> Note de confiance: <span className="noteConfiance underline text-xl"> {car?.confidence_note} /20 </span>
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
                C'est quoi Note de confiance ?
              </div>
              <div className="text-white p-3">
                    <ul className="list-unstyled">
						<li>
					        1. Le vendeur a répondu favorablement aux questions
                        </li>
						<li>
					        2. Les documents téléchargés sont valides
                        </li>
					    <li>
					        3. Garantie l'état réel du véhicule
                        </li>
						<li>
					        4. Garantie la fiabilité de l annonce
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

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(NoteConfiance)