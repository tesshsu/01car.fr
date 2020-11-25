import React, {useEffect, useState} from 'react';
import Link from "next/link";
import useLoggedUser from 'service/hooks/useLoggedUser';
import Router from "next/router";
import FavorisButton from 'components/Favoris/FavorisButton';
import {connect} from 'react-redux'
import Moment from 'react-moment';
import {fetchPosts} from 'service/actions/annonces';

const AnnonceClassic = ({dispatch, loading, posts, hasErrors}) => {
  useEffect(() => {
	  dispatch(fetchPosts())
  }, [dispatch])
  return (
    <>
        {posts.map(post => (post.prenium != null && post.prenium == 0) &&
			<Link key={post.id} post={post} href={`/annonce_details/${post.id}`}>
			    <div id={post.id} statu={post.prenium} className="relative w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 mr-4 my-6 shadow-lg max-w-400-px rounded-lg border-2 border-gray-200 ">
					<img
						alt="..."
						src={require("assets/img/team-4-800x800.jpg")}
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
						  <p className="mt-2 px-2 py-2 text-md leading-relaxed bg-gray-600 text-white font-bold uppercase rounded text-center">
							Note de Conficance: {post.score_recognition}/20
						  </p>
						</div>
						<div className="w-full mt-2 py-2 flex-1">
						  <span className="font-bold px-1 text-md text-gray-600 text-right">
							{post.price} €
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
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(AnnonceClassic)
