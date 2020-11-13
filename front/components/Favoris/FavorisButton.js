import React, {useEffect, useState} from 'react';
import Link from "next/link";
import useLogguedUser from 'service/hooks/useLogguedUser';
import Router from "next/router";
import Alert from 'components/Alerts/Alert';


export default function FavorisButton() {
  const {
    isAuthentificated,
    logguedUser
  } = useLogguedUser();   
  
  let [tokken,settokken]=useState(null);
  
  useEffect(() => {
    if (isAuthentificated && logguedUser) {
        try{
			const getTokken=async ()=>{
              const tok= await localStorage.getItem('ACCESS_TOKEN');
			  if(tok){
				settokken(tok);
			  }
			}
			getTokken();
		}catch(err){
			console.log(err);
        }
    }
  }, [isAuthentificated, logguedUser]);
  
  const [isClick, setIsClick] = React.useState(false);
  
  const onClickFavoris = (e) => {
    e.preventDefault()
    setIsClick(true)
  }
  
  const handleClickToLogin = (e) => {
    e.preventDefault()
    Router.push("/auth/login")
  }
  
  return (
   <>
        <button
				className="bg-gray-600 w-8 h-8 rounded-full outline-none focus:outline-none ml-2 mb-1"
				type="button"
				onClick={!isAuthentificated || (tokken = null) ? handleClickToLogin : onClickFavoris}
		>
		  <i className="far fa-heart"></i>
		</button>
        { isClick ? <Alert text=" ajoutées à vos favoris" /> : null }
    </>
  );
}