import React, {useEffect} from "react"
import {connect} from "react-redux";
import Link from "next/link";
import {fetchCars} from 'service/actions/cars';
import Router, {useRouter} from "next/router";
import Moment from 'react-moment';
import useLoggedUser from "../../service/hooks/useLoggedUser";
import useAnnonces from "../../service/hooks/useAnnonces";

const MesAnnoncesLists = ({
                              dispatch,
                              loading,
                              cars,
                              hasErrors
                          }) => {

    const router = useRouter();
    const {isAuthentificated, loggedUser} = useLoggedUser();
    const {
        editCar,
        deleteCar,
    } = useAnnonces();

    useEffect(() => {
        if (!isAuthentificated) {
            Router.push("/");
        }
    }, [isAuthentificated]);

    useEffect(() => {
        const owner = loggedUser?.loggedUser?.id;
        // set default value for by page
        const per_page_req = router.query.perPage ? router.query.perPage : 10;
        dispatch(fetchCars(router.query.page, per_page_req, owner))
    }, [dispatch])

    if (loading) {
        return <p>Chargement des annonces ...</p>;
    }

    if(hasErrors){
        return <p>pas de cars...</p>;
    }
    const handleEdit = async (id) => {
        try {
            await editCar(id);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = async (id) => {
        try {
            if (confirm('Voulez vous vraiment supprimer cette annonce?')) {
                await deleteCar(id, {});
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            {cars?.map((car, idx) => (
                <div key={`car_${car.id}`} id={`car_${car.id}`} className="container px-4 mx-auto my-4">
                    <div className="favoris-block flex-wrap">
                        {car.uploads.length > 0 ? (
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
                        <div className="w-full px-4 flex-1">
                            <span
                                className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
							    <div className="top justify-between">
                                  <div className="font-bold text-2xl uppercase text-orange-700 text-center py-2 m-2">
                                     {car?.brand} {car?.generation} | <i className="far fa-clock"></i> <Moment
                                      format="DD/MM/YYYY">{car?.expire_at}</Moment>
                                  </div>
                                  <div
                                      className="price font-bold text-orange-500  text-2xl text-center bg-gray-400 px-4 py-2">
                                    {car?.estimate_price} €
                                  </div>
                                </div>
                              <div className="container mx-auto">
                              <div className="flex flex-wrap">
                                    <div className="w-1/3">
                                      <span
                                          className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i
                                          className="fas fa-gas-pump"></i> {car.fuel}</span>
                                    </div>
                                    <div className="w-1/3">
                                      <span
                                          className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i
                                          className="fas fa-magic"></i> {car.transmission}</span>
                                    </div>
                                    <div className="w-1/3">
                                      <span
                                          className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i
                                          className="fas fa-tachometer-alt"></i> {car?.km} km</span>
                                    </div>
                                    <div className="w-1/3">
                                      <span
                                          className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i
                                          className="fas fa-calendar-check"></i> <Moment
                                          format="DD/MM/YYYY">{car.created_at}</Moment></span>
                                    </div>
                                      {car.premium == true && (
                                          <span className="myAnnocePremium relative font-bold text-2xl uppercase text-orange-500 mt-4 ml-2"><i
                                              className="far fa-thumbs-up animate-bounce"></i>
                                          </span>
                                      )}
                                  </div>
                            </div>
                                <div className="button-block justify-left">
                                    <button
                                        className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 mr-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                      <Link href={car?.id ? (`/annonce?id=${car?.id}`) : ("#")} {...car}>
                                          <a
                                              href={car?.id ? (`/annonce?id=${car?.id}`) : ("#")}
                                              className={
                                                  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                              }
                                          >
                                            Voir <i className="fas fa-clipboard-check"></i>
                                          </a>
                                      </Link>
                                    </button>
                                    {isAuthentificated && car?.premium == true ? (
                                        <button
                                            className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 mr-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <Link href="/vendre">
                                                <a
                                                    href="#"
                                                    onClick={(e) => handleEdit(car?.id)}
                                                    className={
                                                        "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                                    }
                                                >
                                                    Modifier <i className="far fa-edit"></i>
                                                </a>
                                            </Link>
                                        </button>
                                    ):(
                                        <button
                                            className="bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 mr-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <Link href="/prix">
                                                <a
                                                    href="#"
                                                    className={
                                                        "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                                    }
                                                >
                                                    Premium pour modifier <i className="fas fa-cart-plus"></i>
                                                </a>
                                            </Link>
                                        </button>
                                    )}

                                     <button
                                         className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                         type="button"
                                     >
                                          <a
                                              href="#"
                                              onClick={(e) => handleDelete(car?.id)}
                                              className={
                                                  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                              }
                                          >
                                            Supprimer l'annonce <i className="fas fa-trash"></i>
                                          </a>
                                    </button>
                                </div>
							  <p className="mt-4 px-6 py-2 text-md leading-relaxed bg-gray-600 text-white font-bold uppercase rounded text-center">
                                    NOTE DE CONFIANCE: {car?.confidence_note}/20
							  </p>
                            </span>
                        </div>
                    </div>
                </div>

            ))}
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

export default connect(mapStateToProps)(MesAnnoncesLists)
