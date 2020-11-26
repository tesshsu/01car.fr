import React, {useEffect} from "react";
import Link from "next/link";
import IndexNavbar from '../components/Navbars/IndexNavbar.js';
import Footer from '../components/Footers/Footer.js';
import AnnoncePremier from '../components/Annonce/AnnoncePremier.js';
import AnnonceClassic from '../components/Annonce/AnnonceClassic.js';
import AnnonceSearchForm from '../components/Annonce/AnnonceSearchForm.js';
import Pagination from '../components/Annonce/Pagination.js';
import PubContentThreeIcons from '../layouts/PubContentThreeIcons.js';
import {connect} from "react-redux";
import {fetchCars} from 'service/actions/cars';
import {Router, useRouter }  from "next/router";

const Annonces = ({ dispatch,
                    loading,
                    cars,
                    current_page,
                    from,
                    to,
                    per_page,
                    last_page,
                    total,
                    hasErrors}) => {
    const router = useRouter();
    useEffect(() => {
        dispatch(fetchCars(router.query.page, router.query.perPage))
    }, [dispatch])
   return (
    <>
      <IndexNavbar fixed />
      <main>
	    <section className="mt-24 relative bg-gray-800">
		    <h4 className="text-3xl font-bold text-white text-center">
                Annonces avec note de confiance
            </h4>
			<PubContentThreeIcons />
		</section>
	    <AnnonceSearchForm />
		<section className="pt-10 pb-8 mt-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <AnnoncePremier transparent />
                <AnnonceClassic transparent />
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
    hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(Annonces)
