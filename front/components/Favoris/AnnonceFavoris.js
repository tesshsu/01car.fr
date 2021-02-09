import React, {useEffect} from "react";
import Link from "next/link";
import {connect} from "react-redux";
import Moment from 'react-moment';
import useFavorites from "../../service/hooks/useFavorites";

const AnnonceFavoris = ({
                            loading,
                            favorites,
                            hasErrors
                        }) => {

    if (loading) {
        return <p>Chargement des annonces ...</p>;
    }
    const {
        deleteFavorite
    } = useFavorites();

    const handleDelete = async (id) => {
        try {
            if (confirm('Voulez vous vraiment supprimer cette annonce?')) {
                await deleteFavorite(id, {});
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {favorites?.map(favorite => (
                <div className="container px-4 mx-auto" id={favorite?.entity?.id} >
                    <div className="favoris-block flex-wrap">
                        <div className="w-full px-4 mt-4 flex-1">
                            {favorite?.entity?.uploads?.length > 0 ? (
                                <img
                                    alt={favorite?.entity?.uploads[0].name}
                                    src={process.env.NEXT_PUBLIC_API_URL + favorite?.entity?.uploads[0].url}
                                    className="shadow-lg mx-auto rounded-lg"
                                />
                            ) : (
                                <img
                                    alt="defalut carImg"
                                    src={require("assets/img/car/default.jpg")}
                                    className="carImageSingle shadow-lg mx-auto rounded-lg"
                                />
                            )}
                        </div>
                        <div className="w-full px-4 flex-1">
			  <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
			        <div className="top justify-between">
					  <div className="titlePart font-bold text-2xl text-orange-700 text-center py-2 m-2">
					     {favorite?.entity?.brand} - {favorite?.entity?.model}
                          { favorite?.entity?.premium == true ? (
                              <span className="text-md text-orange-500 mt-8"> Premium <i
                                  className="fas fa-thumbs-up"></i></span>
                              ) : ( null )
                          }
					  </div>
					  <div class="price font-bold text-orange-500  text-2xl text-center bg-gray-400 px-4 py-2">
					    {favorite?.entity?.price} €
					  </div>
					</div>
					<div className="container mx-auto">
					  <div className="flex flex-wrap">
							<div className="w-1/3">
							  <span
                                  className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">{favorite?.entity?.fuel}</span>
							</div>
                          {favorite?.entity?.transmission && (
                              <div className="w-1/3">
							  <span
                                  className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">{favorite?.entity?.transmission}</span>
                              </div>
                          )}
							<div className="w-1/3">
							  <span
                                  className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">{favorite?.entity?.km} km</span>
							</div>
							<div className="w-1/3">
							  <span
                                  className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><Moment
                                  format="DD/MM/YYYY">{favorite?.entity?.dt_entry_service}</Moment></span>
							</div>
                          <div className="w-1/3">
                                  <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200"><i className="fas fa-map-marker-alt"></i> {favorite?.entity?.postal_code} </span>
                              </div>
						  </div>
					</div>
					<div className="button-block justify-left">
						<button
                            className="voirButton bg-orange-500 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 mr-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"
                        >
						      <Link href={favorite?.entity?.id ? (`/annonce?id=${favorite?.entity?.id}`) : ("#")} {...favorite}>
                                          <a
                                              href={favorite?.entity?.id ? (`/annonce?id=${favorite?.entity?.id}`) : ("#")}
                                              className={
                                                  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                              }
                                          >
                                            Voir <i className="fas fa-clipboard-check"></i>
                                          </a>
						      </Link>
						</button>
						 <button
                             className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                             type="button"
                         >
                                          <a
                                              href="#"
                                              onClick={(e) => handleDelete(favorite?.id)}
                                              className={
                                                  "text-sm py-1 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white-500"
                                              }
                                          >
                                            Supprimer l'annonce <i className="fas fa-trash"></i>
                                          </a>
                                    </button>
                    </div>
					<p className="mt-4 px-6 py-2 text-md leading-relaxed bg-gray-600 text-white font-bold uppercase rounded text-center">
						NOTE DE CONFIANCE: {favorite?.entity?.confidence_note}/20
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
    loading: state.favoritesReducer.loading,
    favorites: state.favoritesReducer.favorites
})

export default connect(mapStateToProps)(AnnonceFavoris);
