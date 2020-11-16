import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Router from "next/router";
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

const shareUrl = "https://01car.fr/annonce_details";

export default function ShareButton() {
 
  return (
   <>
        <ul className="flex pl-0 rounded list-none flex-wrap">
		   <li>
		      <FacebookShareButton
					hashtag="Bonjour, Je Partager cette Annonce"
					quote={shareUrl}
				>
				<FacebookIcon size={32} round />
				</FacebookShareButton> 
		   </li>
		   <li>
		      <TwitterShareButton
					title="Bonjour, Je Partager cette Annonce"
					url={shareUrl}
				>
				<TwitterIcon size={32} round />
				</TwitterShareButton> 
		   </li>
		   <li>
		      <EmailShareButton
					subject="Bonjour, Je Partager cette Annonce"
					body={shareUrl}
				>
				<EmailIcon size={32} round />
				</EmailShareButton> 
		   </li>
		    <li>
		      <WhatsappShareButton
					title="Bonjour, Je Partager cette Annonce"
					separator={shareUrl}
				>
				<WhatsappIcon size={32} round />
				</ WhatsappShareButton> 
		   </li>
		</ul>
		 
    </>
  );
}