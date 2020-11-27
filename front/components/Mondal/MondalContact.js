import React from "react";
import ContactVendeur from "components/Tabs/ContactVendeur.js";
import Link from "next/link";
import {connect} from "react-redux";

const ModalContact = ({ dispatch,
					  loading,
					  car}) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-orange-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Vendeur contacter
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                     Contacter le vendeur
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <i class="fas fa-info-circle animate-ping"></i>
                    </span>
                  </button>
                </div>
                {/*body*/}
					<div className="relative p-6 flex-auto">
						<div className="container px-2 mx-auto">
							  <div className="flex flex-wrap">
								<div className="w-full flex-1">
								  <span className="text-md block my-2 text-gray-800 font-bold"><i className="fas fa-phone"></i></span>
								</div>
								<div className="w-full flex-1">
								  <span className="text-md block my-2 text-orange-500 underline vendeurPhone">{car.owner.phone}</span>
								</div>						
							  </div>
						</div>
						<div className="container px-2 mx-auto">
							  <div className="flex flex-wrap ">
								<div className="w-full flex-1">
								  <span className="text-md block my-2 text-gray-800 font-bold"><i className="fas fa-envelope"></i></span>
								</div>
								<div className="w-full flex-1">
								  <span className="text-md block my-2 text-orange-500 underline vendeurEmail"><a href={`mailto:${car.owner.email}`}>en clicker ici</a></span>
								</div>			
						</div>
                        <ContactVendeur transparent />						
					</div>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-gray-300 rounded-b">
                  <Link href="/footer/data_personal">
						  <a
							className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
							href="#"
						  >
							Données personnelles
						  </a>
				   </Link>
				  <button
                    className="bg-gray-800 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    fermer <i class="fas fa-times-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(ModalContact)