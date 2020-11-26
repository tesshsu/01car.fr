import React from 'react';
import {pubIconlists} from "helpers/constant";

export default function PubContentThreeIcons() {
  return (
    <>
	 <div className="flex justify-center">
         {pubIconlists.map(pubIconlist => (   
			<div className="mr-4 p-3 text-center">                       
				<span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                    <i className={pubIconlist.icon}></i>
                </span>
                <span className="text-sm text-gray-500">{pubIconlist.name}</span>
            </div>  
		  ))}
      </div>
    </>
  );
}
