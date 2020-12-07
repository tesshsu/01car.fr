import React, { useEffect } from "react"
import Link from "next/link";
import {connect} from 'react-redux'
import FavorisButton from 'components/Favoris/FavorisButton';
import Moment from 'react-moment';
import {fetchCars} from 'service/actions/cars';
import ENVS from '../../environment';

const AnnoncePremier = ({ loading,
                          cars,
                          hasErrors}) => {

  return (
    <>
        {cars?.map(post => (post.prenium != null && post.prenium) &&
			<Link key={post.id} href={`/annonce?id=${post.id}`}>
				<div id={post.id} status={post.prenium} className="relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
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
						<img
							alt={post.uploads[0].name}
							src={ENVS.DEV.API_URL + post.uploads[0].url}
							className="shadow-lg mx-auto rounded-lg"
						  />
						<div className="w-full px-4 py-2 flex-1">
							  <h4 className="font-bold text-lg text-orange-700">
								<span className="uppercase">{post.brand}</span> - {post.model} | {post.version}
								<FavorisButton />
							  </h4>
							  <p className="text-md leading-relaxed text-gray-500">
								<Moment format="DD/MM/YYYY">{post.created_at}</Moment> | <span>{post.km}</span> KM <i className="far fa-grin-beam text-orange-500"></i>
							  </p>
						</div>
						<hr className="border-b-1 border-gray-400" />
						<div className="flex flex-wrap">
							<div className="w-full px-8 py-2 px-2 flex-1">
							  <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-orange-500 text-white font-bold uppercase rounded text-center animate-ping-small">
								Note de Conficance: {post.score_recognition}/20
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
							  <span className="font-bold px-1 text-xl ml-3 text-orange-500 text-right">
								{post.price} € (Prix qualifié)
							  </span>
							  <div className="w-full mt-2 flex-1">
								<p className="text-md text-gray-500 text-justify truncate">
								  {post.fuel} | {post.transmission}
								</p>
							  </div>
							</div>
						</div>
				</div>
			</Link>
		)}
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

export default connect(mapStateToProps)(AnnoncePremier)
