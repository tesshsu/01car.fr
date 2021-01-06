import React, {useEffect, useState} from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardBgVendre from "components/Cards/CardBgVendre.js";
import PubContentThreeIcons from "layouts/PubContentThreeIcons.js";
import QuestionsPremier from "components/Tabs/QuestionsPremier.js";
import {connect} from 'react-redux'

const VendrePremium = ({
                    dispatch
                }) => {

    return (
        <>
            <IndexNavbar fixed/>
            <main className="vendre-page">
                <CardBgVendre />
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <h1 className="font-bold text-4xl text-gray-700 mt-4 text-center">
                                RÉPONSES AU QUESTIONNAIRES DE CONFIANCE <span className="font-bold text-orange-500">(Premium)</span>
                            </h1>
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-12/12 px-4 lg:order-1">
                                        <PubContentThreeIcons/>
                                    </div>
                                </div>
                                <QuestionsPremier/>
                            </div>
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
    car: state.carsReducer.selectedCar,
    hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(VendrePremium)
