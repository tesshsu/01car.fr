import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import AnnonceDetail from "../components/Annonce/AnnonceDetail.js";
import PubContentThreeIcons from "layouts/PubContentThreeIcons.js";
import {connect} from "react-redux";

const Annonce = ({dispatch,
                     loading,
                     cars,
                     current_page,
                     from,
                     to,
                     per_page,
                     last_page,
                     total,
                     hasErrors,
                     id}) => {

    return (
        <>
            <IndexNavbar fixed />
            <main>
                <section className="mt-24 relative bg-gray-800">
                    <h4 className="text-3xl font-bold text-white text-center">
                        Annonce avec note de confiance {id}
                    </h4>
                    <PubContentThreeIcons />
                </section>
                <section className="pt-10 pb-8 mt-4 mb-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <AnnonceDetail transparent />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}

const mapStateToProps = (state) => ({
    loading: state.carsReducer.loading,
    cars: state.carsReducer.cars,
    current_page: state.carsReducer.current_page,
    from: state.carsReducer.from,
    to:  state.carsReducer.to,
    per_page: state.carsReducer.per_page,
    last_page: state.carsReducer.last_page,
    total: state.carsReducer.total,
    hasErrors: state.carsReducer.hasErrors
})

export default connect(mapStateToProps)(Annonce)
