import React, {useEffect} from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import MesAnnoncesLists from '../components/Annonce/MesAnnoncesLists.js';
import Pagination from '../components/Annonce/Pagination.js';
import {listPubs} from "../helpers/constant";
import {connect} from "react-redux";
const MesAnnonces = ({
                         dispatch,
                         loading,
                         cars,
                         current_page,
                         from,
                         to,
                         per_page,
                         last_page,
                         total,
                         hasErrors
                     }) => {
    return (
        <>
            <IndexNavbar fixed/>
            <main className="mesAnnonces-page">
                <section className="mt-24 relative bg-gray-800">
                    <h4 className="text-3xl font-bold text-white text-center">
                        Gérer mes annonces déposées
                    </h4>
                    <div className="flex justify-center">
                        {listPubs.map(listPub => (
                            <div key={listPub.title.replace(/\s+/g, '_')} className="mr-4 p-3 text-center">
								<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
								  <i className={listPub.icon}> </i>
								</span>
                                <span className="text-sm text-gray-500">{listPub.title}</span>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="pt-10 pb-8 mt-4">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            { total == 0 ? (
                                    <div className="container mx-auto text-center">
                                        <h5 className="text-xl font-semibold pb-4">
                                            Vous n'aviez pas encore des annonces, publiez une annonce rapidement !!
                                        </h5>
                                        <button
                                            className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <Link href="/vendre">
                                                <a
                                                    href="#pablo"
                                                    className={
                                                        "text-xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
                                                    }
                                                >
                                                    <i className="fas fa-thumbs-up animate-ping"></i> Cliquez ici
                                                </a>
                                            </Link>
                                        </button>
                                    </div>
                            ):(
                                <MesAnnoncesLists/>
                            )}

                        </div>
                        <div className="flex content-center items-center justify-center h-full mb-24 mt-8">
                            {total >= 11 ?(
                                <Pagination transparent
                                            current_page={current_page}
                                            from={from}
                                            to={to}
                                            per_page={per_page}
                                            last_page={last_page}
                                            total={total}
                                />
                            ):(
                                null
                            ) }

                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}


const mapStateToProps = (state) => ({
    loading: state.carsReducer.loading,
    cars: state.carsReducer.selectedCar,
    current_page: state.carsReducer.current_page,
    from: state.carsReducer.from,
    to: state.carsReducer.to,
    per_page: state.carsReducer.per_page,
    last_page: state.carsReducer.last_page,
    total: state.carsReducer.total,
    hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(MesAnnonces)
