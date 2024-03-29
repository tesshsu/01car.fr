import React, {useEffect, useState} from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import QuestionsClassic from "components/Tabs/QuestionsClassic.js";
import CardBgVendre from "components/Cards/CardBgVendre.js";
import PubContent from "layouts/PubContent.js";
import PubContentThreeIcons from "layouts/PubContentThreeIcons.js";
import {connect} from 'react-redux'
import {premium_options_display} from "helpers/constant";

const Vendre = ({dispatch, loading, car}) => {

    const carHasOption = (premium_opt) => {
        return premium_options_display(premium_opt, car?.options?.prenium?.includes(premium_opt.value));
    }

    useEffect(() => {

    }, [dispatch])

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
                                Répondez et publiez votre annonce
                            </h1>
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-12/12 px-4 lg:order-1">
                                        <PubContentThreeIcons/>
                                    </div>
                                </div>
                                <QuestionsClassic/>
                            </div>
                        </div>
                    </div>
                </section>
                {!carHasOption ? (
                    <PubContent/>) : (null)
                }
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

export default connect(mapStateToProps)(Vendre)
