import React, {useEffect} from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import MesAnnoncesLists from '../components/Annonce/MesAnnoncesLists.js';
import Pagination from '../components/Annonce/Pagination.js';
import {listPubs} from "../helpers/constant";
import {connect} from "react-redux";
import {useRouter} from "next/router";

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
            <main className="favoris-page">
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
                            <MesAnnoncesLists/>
                        </div>
                        <div className="flex content-center items-center justify-center h-full mb-24 mt-8">
                            <Pagination transparent
                                        current_page={current_page}
                                        from={from}
                                        to={to}
                                        per_page={per_page}
                                        last_page={last_page}
                                        total={total}
                            />
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
    cars: state.carsReducer.cars,
    current_page: state.carsReducer.current_page,
    from: state.carsReducer.from,
    to: state.carsReducer.to,
    per_page: state.carsReducer.per_page,
    last_page: state.carsReducer.last_page,
    total: state.carsReducer.total,
    hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(MesAnnonces)
