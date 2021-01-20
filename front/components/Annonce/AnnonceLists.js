import React, {useEffect, useState} from "react"
import Link from "next/link";
import {connect} from 'react-redux'
import FavorisButton from 'components/Favoris/FavorisButton';
import Moment from 'react-moment';
import Router from "next/router";
import {create} from "../../service/actions/favorites";
import useLoggedUser from "../../service/hooks/useLoggedUser";

const AnnonceLists = ({
                          loading,
                          dispatch,
                          cars,
                          hasErrors
                      }) => {

    const [search, setSearch] = useState("");
    const [filteredCars, setFilteredCars] = useState([]);
    const {
        isAuthentificated,
        loggedUser
    } = useLoggedUser();

    useEffect(() => {
        setFilteredCars(
            cars?.filter((car) =>
                car.brand?.toLowerCase().includes(search.toLowerCase()) ||
                car.version?.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, cars]);

    const onClickFavoris = async (payload) => {
        try {
            if (!isAuthentificated || !loggedUser) {
                Router.push("/auth/login")
            } else {
                dispatch(create(payload));
            }
        } catch (err) {
            console.log(err);
        }
    }

    if (loading) {
        return <p>Loading annonces...</p>;
    }

    return (
        <>
            <div className="relative flex w-full flex-wrap items-stretch">
					<span
                        className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
						<i className="fas fa-search"></i>
					</span>
                <input
                    type="text"
                    placeholder="Chercher ici..."
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {filteredCars?.map((car, idx) => car?.premium ?
                (
                    <Link key={idx} href={car?.id ? (`/annonce?id=${car?.id}`) : ("#")} {...car}>
                        <div id={car.id}
                             className="preniumAnnonce relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
                            <img
                                alt="..."
                                src={require("assets/img/qualite_logo_satisfait.png")}
                                className="w-full align-center topImage"
                            />
                            <img
                                alt="..."
                                src={require("assets/img/qualite_logo.png")}
                                className="w-full align-center togBadge animate-ping ease-in-out"
                            />
                            <div className="togBadgeTime text-lg pb-2">
                                <i className="far fa-clock"></i> <Moment format="DD/MM/YYYY">{car?.created_at}</Moment>
                                <span className="float-right">{car.price} €</span>
                            </div>
                            {car.uploads.length > 0 ? (
                                <img
                                    alt={car?.uploads[0].name}
                                    src={process.env.NEXT_PUBLIC_API_URL + car?.uploads[0].url}
                                    className="carImageSingle shadow-lg mx-auto rounded-lg"
                                />
                            ) : (
                                <img
                                    alt="defalut carImg"
                                    src={require("assets/img/car/default.jpg")}
                                    className="carImageSingle shadow-lg mx-auto rounded-lg"
                                />
                            )
                            }
                            <div className="w-full px-4 py-2 flex-1">
                                <h4 className="font-bold text-lg text-orange-700">
                                    <span className="uppercase">{car.brand}</span> - {car?.model} | {car?.version}
                                    <FavorisButton category="car" entity_id={car?.id} action={onClickFavoris}/>
                                </h4>
                                <p className="text-md leading-relaxed text-gray-500">
                                    <Moment
                                        format="DD/MM/YYYY">{car?.dt_entry_service}</Moment> | <span>{car?.km}</span> KM <i
                                    className="far fa-grin-beam text-orange-500"></i>
                                </p>
                            </div>
                            <hr className="border-b-1 border-gray-400"/>
                            <div className="flex flex-wrap">
                                <div className="w-full px-8 py-2 px-2 flex-1">
                                    <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-orange-500 text-white font-bold uppercase rounded text-center animate-ping-small">
                                        NOTE DE CONFIANCE: {car?.confidence_note}/20
                                    </p>
                                </div>
                                <div className="w-full mt-2 py-2 flex-1">
                                    <button
                                        className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                    >
                                        <i className="fas fa-unlock-alt"></i>
                                    </button>
                                    <button
                                        className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                    >
                                        <i className="far fa-thumbs-up"></i>
                                    </button>
                                    <div className="w-full mt-2 flex-1">
                                        <p className="text-xl text-gray-600 text-justify truncate">
                                            {car.fuel} | {car.transmission}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>) : (
                    <Link key={idx} car={car} href={idx ? (`/annonce?id=${car?.id}`) : ("#")} {...car}>
                        <div id={car.id}
                             className="classicAnnonce relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
                            {car.uploads.length > 0 ? (
                                <img
                                    alt={car?.uploads[0].name}
                                    src={process.env.NEXT_PUBLIC_API_URL + car?.uploads[0].url}
                                    className="carImageSingle shadow-lg mx-auto rounded-lg"
                                />
                            ) : (
                                <img
                                    alt="defalut carImg"
                                    src={require("assets/img/car/default.jpg")}
                                    className="carImageSingle shadow-lg mx-auto rounded-lg"
                                />
                            )
                            }
                            <div className="togBadgeTime text-lg pb-2">
                                <i class="far fa-clock"></i> <Moment format="DD/MM/YYYY">{car.created_at}</Moment> |
                                {car.price} €
                            </div>
                            <div className="w-full px-4 py-2 flex-1">
                                <h4 className="font-bold text-lg text-orange-700">
                                    <span className="uppercase">{car?.brand}</span> - {car.model} | {car.version}
                                    <FavorisButton category="car" entity_id={car?.id} action={onClickFavoris()}/>
                                </h4>
                                <p className="text-md leading-relaxed text-gray-500">
                                    <Moment
                                        format="DD/MM/YYYY">{car?.dt_entry_service}</Moment> | <span>{car?.km}</span> KM <i
                                    className="far fa-grin-beam text-orange-500"></i>
                                </p>
                            </div>
                            <hr className="border-b-1 border-gray-400"/>
                            <div className="flex flex-wrap">
                                <div className="w-full px-8 py-2 px-2 flex-1">
                                    <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-gray-600 text-white font-bold uppercase rounded text-center">
                                        NOTE DE CONFIANCE: {car?.confidence_note}/20
                                    </p>
                                </div>
                                <div className="w-full mt-2 py-2 flex-1">
                                    <div className="w-full mt-8 flex-1">
                                        <p className="text-xl text-gray-600 text-justify truncate">
                                            {car?.fuel} | {car?.transmission}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            )}
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

export default connect(mapStateToProps)(AnnonceLists)
