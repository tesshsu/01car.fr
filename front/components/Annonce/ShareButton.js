import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Router from "next/router";
import {connect} from 'react-redux';

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";



const ShareButton= ({
						 dispatch,
						 car,
						 loading,
					   }) => {

  let carId = car?.id;
  const title = "Bonjour, Je Partager cette Annonce de véhicule";
  const shareUrl = carId ? `http://localhost:3000/annonce?id=${carId}`  : "https://01car.fr/" ;
  return (
   <>
        <ul className="flex pl-0 rounded list-none flex-wrap">
		   <li>
		      <FacebookShareButton
					hashtag={title}
					url={shareUrl}
				>
				<FacebookIcon size={32} round />
				</FacebookShareButton>
		   </li>
		   <li>
		      <TwitterShareButton
					title={title}
					url={shareUrl}
				>
				<TwitterIcon size={32} round />
				</TwitterShareButton>
		   </li>
		   <li>
		      <EmailShareButton
					subject={title}
					body={shareUrl}
				>
				<EmailIcon size={32} round />
				</EmailShareButton>
		   </li>
		    <li>
		      <WhatsappShareButton
					title={title}
					url={shareUrl}
				>
				<WhatsappIcon size={32} round />
				</ WhatsappShareButton>
		   </li>
		</ul>

    </>
  );
}

const mapStateToProps = (state) => ({
	loading: state.carsReducer.loading,
	car: state.carsReducer.selectedCar,
	hasErrors: state.carsReducer.hasErrors,
})

export default connect(mapStateToProps)(ShareButton)
