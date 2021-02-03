import React from 'react';
import Link from "next/link";
import useLoggedUser from '../service/hooks/useLoggedUser';
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import {listPubs} from "../helpers/constant";
import ModalPayment from "../components/Modal/ModalPayment";
import {connect} from "react-redux";
import usePayments from "../service/hooks/usePayments";


const Payment = ({
                  dispatch,
                  loading,
                  car,
                  hasErrors
              }) => {
    const {
        loggedUser
    } = useLoggedUser();

    const [showModal, setShowModal] = React.useState(false);

    const {
        createPayment
    } = usePayments();

    const onClickPayment = async e => {
        e.preventDefault();
        return setShowModal(true);
    }

    const onPaymentSubmit = async (token) => {
        try {
            let paymentRequest = {};
            paymentRequest.user_id = loggedUser?.loggedUser?.id;
            paymentRequest.car_id = car?.id;
            paymentRequest.amount = 699; // in cents
            paymentRequest.currency = "eur";
            paymentRequest.description = "Annonce Premium pour votre " + (car?.brand ? car?.brand : "") + " " + ( car?.model ? car?.model : "");
            paymentRequest.provider = 'stripe';
            paymentRequest.token = token.id;

            return await createPayment(paymentRequest);

            console.log("paymentRequest : ", paymentRequest)
        } catch (err) {
           alert("votre paiement pas valide")
        }
    }

    return (
        <>
            <IndexNavbar fixed/>
            <main className="payment-page">
                <div className="flex justify-center mt-24 bg-orange-500 text-2xl font-bold ">
                    {listPubs.map(listPub => (
                        <div key={listPub.title.replace(/\s+/g, '_')} className="mr-4 p-3 text-center">
								<span className="block uppercase tracking-wide text-white">
								  <i className={listPub.icon}> </i>
								</span>
                            <span className="text-sm text-white">{listPub.title}</span>
                        </div>
                    ))}
                </div>
                <section className="container px-4 mx-auto border-2 rounded border-gray-500 py-10 z-40">
                    <div className="product flex flex-wrap mt-8 mb-12">
                        <div className="w-full md:w-6/12 px-4">
                            <img
                                alt="..."
                                src={require("assets/img/qualite_logo_satisfait.png")}
                                className="w-full align-center topImagePayment"
                            />
                            <img
                                alt="..."
                                src={require("assets/img/qualite_logo.png")}
                                className="w-full align-center togBadgePayment animate-bounce-small ease-in-out"
                            />
                            {car?.uploads.length > 0 ? (
                                <img
                                    alt={car?.uploads[0].name}
                                    src={process.env.NEXT_PUBLIC_API_URL + car?.uploads[0].url}
                                    className="shadow-lg mx-auto rounded-lg"
                                />
                            ) : (
                                <img
                                    alt="defalut carImg"
                                    src={require("assets/img/car/default.jpg")}
                                    className="shadow-lg mx-auto rounded-lg"
                                />
                            )
                            }
                        </div>
                        <div className="w-full md:w-6/12 px-4">

                            <div className="description">
                                <h1 className="ml-3 leading-6 font-medium text-orange-500 text-2xl">Tarif
                                    Premium *</h1>
                                <div className="ml-3 leading-6 font-medium text-orange-500 text-4xl">6.99€
                                </div>
                                <p className="ml-3 leading-6 font-medium text-gray-700 text-lg">Votre Annonce id: <span className="text-orange-500 font-bold">{car?.id}</span></p>
                                <p className="ml-3 leading-6 font-medium text-gray-700 text-lg">Votre Annonce marque model : <span className="text-orange-500 font-bold">{car?.brand}, {car?.model}</span></p>

                                <p className="ml-3 leading-6 font-medium text-gray-500 text-md mt-4">*Le tarif
                                    est pour une annonce et dure dans un mois</p>
                                <p className="ml-3 leading-6 font-medium text-gray-500 text-md">
                                    vous acceptez
                                    les conditions pour diriger ver le payment et notre politique de
                                    confidentialité
                                    <Link href="/footer/policy">
                                        <a
                                            className={
                                                "text-sm font-normal block w-full whitespace-no-wrap bg-transparent text-orange-500"
                                            }
                                        >
                                            Lire la politique de confidentialité
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-12 text-center p-8">
                        <ModalPayment onSubmit={onPaymentSubmit}/>
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

export default connect(mapStateToProps)(Payment)
