import React, {useEffect, useState} from 'react';
import Link from "next/link";
import useLoggedUser from 'service/hooks/useLoggedUser';
import Router from "next/router";


export default function FavorisButton() {
  const {
    isAuthentificated,
    loggedUser
  } = useLoggedUser();

  let [tokken,settokken]=useState(null);

  useEffect(() => {
    if (isAuthentificated && loggedUser) {
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
  }, [isAuthentificated, loggedUser]);

  const [isClick, setIsClick] = React.useState(false);

  const style = {
    color: isClick ? '#ed8936' : '#fff',
  }

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
		  <i className="far fa-heart" style={style}></i>
		</button>
        { isClick ? <span className="text-xs text-gray-500"> Ajoutées</span> : null }
    </>
  );
}
